import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { XTWITTER_LINK } from "./_assets/constants";

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
        url: "/og.png",
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
        url: "/og.png",
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
  alternates: { canonical: "/" },
};
