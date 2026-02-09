"use client";
import ProjectCard from "@/app/_components/project-card";
import clerkCard from "../../_assets/_nard/imgs/clerk-banner.webp";
import payloadCard from "../../_assets/_nard/imgs/payload-banner.webp";
import remarkCard from "../../_assets/_nard/imgs/remark-og.png";
import { NDK_SITE, REMARK_SITE } from "@/app/_assets/constants";
import ndkFlyer from "../../_assets/_nard/imgs/ndk-flyer.webp";
import Carousel from "@/components/_ui/carousel";

export default function CardsCarousel() {
  return (
    <div>
      <Carousel>
        <ProjectCard
          href={REMARK_SITE}
          title="Remark"
          desc="A lightweight comment-section template powered by Convex."
          alt="remark's og"
          img={remarkCard}
          className="ml-auto! max-w-[600px] min-w-[330px] snap-center lg:min-w-[500px]"
          linkText="Website"
        />
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
          title="Clerk Pricing Page Clone"
          desc="A clone of Clerk's pricing page."
          alt="Clerk's Pricing page banner"
          img={clerkCard}
          className="max-w-[600px] min-w-[330px] snap-center lg:min-w-[500px]"
        />
        <ProjectCard
          href="/gallery/clones/payload"
          title="Payload's homepage Clone"
          desc="A near exact clone of Payload's homepage."
          alt="Payload's homepage banner"
          img={payloadCard}
          className="max-w-[600px] min-w-[330px] snap-center lg:min-w-[500px]"
        />
      </Carousel>
    </div>
  );
}
