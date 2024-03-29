import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "秋田大学プログラミングサークルTNP",
  description: "『秋田大学プログラミングサークルTNP』の公式サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navigation />
        <div className={"children"}>
            {children}
        </div>
      </body>
    </html>
  );
}
