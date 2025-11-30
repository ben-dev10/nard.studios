"use client";
import ProjectCard from "@/app/_components/project-card";
import clerkCard from "../../_assets/_nard/imgs/clerk-banner.webp";
import payloadCard from "../../_assets/_nard/imgs/payload-banner.webp";
import { usePlatform } from "@/hooks/use-platform";
import { useEffect, useState } from "react";

export default function FeaturedCards() {
  const { isMobile } = usePlatform();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollbarStyles = mounted
    ? isMobile
      ? ""
      : "_scrollbar-override"
    : "";

  return (
    <div
      className={`${scrollbarStyles} _featured-cards mb-10 flex gap-10 overflow-x-auto px-[var(--gutter-x)] py-5 md:justify-center`}
    >
      <ProjectCard
        href="/gallery/clones/clerk"
        title="Clerk Pricing Page clone"
        desc="A clone of Clerk's pricing page."
        alt="Clerk's Pricing page banner"
        img={clerkCard}
        date="Sept 2025"
      />
      <ProjectCard
        href="/gallery/clones/payload"
        title="Payload Homepage clone"
        desc="A near-exact clone of Payload's homepage."
        alt="Payload's homepage banner"
        img={payloadCard}
        date="Sept 2025"
      />
    </div>
  );
}
