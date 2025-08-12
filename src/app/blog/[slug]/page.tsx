import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPostSlugs } from "@/utils/blog/getBlogPosts";
import BlogContent from "@/components/blog/BlogContent";
import styles from "./page.module.css";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "記事が見つかりません | TNP Blog",
      description: "お探しの記事は見つかりませんでした。",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const pageUrl = `${baseUrl}/blog/${params.slug}`;
  const ogImage = post.thumbnail
    ? `${baseUrl}${post.thumbnail}`
    : `${baseUrl}/default_post_thumbnail.png`;

  return {
    title: `${post.title} | TNP Blog`,
    description: post.excerpt || `TNPのブログ記事「${post.title}」です。`,
    authors: [{ name: post.author }],
    keywords: post.tags,

    openGraph: {
      title: post.title,
      description: post.excerpt || `TNPのブログ記事「${post.title}」です。`,
      url: pageUrl,
      siteName: "TNP Blog",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.thumbnailAlt || post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `TNPのブログ記事「${post.title}」です。`,
      images: [ogImage],
      creator: "@tnp_akita",
      site: "@tnp_akita",
    },

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <BlogContent post={post} />
    </div>
  );
}
