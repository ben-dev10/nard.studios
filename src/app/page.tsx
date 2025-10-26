"use client";

import {
  Github,
  Linkedin,
  PenSparkle,
  Whatsapp,
  XTwitter,
  DuplicatePlus,
} from "@/components/_ui/icons";
import Background from "@/components/ui/elements/background";
import Section from "@/components/ui/elements/section";
import Image from "next/image";
import Link from "next/link";
import Footer from "./_components/footer";
import { CircleCheck, X } from "lucide-react";
import Navbar from "./_components/navbar";
import { usePlatform } from "@/hooks/use-platform";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const line = <div className="_line w-full border-t border-dashed" />;
const conicGradient =
  "bg-[conic-gradient(from_180deg_at_50%_50%,_#4BCF9F_-11.27deg,_#FF7575_9.22deg,_#55AAFF_38.01deg,_#ECFF3E_329.66deg,_#4BCF9F_348.73deg,_#FF7575_369.22deg))]";

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
            Hey 👋, my name is Bernard Quarshie — Ben or{" "}
            <span className="text-primary">nard</span> works too, welcome to my
            portfolio.
          </p>
          <p className="">
            Since you are here, checkout some of my experiments below 👇
          </p>
        </div>

        {line}
      </Section.Container>
    </Section.RootElement>
  );
}

function ProjectCard({
  img,
  title,
  desc,
  href,
}: {
  img: Record<"src" | "alt", string> & Record<"width" | "height", number>;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <div className="">
      <Link className="block max-w-[600px] min-w-[350px]" href={href}>
        <Image
          alt={img.alt}
          src={img.src}
          width={img.width}
          height={img.height}
          className="rounded-4 mb-4 aspect-[1260/765] rounded-md shadow-lg"
        />
      </Link>
      <div className="">
        <p className="mb-1 !text-[1.2rem] font-[700]">{title}</p>
        {desc}
      </div>
    </div>
  );
}

function Projects() {
  const { isMobile } = usePlatform();

  return (
    <Section.RootElement className="mb-15">
      <Section.Container container="none" className="_section--clones mb-8">
        <Section.Container
          container="8xl"
          className="mb-8 px-[var(--gutter-x)]"
        >
          <h2 className="font-FigtreeR mx-auto mb-8 max-w-[500px] py-5 text-center">
            Crafting UIs that look{" "}
            <span className="font-SeriouslyNostalgic !font-[100]">good</span>{" "}
            and works{" "}
            <span className="font-SeriouslyNostalgic !font-[100]">
              right, (mostly 🙃)
            </span>
          </h2>

          <div className="mb-5">
            <div className="_header-pill--clones my-5 mt-8 flex max-w-max items-center gap-2 rounded-md bg-black p-1.5 px-3 text-white shadow-lg">
              <DuplicatePlus className="size-4" />
              <span className="font-FunnelDisplay text-[0.75rem] font-bold">
                UI Clones
              </span>
            </div>

            <p className="text-muted-foreground text-[0.9rem]">
              I tried to recreate some of the best UIs on the internet.
            </p>
          </div>
        </Section.Container>

        <div
          className={`_cards-carousel ${!isMobile && "_scrollbar-override"} flex gap-5 overflow-x-auto px-[var(--gutter-x)] py-5 md:justify-center`}
        >
          <ProjectCard
            href="/gallery/clones/clerk"
            title="Clerk Pricing Page"
            desc="Clone of CLerk's pricing page"
            img={{
              alt: "Clerk's Pricing page banner",
              src: "/_nard/imgs/clerk-banner.webp",
              width: 1260,
              height: 765,
            }}
          />
          <ProjectCard
            href="/gallery/clones/payload"
            title="Payload's homepage"
            desc="A near exact clone of Payload's homepage"
            img={{
              alt: "Payload's homepage banner",
              src: "/_nard/imgs/payload-banner.webp",
              width: 1260,
              height: 765,
            }}
          />
        </div>
      </Section.Container>

      <Section.Container
        container="8xl"
        className="_section--graphic-design mt-8 mb-8 px-[var(--gutter-x)] py-8"
      >
        {line}
        <div className="_header-pill--design my-5 mt-20 flex max-w-max items-center gap-2 rounded-md bg-black p-1.5 px-3 text-white shadow-lg">
          <PenSparkle className="size-4" />
          <span className="font-FunnelDisplay text-[0.75rem] font-bold">
            Graphic Design
          </span>
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
                <CircleCheck size={12} className="text-primary" />
                <span className="">Thumbnails, and so much more...</span>
              </li>
            </ul>
          </div>
          <div className="right-half md:w-[calc(100%-350px)]">
            <Image
              alt="bg-img"
              src="/_nard/imgs/flyers--img-arts.png"
              width={2382}
              height={1551}
              className="pointer-events-none -mt-10 min-w-[350px] scale-[1.2] md:-mt-20 md:min-w-[500px]"
            />
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function GraphicRow() {
  return (
    <Section.RootElement className="">
      <Section.Container className="">
        <div className="mt-[40px] mb-[40px] flex justify-center gap-20 py-10 md:gap-30">
          <div className="_img-1">
            <Image
              alt="flyer-1"
              src="/_nard/imgs/cereal-3d(1).webp"
              width={1920}
              height={1080}
              className="w-[220px] min-w-[200px] -rotate-4 rounded-md shadow-2xl sm:w-[250px]"
            />
          </div>
          <div className="_img-2">
            <Image
              alt="flyer-2"
              src="/_nard/imgs/velvet.webp"
              width={2040}
              height={1227}
              className="mt-15 w-[220px] min-w-[200px] rotate-6 rounded-sm shadow-2xl sm:w-[250px]"
            />
          </div>
          <div className="_img-3">
            <Image
              alt="flyer-3"
              src="/_nard/imgs/profile-card.webp"
              width={3000}
              height={3200}
              className="mt-30 w-[140px] min-w-[100px] rotate-5 rounded-sm shadow-2xl sm:w-[150px]"
            />
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function CTA() {
  return (
    <Section.RootElement className="[--breakpoint-xms:600px] [--xmm:@media(min-width:550px)]">
      <Section.Container
        container="8xl"
        className="550:px-[var(--gutter-x)] max-550:pb-0 py-15"
      >
        <div className="_contents+blur relative z-2">
          <Background.Layer
            className={`_bg-blur absolute -bottom-3 !-z-4 h-[200px] w-full ${conicGradient} opacity-25 blur-md`}
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
                alt="nard-chrome"
                src="/nard/dots-texture.png"
                width={500}
                height={500}
                className="absolute z-1 -ml-50 min-w-[400px] mask-radial-from-0% mask-radial-to-50% md:-ml-30"
              />
            </Background>
            <div className="_contents relative z-2 w-[90%] md:w-[70%]">
              <h2 className="font-FigtreeR mb-2">Let&apos;s connect</h2>
              <p className="opacity-80">
                I&apos;m always excited to connect with new people. Feel free to
                reach out for work related matters or simply to chat, share
                ideas or provide feedback!
              </p>
              <div className="mt-7 flex gap-4">
                <Link href="mailto:quarshiebernard552@gmail.com?subject=Project%20Inquiry&body=Hi%20there,">
                  <Button className="bevel-[0.5] bg-white text-black hover:bg-white/90 active:scale-[0.9]">
                    Send Email
                  </Button>
                </Link>
                <Link href="/gallery/clones/payload">
                  <Button className="bevel-[0.5] bg-white px-5 text-black hover:bg-white/90 active:scale-[0.9]">
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

const Banner = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}) => {
  return (
    <>
      {isVisible && (
        <div className="banner relative !z-50 flex justify-center bg-black p-1 text-white">
          <div className="flex max-w-max items-center gap-x-2">
            <p>Site is still a work in progress</p>
            <button
              className="cursor-pointer rounded-full p-1"
              onClick={() => {
                setIsVisible(false);
                console.log(isVisible);
              }}
            >
              <X size={16} className="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const APP_BG = "bg-[#fafafa]"; /* or: #fafafa, f7f7f7, #f4f5ff */
const APP_ZINDEX = "z-2";

/**
 * _FEATURE:
 * 1. navbar+sheet, (more sections: Testimonials, bentos)
 * 1.2 sticky nav
 * 2.showcase pill, global-fonts understand, graphic-row hover interactions
 * 3. assets optimize
 *
 * 4. pages: ui-clones/project-hub, about, gallery
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <main
      className={`_homepage font min-h-screen overflow-hidden transition-colors duration-300 ${APP_BG} [--gutter-x:3.75rem]`}
    >
      <Background className="opacity-50">
        <Background.Layer className="fixed top-0 left-0 h-full w-[30px] bg-[url(/_nard/svgs/left-marquee.svg)]" />
        <Background.Layer className="fixed top-0 -right-6 h-full w-[45px] bg-[url(/_nard/svgs/right-marquee.svg)]" />
      </Background>

      <Banner isVisible={isVisible} setIsVisible={setIsVisible} />
      <div className={`_contents relative ${APP_ZINDEX}`}>
        <Navbar isVisible={isVisible} />
        <Hero />
        <Projects />
        <GraphicRow />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
