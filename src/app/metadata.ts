import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadataKeywords = [
  "Design Studio",
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "React",
  "Next.js",
  "nard.studios",
];

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: metadataKeywords,
  authors: [
    {
      name: "nard.studios",
      url: "https://nard-studios.vercel.app",
    },
  ],
  creator: "nard",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@nard.studios",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
};
