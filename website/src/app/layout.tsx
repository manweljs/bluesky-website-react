import React from "react";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "antd/dist/reset.css";
import '@flaticon/flaticon-uicons/css/all/all.css';
import s from "@/styles/style.module.sass"

const inter = Bai_Jamjuree({ subsets: ["latin"], weight: ['400', '700', '600', '500'] });

export const metadata: Metadata = {
  title: "BlueSky Creations",
  description: "Optimal decision making, making the uncertain more certain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={s.bluesky}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
