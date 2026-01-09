"use client";
import ProjectCard from "@/app/_components/project-card";
import clerkCard from "../../_assets/_nard/imgs/clerk-banner.webp";
import payloadCard from "../../_assets/_nard/imgs/payload-banner.webp";
import { usePlatform } from "@/hooks/use-platform";
import { useEffect, useState } from "react";
import { NDK_SITE } from "@/app/_assets/constants";
import ndkFlyer from "../../_assets/_nard/imgs/ndk-flyer.webp";
import { ShimmeringText } from "@/components/_ui/shimmering-text";
import { ChevronRight } from "lucide-react";

export default function CardsCarousel() {
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
    <>
      <div
        className={`_cards-carousel ${scrollbarStyles} max-1024:px-[var(--gutter-x)] 1024:scroll-pl-[calc((100vw-1024px)/2)] 1024:px-[calc((100vw-1024px)/2)] relative flex snap-x justify-start gap-10 overflow-x-auto scroll-smooth py-5`}
      >
        <ProjectCard
          href={NDK_SITE}
          title="ndk"
          desc="A mini toolkit for frontend development - shadcn components, themes, and more."
          alt="ndk's homepage flyer"
          img={ndkFlyer}
          className="ml-auto! max-w-[600px] min-w-[330px] snap-center lg:min-w-[500px]"
          linkText="Website"
        />
        <ProjectCard
          href="/gallery/clones/clerk"
          title="Clerk Pricing Page"
          desc="A clone of Clerk's pricing page."
          alt="Clerk's Pricing page banner"
          img={clerkCard}
          className="max-w-[600px] min-w-[330px] snap-center lg:min-w-[500px]"
        />
        <ProjectCard
          href="/gallery/clones/payload"
          title="Payload's homepage"
          desc="A near exact clone of Payload's homepage."
          alt="Payload's homepage banner"
          img={payloadCard}
          className="max-w-[600px] min-w-[330px] snap-center lg:min-w-[500px]"
        />
      </div>
      <div className="_scroll container-7xl mt-4 flex items-center gap-1 px-[calc(var(--gutter-x)-22px)] py-2 text-[0.9rem] md:hidden">
        <ShimmeringText text="Scroll" className="" />
        <ChevronRight size={10} />
      </div>
    </>
  );
}
