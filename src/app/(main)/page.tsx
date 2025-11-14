"use client";

import {
  Github,
  Linkedin,
  PenSparkle,
  Whatsapp,
  XTwitter,
  DuplicatePlus,
  Bolt,
} from "@/components/_ui/icons";
import Background from "@/components/ui/elements/background";
import Section from "@/components/ui/elements/section";
import Image from "next/image";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailButton from "../_components/email-btn";
import ActionBTN from "../_components/_ui/action-btn";
import ProjectCard from "../_components/project-card";

const line = <div className="_line w-full border-t border-dashed" />;
const conicGradient =
  "bg-[conic-gradient(from_180deg_at_50%_50%,_#4BCF9F_-10.27deg,_#FF7575_140.22deg,_#55AAFF_318.01deg,_#76FF98_329.66deg,_#4BCF9F_348.73deg,_#FF7575_369.22deg))]";

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

          <div className="mb-5">
            <div className="_header-pill--clones pointer-events-none my-5 mt-8 flex max-w-max items-center gap-2 rounded-md bg-black p-1.5 px-3 text-white shadow-lg">
              <DuplicatePlus className="size-4" />
              <span className="text-[0.75rem] font-bold">UI Clones</span>
            </div>

            <p className="text-muted-foreground text-[0.9rem]">
              I tried to recreate some of the best UIs on the internet.
            </p>
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
        <div className="_header-pill--design pointer-events-none my-5 mt-20 flex max-w-max items-center gap-2 rounded-md bg-black p-1.5 px-3 text-white shadow-lg">
          <PenSparkle className="size-4" />
          <span className="text-[0.75rem] font-bold">Graphic Design</span>
        </div>

        <div className="flex flex-col gap-x-15 md:flex-row md:justify-center">
          <div className="left-half mb-5 md:w-[350px]">
            <h2 className="font-FigtreeR mb-3">Graphics for every occasion</h2>
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
              className="pointer-events-none -mt-10 min-w-[500px] scale-[1.2] md:-mt-35 md:min-w-[600px]"
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
              src="/_nard/imgs/cereal-3d(1).webp"
              width={1920}
              height={1080}
              className={`${imgHoverTransition} -rotate-4 rounded-md object-contain shadow-2xl md:min-w-[320px]`}
            />
          </div>
          <div className="w-[50%] min-w-[220px] md:w-[70%]">
            <Image
              alt="flyer-2"
              src="/_nard/imgs/velvet.webp"
              width={2040}
              height={1227}
              className={`${imgHoverTransition} mt-15 rotate-6 rounded-sm shadow-2xl md:min-w-[320px]`}
            />
          </div>
          <div className="w-[25%] min-w-[110px]">
            <Image
              alt="flyer-3"
              src="/_nard/imgs/profile-card.webp"
              width={3000}
              height={3200}
              className={`${imgHoverTransition} mt-30 -rotate-5 rounded-sm shadow-2xl md:min-w-[180px]`}
            />
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function CTA() {
  // _FEATURE: gradient-blur elevation
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="550:px-[var(--gutter-x)] max-550:pb-0 relative z-3 py-15"
      >
        <div className="_contents+blur relative">
          <Background.Layer
            className={`_bg-blur absolute -bottom-5 h-[200px] w-full ${conicGradient} opacity-25 blur-md`}
          />

          <div className="550:rounded-md relative z-2 h-[210px] overflow-hidden bg-black p-8 text-white shadow-xl">
            <Background>
              <Image
                alt="nard-chrome"
                src="/_nard/svgs/nard-logo-chrome.svg"
                width={417}
                height={311}
                className="absolute -right-15 z-2 mt-10 w-[350px] min-w-[340px] mask-b-from-20% mask-b-to-80% opacity-70 md:mt-5 md:w-[370px]"
              />
              <Image
                alt="dots-texture"
                src="/_nard/imgs/dots-texture.png"
                width={500}
                height={500}
                className="550:min-w-[340px] absolute z-1 -ml-50 min-w-[200px] mask-radial-from-0% mask-radial-to-50% md:-ml-30"
              />
            </Background>
            <div className="_contents relative z-2 w-[90%] md:w-[70%]">
              <h2 className="font-FigtreeR mb-2">Let&apos;s connect</h2>
              <p className="text-[0.95rem] opacity-80">
                I&apos;m always excited to connect with new people. Feel free to
                reach out for work related matters or simply to chat, share
                ideas or provide feedback!
              </p>
              <div className="mt-10 flex gap-4">
                <EmailButton
                  text="Get in touch"
                  className="bg-white text-black hover:bg-white/90"
                />
                <Link href="/gallery/">
                  <Button className="bevel-[0.15] bg-white px-5 text-black hover:bg-white/90 active:scale-[0.9]">
                    Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
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
        <CTA />
      </>
    </main>
  );
}
