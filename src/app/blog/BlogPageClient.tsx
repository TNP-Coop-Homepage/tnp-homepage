"use client";

import { useState } from "react";
import { BlogPostMetadata } from "@/types/BlogPost";
import BlogCard from "@/components/blog/BlogCard";
import TagFilter from "@/components/blog/TagFilter";
import styles from "./page.module.css";
import "../globals.css";

interface BlogPageClientProps {
  posts: BlogPostMetadata[];
  tags: string[];
}

export default function BlogPageClient({ posts, tags }: BlogPageClientProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts =
    selectedTags.length === 0
      ? posts
      : posts.filter((post) =>
          selectedTags.some((tag) => post.tags.includes(tag))
        );

  const handleTagChange = (tags: string[]) => {
    setSelectedTags(tags);
  };

  return (
    <div className={`${styles.container} main`}>
      <header className={styles.header}>
        <h1 className="hs">Blog</h1>
      </header>
      {tags.length > 0 && (
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagChange={handleTagChange}
        />
      )}

      <div className={styles.postsSection}>
        {filteredPosts.length > 0 ? (
          <div className={styles.posts}>
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🔍</div>
            <h2 className={styles.emptyTitle}>
              {selectedTags.length > 0
                ? "選択したタグに該当する記事がありません"
                : "まだ記事がありません"}
            </h2>
            {selectedTags.length > 0 && (
              <p className={styles.emptyDescription}>
                他のタグを選択するか、フィルターをクリアしてお試しください。
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
