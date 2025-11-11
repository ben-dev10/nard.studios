import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadataKeywords = [
  "Blog",
  "React",
  "nard.studios Blog",
  "Next.js Blog",
  "React Blog",
  "Web Development",
];

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: metadataKeywords,
  authors: [
    {
      name: "nard.studios Team",
      url: "https://nard-studios.vercel.app",
    },
  ],
  creator: "nard",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@nard.studios",
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
};
