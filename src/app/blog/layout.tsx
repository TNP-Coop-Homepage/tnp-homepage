import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const pageUrl = `${baseUrl}/blog`;
const ogImage = `${baseUrl}/TNPheader.webp`;

export const metadata: Metadata = {
  title: 'ブログ | 秋田大学プログラミングサークルTNP',
  description: 'TNPのブログページです。サークル活動の様子や技術記事を発信しています。',
  keywords: ['TNP', 'プログラミング', 'サークル', '秋田大学', 'ブログ', '技術記事'],
  openGraph: {
    title: 'TNP Blog | 秋田大学プログラミングサークル',
    description: 'TNPのブログページです。サークル活動の様子や技術記事を発信しています。',
    url: pageUrl,
    siteName: 'TNP Blog',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'TNP（秋田大学プログラミングサークル）のブログ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TNP Blog | 秋田大学プログラミングサークル',
    description: 'TNPのブログページです。サークル活動の様子や技術記事を発信しています。',
    images: [ogImage],
    creator: '@tnp_akita',
    site: '@tnp_akita',
  },
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
