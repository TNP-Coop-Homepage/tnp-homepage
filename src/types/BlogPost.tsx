export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  rawContent: string; // 生のMarkdownコンテンツ
  tags: string[];
  author: string;
  thumbnail?: string;
  thumbnailAlt?: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
  thumbnail?: string;
  thumbnailAlt?: string;
}