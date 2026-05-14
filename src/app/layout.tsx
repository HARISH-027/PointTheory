import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Point Theory — The Engine for Intelligence",
  description:
    "Point Theory provides the foundational architecture and computational power to deploy world-class autonomous systems at scale.",
  keywords: [
    "AI",
    "Point Theory",
    "Point.theory",
    "autonomous systems",
    "AI infrastructure",
    "machine learning",
    "automation",
  ],
  authors: [{ name: "Point Theory" }],
  openGraph: {
    title: "Point Theory — The Engine for Intelligence",
    description:
      "Deploy world-class autonomous systems at scale with Point Theory.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Point Theory — The Engine for Intelligence",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="antialiased dot-grid">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
