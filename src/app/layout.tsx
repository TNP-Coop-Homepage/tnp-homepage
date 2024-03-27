import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "秋田大学プログラミングサークルTNP",
  description: "『秋田大学プログラミングサークルTNP』の公式サイトです。\n活動風景や作品一覧などを掲載しています。\nまた、一部の作品をWeb上で遊ぶこともできます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#AAD350" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#556A28" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className}`}>
        <Navigation />
        <div className={"children"}>
            {children}
        </div>
      </body>
    </html>
  );
}
