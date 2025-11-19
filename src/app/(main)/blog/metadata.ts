import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { XTWITTER_LINK } from "@/app/_assets/constants";

export const metadataKeywords = [
  "nard.studios Blog",
  "Design Studio",
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "React",
  "Next.js",
  "nard.studios",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: metadataKeywords,
  authors: [
    {
      name: "nard.studios",
      url: XTWITTER_LINK,
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
    images: [
      {
        url: "/_blog/blog-og.webp",
        width: 1200,
        height: 630,
        alt: "nard.studios open-graph image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@nard.studios",
    images: [
      {
        url: "/_blog/blog-og.webp",
        width: 1200,
        height: 630,
        alt: "nard.studios open-graph image",
      },
    ],
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
  alternates: { canonical: "/blog" },
};
