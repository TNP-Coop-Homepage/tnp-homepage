"use client";

import Image from "next/image";
import { BlogPost } from "@/types/BlogPost";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import styles from "./BlogContent.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaCalendar, FaUser } from "react-icons/fa";

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.target as HTMLImageElement;
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight,
    });
  };

  const updateContainerWidth = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateContainerWidth();

    const handleResize = () => {
      updateContainerWidth();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDisplayHeight = () => {
    if (!imageDimensions) return 300;

    const aspectRatio = imageDimensions.height / imageDimensions.width;
    const calculatedHeight = containerWidth * aspectRatio;

    if (isHovered) {
      const maxHeightRatio = containerWidth < 768 ? 0.7 : 0.8;
      return Math.min(calculatedHeight, window.innerHeight * maxHeightRatio);
    }

    return containerWidth < 768 ? 200 : 300;
  };

  return (
    <article className={styles.container} ref={containerRef}>
      <Link href="/blog" className={styles.backLink}>
        ← ブログ一覧に戻る
      </Link>
      <header className={styles.header}>
        {post.thumbnail && (
          <div
            className={styles.heroImage}
            style={{ height: `${getDisplayHeight()}px` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={post.thumbnail}
              alt={post.thumbnailAlt || post.title}
              fill
              className={styles.heroImageImg}
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              onLoad={handleImageLoad}
            />
          </div>
        )}
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <div className={styles.date}>
            <FaCalendar /> {formatDate(post.date)}
          </div>
          <div className={styles.author}>
            <FaUser /> {post.author}
          </div>
        </div>
        {post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className={styles.content}>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          components={{
            pre: ({ children }) => (
              <pre className={styles.codeBlock}>{children}</pre>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  href?.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                {children}
              </a>
            ),
            figure: ({ children }) => (
              <figure className={styles.figure}>{children}</figure>
            ),
            figcaption: ({ children }) => (
              <figcaption className={styles.figcaption}>{children}</figcaption>
            ),
          }}
        >
          {post.rawContent}
        </ReactMarkdown>
      </div>
    </article>
  );
}
