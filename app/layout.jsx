"use client";

import "./globals.css";

import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-[#a9d6e5] text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}