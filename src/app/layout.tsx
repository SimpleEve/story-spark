import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Story Spark - AI故事灵感生成器",
  description: "免费AI故事灵感生成器，一键生成独特的奇幻、科幻、悬疑等故事设定。用于小说写作、剧本创作、DnD跑团、创意教学。无需注册，即开即用。",
  keywords: "故事生成器, AI写作工具, 小说灵感, 创意写作, DnD跑团, 剧本创作, 故事设定, 免费写作工具",
  authors: [{ name: "Story Spark" }],
  openGraph: {
    title: "Story Spark - AI故事灵感生成器",
    description: "一键生成独特的故事设定，用于小说、剧本、游戏剧情",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Story Spark - AI故事灵感生成器",
    description: "一键生成独特的故事设定，用于小说、剧本、游戏剧情",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📖</text></svg>" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
