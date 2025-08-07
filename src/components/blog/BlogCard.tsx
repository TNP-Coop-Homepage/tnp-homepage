import Link from "next/link";
import Image from "next/image";
import { BlogPostMetadata } from "@/types/BlogPost";
import styles from "./BlogCard.module.css";
import { FaCalendar, FaFile, FaUser } from "react-icons/fa";

interface BlogCardProps {
  post: BlogPostMetadata;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const hasThumbnail = post.thumbnail;

  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.thumbnailContainer}>
        {hasThumbnail ? (
          <Image
            src={post.thumbnail || "/default_post_thumbnail.png"}
            alt={post.thumbnailAlt || post.title}
            fill
            className={styles.thumbnail}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className={styles.fallbackThumbnail}>
            <FaFile />
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{post.title}</h2>

        <div className={styles.meta}>
          <div className={styles.date}>
            <FaCalendar /> {formatDate(post.date)}
          </div>
          <div className={styles.author}>
            <FaUser /> {post.author}
          </div>
        </div>

        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}

        {post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag} title={`タグ: ${tag}`}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
