// "use client";

import {
  Github,
  Linkedin,
  Whatsapp,
  XTwitter,
  Bolt,
} from "@/components/_ui/icons";
import Background from "@/components/ui/elements/background";
import Section from "@/components/ui/elements/section";
import Image from "next/image";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import ActionBTN from "../_components/_ui/action-btn";
import ProjectCard from "../_components/project-card";
import CTA from "../_components/cta";

import cereal from "@/app/gallery/_assets/_imgs/cereal-3d(1).webp";
import velvet from "@/app/gallery/_assets/_imgs/velvet.webp";
import profileCard from "@/app/gallery/_assets/_imgs/profile-card.webp";
import clonesSVG from "../_assets/_nard/svgs/clones-block.svg";
import gallerySVG from "../_assets/_nard/svgs/gallery-block.svg";
import { ReadMoreSection } from "@/components/_blog/read-more-section";

const line = <div className="_line w-full border-t border-dashed" />;

function SocialPill({
  icon,
  name,
  link,
  className,
}: {
  icon: React.ReactNode;
  name: string;
  link: string;
  className?: string;
}) {
  return (
    <Link
      target="_"
      href={link}
      className={`${className} group flex max-w-max items-center gap-1.5 rounded-full p-1.5 px-3.5`}
    >
      {icon} <p className="!text-[0.8rem]">{name}</p>
    </Link>
  );
}

function Hero() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="mb-10 px-[var(--gutter-x)] pt-55"
      >
        <div className="relative max-w-max">
          <h1 className="font-FigtreeR mb-3 max-w-[400px] text-balance md:max-w-[500px]">
            I enjoy{" "}
            <span className="font-SeriouslyNostalgic !font-[100]">
              designing
            </span>{" "}
            &{" "}
            <span className="font-SeriouslyNostalgic !font-[100]">
              crafting
            </span>{" "}
            user interfaces.
          </h1>
          <Background>
            <Image
              src="/_nard/svgs/_a--icon-tray.svg"
              alt="icon-tray-svg"
              width="188"
              height="94"
              className="absolute -top-20 -right-65 scale-[0.8] md:-right-55"
            />
            <Image
              src="/_nard/svgs/_a--cursor.svg"
              alt="cursor-svg"
              width="56"
              height="53"
              className="absolute top-45 -left-25 scale-[0.8] md:-left-35"
            />
            <Image
              src="/_nard/svgs/_a--palette.svg"
              alt="palette-svg"
              width="103"
              height="68"
              className="absolute -top-28 -left-10 w-[60px] scale-[0.8] md:-left-20"
            />
          </Background>
        </div>
        <div className="_social-icons mb-10 flex flex-wrap gap-3 *:transition-colors *:duration-200 *:ease-in-out">
          <SocialPill
            link="https://github.com/ben-dev10"
            icon={<Github className="size-5" />}
            name="Github"
            className="bg-[#e5e5e5] *:group-hover:text-white hover:bg-black"
          />
          <SocialPill
            link="https://x.com/_nard_q?t=Kfa-eZzpcnv49exB6jA3mQ&s=09"
            icon={<XTwitter className="size-4.5" />}
            name="Twitter"
            className="bg-[#e5e5e5] *:group-hover:text-white hover:bg-neutral-500"
          />
          <SocialPill
            link="https://www.linkedin.com/in/bernard-quarshie-b7a157376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            icon={<Linkedin className="size-5" />}
            name="LinkedIn"
            className="bg-[#e5e5e5] *:group-hover:text-white hover:bg-blue-500"
          />
          <SocialPill
            link="https://wa.me/233541467464?text=Hi%20there!%20I%20found%20you%20through%20your%20portfolio."
            icon={<Whatsapp className="size-5" />}
            name="WhatsApp"
            className="xs:flex hidden bg-[#e5e5e5] *:group-hover:text-white hover:bg-green-500"
          />
        </div>

        <div className="_paragraphs text-muted-foreground mb-15 space-y-3">
          <p className="">
            Hello👋, my name is Bernard Quarshie (or{" "}
            <span className="gradient-text bg-gradient-to-tl from-neutral-300 to-neutral-800 font-[600] underline decoration-dashed">
              nard
            </span>
            ), welcome to my portfolio - I&apos;m a web developer who knows a
            little bit of design.
          </p>
          <p className="">
            Glad you are here, check out some of my experiments below 👇
          </p>
        </div>

        {line}
      </Section.Container>
    </Section.RootElement>
  );
}

function Projects() {
  return (
    <Section.RootElement className="mb-15">
      <Section.Container container="none" className="_section--clones mb-8">
        <Section.Container
          container="8xl"
          className="mb-8 px-[var(--gutter-x)]"
        >
          <div className="_showcase-pill mt-17">
            <div className="mx-auto flex max-w-max items-center gap-1 rounded-full bg-neutral-200/30 p-1 px-3">
              <Bolt className="size-3 rotate-30" />
              <span className="block !text-[0.7rem]">Showcase</span>
            </div>
          </div>

          <h2 className="font-FigtreeR mx-auto mb-8 max-w-[500px] py-5 text-center">
            Crafting UIs that look{" "}
            <span className="font-SeriouslyNostalgic !font-[100]">good</span>{" "}
            and works{" "}
            <span className="font-SeriouslyNostalgic !font-[100]">
              right, (mostly 🙃)
            </span>
          </h2>

          <div className="mb-5 flex">
            <Image
              alt="clones svg"
              src={clonesSVG}
              className="-translate-x-5 -translate-y-2 scale-[0.8] max-md:scale-[0.6]"
            />

            <div>
              <h3 className="font-FigtreeR font-[700]">UI Clones</h3>
              <p className="text-muted-foreground text-[0.9rem]">
                I tried to recreate some of the best UIs on the internet.
              </p>
            </div>
          </div>
        </Section.Container>

        <div
          className={`_cards-carousel relative flex gap-10 overflow-x-auto px-[var(--gutter-x)] py-5 md:justify-center`}
        >
          <ProjectCard
            href="/gallery/clones/clerk"
            title="Clerk Pricing Page"
            desc="A clone of Clerk's pricing page."
            img={{
              alt: "Clerk's Pricing page banner",
              src: "/_nard/imgs/clerk-banner.webp",
              width: 1260,
              height: 765,
            }}
            className="max-w-[600px] min-w-[350px]"
          />
          <ProjectCard
            href="/gallery/clones/payload"
            title="Payload's homepage"
            desc="A near exact clone of Payload's homepage."
            img={{
              alt: "Payload's homepage banner",
              src: "/_nard/imgs/payload-banner.webp",
              width: 1260,
              height: 765,
            }}
            className="max-w-[600px] min-w-[350px]"
          />
        </div>
      </Section.Container>

      <Section.Container
        container="8xl"
        className="_section--graphic-design mt-8 mb-8 px-[var(--gutter-x)] py-8"
      >
        {line}
        <div className="ml-10 flex flex-col gap-x-15 md:flex-row md:justify-center">
          <div className="left-half mb-5 md:w-[350px]">
            <Image
              alt="gallery svg"
              src={gallerySVG}
              className="-translate-x-15 translate-y-14 max-md:scale-[0.7]"
            />

            <h3 className="font-FigtreeR mb-3 font-[700]">
              Graphics for every occasion
            </h3>
            <p className="text-muted-foreground mb-5">
              Custom designed assets to give every project that unique touch,
              Graphics of all kinds including, but not limited to:
            </p>

            <ul className="text-muted-foreground pl-5">
              <li className="flex items-center gap-1">
                <CircleCheck size={12} className="text-primary" />
                <span className="">Flyers, Posters</span>
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck size={12} className="text-primary" />
                <span className="">Banners</span>
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck size={12} className="text-primary" />
                <span className="">3D Renders</span>
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck size={12} className="text-primary shrink-0" />
                <span className="">Thumbnails, and so much more...</span>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/gallery"
                className="rounded-[8px] pb-2 shadow-md shadow-black/45"
              >
                <ActionBTN text="See gallery" />
              </Link>
            </div>
          </div>

          <div className="right-half md:w-[calc(100%-350px)]">
            <Image
              alt="bg-img"
              src="/_nard/imgs/flyers--img-arts.png"
              width={2382}
              height={1551}
              className="pointer-events-none -mt-10 min-w-[500px] scale-[1.2] md:-mt-10 md:min-w-[600px]"
            />
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function GraphicRow() {
  const imgHoverTransition =
    "transition-transform duration-300 hover:scale-[1.5] hover:rotate-0 sm:w-[250px]";

  return (
    <Section.RootElement className="">
      <Section.Container className="">
        <div className="max-550:-ml-35 mt-[40px] mb-[40px] flex justify-center gap-20 py-10 md:gap-30">
          <div className="w-[50%] min-w-[220px] md:w-[70%]">
            <Image
              alt="flyer-1"
              src={cereal}
              className={`${imgHoverTransition} -rotate-4 rounded-md object-contain shadow-2xl md:min-w-[320px]`}
            />
          </div>
          <div className="w-[50%] min-w-[220px] md:w-[70%]">
            <Image
              alt="flyer-2"
              src={velvet}
              className={`${imgHoverTransition} mt-15 rotate-6 rounded-sm shadow-2xl md:min-w-[320px]`}
            />
          </div>
          <div className="w-[25%] min-w-[110px]">
            <Image
              alt="flyer-3"
              src={profileCard}
              className={`${imgHoverTransition} mt-30 -rotate-5 rounded-sm shadow-2xl md:min-w-[180px]`}
            />
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function BlogSection() {
  return (
    <Section.RootElement>
      <Section.Container
        container="8xl"
        className="p-10 px-[var(--gutter-x)] pb-20"
      >
        <h2 className="font-FigtreeR pt-20 text-center">
          Latest from the Blog
        </h2>
        <div className="">
          <ReadMoreSection currentSlug={[]} title="" borders="" maxPosts={2} />
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

/**
 * _FEATURE: 1. (more sections: Testimonials, bentos)
 */

export default function Home() {
  return (
    <main
      className={`_homepage font min-h-screen overflow-hidden transition-colors duration-300`}
    >
      <Background className="opacity-50">
        <Background.Layer className="fixed top-0 left-0 h-full w-[30px] bg-[url(/_nard/svgs/left-marquee.svg)]" />
        <Background.Layer className="fixed top-0 -right-6 h-full w-[45px] bg-[url(/_nard/svgs/right-marquee.svg)]" />
      </Background>
      <>
        <Hero />
        <Projects />
        <GraphicRow />
        <BlogSection />
        <CTA />
      </>
    </main>
  );
}
