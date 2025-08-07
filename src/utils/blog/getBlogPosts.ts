import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostMetadata } from '@/types/BlogPost';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllBlogPosts(): BlogPostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const folderNames = fs.readdirSync(postsDirectory);
  const allPostsData = folderNames
    .filter((folderName) => {
      const folderPath = path.join(postsDirectory, folderName);
      const indexPath = path.join(folderPath, 'index.md');
      return fs.statSync(folderPath).isDirectory() && fs.existsSync(indexPath);
    })
    .map((folderName) => {
      const slug = folderName;
      const indexPath = path.join(postsDirectory, folderName, 'index.md');
      const fileContents = fs.readFileSync(indexPath, 'utf8');
      const matterResult = matter(fileContents);

      let thumbnail = matterResult.data.thumbnail;
      if (thumbnail && !thumbnail.startsWith('/') && !thumbnail.startsWith('http')) {
        thumbnail = `/posts/${slug}/${thumbnail}`;
      }

      return {
        slug,
        title: matterResult.data.title || 'タイトルなし',
        date: matterResult.data.date || '',
        excerpt: matterResult.data.excerpt || '',
        tags: matterResult.data.tags || [],
        author: matterResult.data.author || 'TNP',
        thumbnail,
        thumbnailAlt: matterResult.data.thumbnailAlt,
      } as BlogPostMetadata;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const indexPath = path.join(postsDirectory, slug, 'index.md');
    
    if (!fs.existsSync(indexPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(indexPath, 'utf8');
    const matterResult = matter(fileContents);

    let content = matterResult.content;
    content = content.replace(/!\[([^\]]*)\]\(images\/([^)]+)\)/g, `![$1](/posts/${slug}/images/$2)`);
    content = content.replace(/!\[([^\]]*)\]\(\.\/images\/([^)]+)\)/g, `![$1](/posts/${slug}/images/$2)`);

    let thumbnail = matterResult.data.thumbnail;
    if (thumbnail && !thumbnail.startsWith('/') && !thumbnail.startsWith('http')) {
      thumbnail = `/posts/${slug}/${thumbnail}`;
    }

    return {
      slug,
      title: matterResult.data.title || 'タイトルなし',
      date: matterResult.data.date || '',
      excerpt: matterResult.data.excerpt || '',
      tags: matterResult.data.tags || [],
      author: matterResult.data.author || 'TNP',
      thumbnail,
      thumbnailAlt: matterResult.data.thumbnailAlt,
      content: '',
      rawContent: content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getBlogPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const folderNames = fs.readdirSync(postsDirectory);
  return folderNames
    .filter((folderName) => {
      const folderPath = path.join(postsDirectory, folderName);
      const indexPath = path.join(folderPath, 'index.md');
      return fs.statSync(folderPath).isDirectory() && fs.existsSync(indexPath);
    });
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tagSet = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagSet.add(tag);
    });
  });
  
  return Array.from(tagSet).sort();
}

export function getBlogPostsByTag(tag: string): BlogPostMetadata[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.tags.includes(tag));
}

export function getBlogPostsByTags(tags: string[]): BlogPostMetadata[] {
  if (tags.length === 0) {
    return getAllBlogPosts();
  }
  
  const posts = getAllBlogPosts();
  return posts.filter(post => 
    tags.some(tag => post.tags.includes(tag))
  );
}