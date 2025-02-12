import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header";
import React from "react";
import {NavigationOpenProvider} from "@/contexts/NavigationOpenContext";

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
      <NavigationOpenProvider>
        <body className={`${inter.className}`}>
          <Header/>
          <div className={"body-inner"}>
            <Navigation/>
            <div className={"children"}>
              {children}
            </div>
          </div>
        </body>
      </NavigationOpenProvider>
    </html>
  );
}
