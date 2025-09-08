import type React from "react";
import type { Metadata } from "next";

import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loomin AI - Next-Gen Empathetic HRMS",
  description:
    "Empowering human connections in the workplace with next-generation HR technology that puts candidate wellbeing first.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans `}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
