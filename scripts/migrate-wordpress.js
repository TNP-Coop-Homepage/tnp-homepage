#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * WordPressエクスポートデータを新しいブログ構造に移行するスクリプト
 */

const INPUT_DIR = path.join(__dirname, '../tmp/output/post');
const OUTPUT_DIR = path.join(__dirname, '../posts');

function sanitizeSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // 英数字、スペース、ハイフン以外を削除
    .replace(/\s+/g, '-')     // スペースをハイフンに
    .replace(/-+/g, '-')      // 連続するハイフンを1つに
    .trim();
}

function extractDateFromPath(filePath) {
  const match = filePath.match(/(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : new Date().toISOString().split('T')[0];
}

function processMarkdownContent(content, slug) {
  // 既に絶対パスの画像は変更しない
  // 相対パスの画像のみ処理
  let processedContent = content;
  
  // images/filename.ext -> images/filename.ext (そのまま)
  // ./images/filename.ext -> images/filename.ext
  processedContent = processedContent.replace(/!\[([^\]]*)\]\(\.\/images\/([^)]+)\)/g, '![$1](images/$2)');
  
  return processedContent;
}

function migratePost(inputPath) {
  const indexPath = path.join(inputPath, 'index.md');
  const imagesPath = path.join(inputPath, 'images');
  
  if (!fs.existsSync(indexPath)) {
    console.log(`Skipping ${inputPath}: no index.md found`);
    return;
  }
  
  // index.mdを読み込み
  const content = fs.readFileSync(indexPath, 'utf8');
  const lines = content.split('\n');
  
  // Front matterの解析
  let frontMatterEnd = -1;
  let frontMatterStart = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      if (frontMatterStart === -1) {
        frontMatterStart = i;
      } else {
        frontMatterEnd = i;
        break;
      }
    }
  }
  
  if (frontMatterStart === -1 || frontMatterEnd === -1) {
    console.log(`Skipping ${inputPath}: invalid front matter`);
    return;
  }
  
  // Front matterとコンテンツを分離
  const frontMatterLines = lines.slice(frontMatterStart + 1, frontMatterEnd);
  const bodyContent = lines.slice(frontMatterEnd + 1).join('\n');
  
  // Front matterから情報を抽出
  const frontMatter = {};
  frontMatterLines.forEach(line => {
    if (line.includes(':')) {
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();
      
      if (key.trim() === 'categories' || key.trim() === 'tags') {
        // 配列の処理は後で行う
        return;
      }
      
      frontMatter[key.trim()] = value.replace(/^["']|["']$/g, ''); // クォートを削除
    }
  });
  
  // タイトルからスラッグを生成
  const title = frontMatter.title || path.basename(inputPath);
  const slug = sanitizeSlug(title);
  
  // 日付の抽出
  const date = frontMatter.date || extractDateFromPath(inputPath);
  
  // カテゴリとタグの処理
  const tags = [];
  let inTags = false;
  let inCategories = false;
  
  frontMatterLines.forEach(line => {
    const trimmedLine = line.trim();
    
    if (trimmedLine === 'tags:' || trimmedLine === 'tags:') {
      inTags = true;
      inCategories = false;
      return;
    }
    
    if (trimmedLine === 'categories:') {
      inCategories = true;
      inTags = false;
      return;
    }
    
    if (trimmedLine.startsWith('- ')) {
      const value = trimmedLine.substring(2).replace(/^["']|["']$/g, '');
      if (inTags || inCategories) {
        if (value && value !== '未分類') {
          tags.push(value);
        }
      }
    } else if (trimmedLine && !trimmedLine.endsWith(':')) {
      inTags = false;
      inCategories = false;
    }
  });
  
  // 出力ディレクトリを作成
  const outputPath = path.join(OUTPUT_DIR, slug);
  const outputImagesPath = path.join(outputPath, 'images');
  
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }
  
  if (!fs.existsSync(outputImagesPath)) {
    fs.mkdirSync(outputImagesPath, { recursive: true });
  }
  
  // 画像ファイルをコピー
  if (fs.existsSync(imagesPath)) {
    const imageFiles = fs.readdirSync(imagesPath);
    imageFiles.forEach(imageFile => {
      const srcPath = path.join(imagesPath, imageFile);
      const destPath = path.join(outputImagesPath, imageFile);
      
      if (fs.statSync(srcPath).isFile()) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied image: ${imageFile} -> ${slug}/images/`);
      }
    });
    
    // サムネイルを設定（最初の画像を使用）
    if (imageFiles.length > 0 && !frontMatter.thumbnail) {
      frontMatter.thumbnail = `images/${imageFiles[0]}`;
    }
  }
  
  // 新しいFront matterを作成
  const newFrontMatter = [
    '---',
    `title: "${frontMatter.title || title}"`,
    `date: "${date}"`,
    `excerpt: "${frontMatter.excerpt || frontMatter.description || ''}"`,
    `tags: [${tags.map(tag => `"${tag}"`).join(', ')}]`,
    `author: "${frontMatter.author || 'TNP'}"`,
  ];
  
  if (frontMatter.thumbnail) {
    newFrontMatter.push(`thumbnail: "${frontMatter.thumbnail}"`);
    newFrontMatter.push(`thumbnailAlt: "${frontMatter.thumbnailAlt || frontMatter.title || title}"`);
  }
  
  newFrontMatter.push('---');
  
  // コンテンツを処理
  const processedContent = processMarkdownContent(bodyContent, slug);
  
  // 新しいindex.mdを作成
  const newContent = newFrontMatter.join('\n') + '\n' + processedContent;
  const newIndexPath = path.join(outputPath, 'index.md');
  
  fs.writeFileSync(newIndexPath, newContent, 'utf8');
  
  console.log(`✅ Migrated: ${title} -> ${slug}/`);
  return slug;
}

function main() {
  console.log('🚀 Starting WordPress to Next.js blog migration...\n');
  
  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`❌ Input directory not found: ${INPUT_DIR}`);
    process.exit(1);
  }
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // 既存のサンプル記事を削除
  if (fs.existsSync(OUTPUT_DIR)) {
    const existingPosts = fs.readdirSync(OUTPUT_DIR);
    existingPosts.forEach(postDir => {
      const postPath = path.join(OUTPUT_DIR, postDir);
      if (fs.statSync(postPath).isDirectory()) {
        fs.rmSync(postPath, { recursive: true, force: true });
        console.log(`🗑️  Removed existing post: ${postDir}`);
      }
    });
  }
  
  const migratedSlugs = [];
  
  // 年フォルダを走査
  const years = fs.readdirSync(INPUT_DIR).filter(item => {
    const itemPath = path.join(INPUT_DIR, item);
    return fs.statSync(itemPath).isDirectory() && /^\d{4}$/.test(item);
  });
  
  years.forEach(year => {
    const yearPath = path.join(INPUT_DIR, year);
    console.log(`📅 Processing year: ${year}`);
    
    // 月フォルダを走査
    const months = fs.readdirSync(yearPath).filter(item => {
      const itemPath = path.join(yearPath, item);
      return fs.statSync(itemPath).isDirectory() && /^\d{2}$/.test(item);
    });
    
    months.forEach(month => {
      const monthPath = path.join(yearPath, month);
      console.log(`  📅 Processing month: ${month}`);
      
      // 記事フォルダを走査
      const posts = fs.readdirSync(monthPath).filter(item => {
        const itemPath = path.join(monthPath, item);
        return fs.statSync(itemPath).isDirectory();
      });
      
      posts.forEach(post => {
        const postPath = path.join(monthPath, post);
        console.log(`    📝 Processing post: ${post}`);
        
        const slug = migratePost(postPath);
        if (slug) {
          migratedSlugs.push(slug);
        }
      });
    });
  });
  
  console.log(`\n✅ Migration completed!`);
  console.log(`📊 Migrated ${migratedSlugs.length} posts:`);
  migratedSlugs.forEach(slug => console.log(`   - ${slug}`));
  console.log(`\n🌐 Visit http://localhost:3000/blog to see your migrated blog!`);
}

if (require.main === module) {
  main();
}

module.exports = { migratePost, sanitizeSlug };