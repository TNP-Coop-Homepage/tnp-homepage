#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 問題のあるスラッグを修正するスクリプト
 */

const POSTS_DIR = path.join(__dirname, '../posts');

function generateUniqueSlug(baseSlug, existingSlugs) {
  if (!baseSlug || baseSlug === '-' || baseSlug === '') {
    baseSlug = 'untitled';
  }
  
  let counter = 1;
  let newSlug = baseSlug;
  
  while (existingSlugs.has(newSlug)) {
    newSlug = `${baseSlug}-${counter}`;
    counter++;
  }
  
  return newSlug;
}

function sanitizeSlug(slug) {
  return slug
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // 英数字、スペース、ハイフン以外を削除
    .replace(/\s+/g, '-')     // スペースをハイフンに
    .replace(/^-+|^_+/, '')   // 先頭のハイフンやアンダースコアを削除
    .replace(/-+$|_+$/, '')   // 末尾のハイフンやアンダースコアを削除
    .replace(/-+/g, '-')      // 連続するハイフンを1つに
    .trim() || 'untitled';
}

function main() {
  console.log('🔧 Fixing problematic slugs...\n');
  
  if (!fs.existsSync(POSTS_DIR)) {
    console.error(`❌ Posts directory not found: ${POSTS_DIR}`);
    process.exit(1);
  }
  
  const items = fs.readdirSync(POSTS_DIR);
  const existingSlugs = new Set();
  const problematicItems = [];
  
  // 最初に全てのアイテムをチェック
  items.forEach(item => {
    const itemPath = path.join(POSTS_DIR, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isFile() && item === 'index.md') {
      // ルートのindex.mdは削除
      fs.unlinkSync(itemPath);
      console.log(`🗑️  Removed root index.md`);
      return;
    }
    
    if (stat.isFile() && item === 'images') {
      // ルートのimagesフォルダは削除
      fs.rmSync(itemPath, { recursive: true, force: true });
      console.log(`🗑️  Removed root images directory`);
      return;
    }
    
    if (stat.isDirectory()) {
      const indexPath = path.join(itemPath, 'index.md');
      if (!fs.existsSync(indexPath)) {
        console.log(`⚠️  Skipping ${item}: no index.md found`);
        return;
      }
      
      // 問題のあるスラッグをチェック
      if (item === '-' || item === '' || item.startsWith('-') || item.endsWith('-') || item.includes('--') || item.length <= 2) {
        problematicItems.push(item);
      } else {
        existingSlugs.add(item);
      }
    }
  });
  
  // 問題のあるアイテムを修正
  problematicItems.forEach(oldSlug => {
    const oldPath = path.join(POSTS_DIR, oldSlug);
    const indexPath = path.join(oldPath, 'index.md');
    
    if (!fs.existsSync(indexPath)) {
      console.log(`⚠️  Skipping ${oldSlug}: no index.md found`);
      return;
    }
    
    // index.mdからタイトルを読み取り
    const content = fs.readFileSync(indexPath, 'utf8');
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    let title = titleMatch ? titleMatch[1] : oldSlug;
    
    // タイトルからスラッグを生成
    let newSlug = sanitizeSlug(title);
    newSlug = generateUniqueSlug(newSlug, existingSlugs);
    
    const newPath = path.join(POSTS_DIR, newSlug);
    
    try {
      fs.renameSync(oldPath, newPath);
      existingSlugs.add(newSlug);
      console.log(`✅ Renamed: "${oldSlug}" -> "${newSlug}"`);
    } catch (error) {
      console.error(`❌ Failed to rename "${oldSlug}": ${error.message}`);
    }
  });
  
  // ルートに残った不要なファイルを削除
  const rootItems = fs.readdirSync(POSTS_DIR);
  rootItems.forEach(item => {
    const itemPath = path.join(POSTS_DIR, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isFile() || (stat.isDirectory() && item === 'images')) {
      fs.rmSync(itemPath, { recursive: true, force: true });
      console.log(`🗑️  Removed: ${item}`);
    }
  });
  
  console.log('\n✅ Slug fixing completed!');
  
  // 最終的なフォルダ数を表示
  const finalItems = fs.readdirSync(POSTS_DIR).filter(item => {
    const itemPath = path.join(POSTS_DIR, item);
    return fs.statSync(itemPath).isDirectory();
  });
  
  console.log(`📊 Total posts: ${finalItems.length}`);
}

if (require.main === module) {
  main();
}