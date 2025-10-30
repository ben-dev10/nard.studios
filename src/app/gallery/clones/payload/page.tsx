"use client";
import Background from "@/components/ui/elements/background";
import Section from "@/components/ui/elements/section";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Search,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { GridIcons, FeatureLinks, Testimonials, NavLinks } from "./assets/data";
import { ACMELogo } from "@/components/_ui/acme-logo";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Github } from "@/components/_ui/icons";
import { Button } from "@/components/ui/button";
import ClonesModal from "@/components/_ui/clones-modal";
import { useScrollbarMode } from "@/hooks/use-scrollbar-mode";

/*
_FIXME: 
1. Grid-lines Optimize
3. General code optimization
*/

const CONTENTSZINDEX = 3;

const PayloadLinkBtn = ({
  link,
  text,
  className,
  variant = "link",
}: {
  link?: string;
  text: string;
  className?: string;
  variant: "copy" | "link";
}) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  let content: React.ReactNode | string = "no content";
  const originalStyles =
    "absolute top-0 flex h-full w-full items-center justify-between p-2 py-3 transition-[top] duration-[450ms] ease-[cubic-bezier(0.17,0.84,0.44,1)] group-hover:-top-[110%] group-hover:-rotate-z-1";
  const duplicateStyles =
    "absolute top-[115%] flex h-full w-full rotate-z-1 items-center justify-between bg-white p-2 py-3 text-black transition-[top] duration-[450ms] ease-[cubic-bezier(0.17,0.84,0.44,1)] group-hover:top-0 group-hover:rotate-z-0";

  if (link && variant === "link") {
    content = (
      <>
        <a href={link} className={`px-4 ${originalStyles}`}>
          {text} <ArrowUpRight className="" size={14} />
        </a>
        <a href={link} className={`px-4 ${duplicateStyles}`}>
          {text} <ArrowUpRight className="" size={14} />
        </a>
      </>
    );
  }

  if (!link && variant === "copy") {
    content = (
      <>
        <span
          onClick={() => {
            copyToClipboard("npx create-payload-app");
          }}
          className={`font-JetBrainsMono px-4 ${originalStyles}`}
        >
          {text}
          {isCopied ? <Check size={14} /> : <Copy className="" size={14} />}
        </span>
        <span
          onClick={() => {
            copyToClipboard("npx create-payload-app");
          }}
          className={`font-JetBrainsMono px-4 ${duplicateStyles}`}
        >
          {text}
          {isCopied ? <Check size={14} /> : <Copy className="" size={14} />}
        </span>
      </>
    );
  }

  return (
    <button
      className={`group relative h-[var(--btn-height)] w-full overflow-hidden [--btn-height:50px] md:text-[0.7rem] ${className}`}
    >
      {content}
    </button>
  );
};

const PayloadNav = () => {
  return (
    <Section.RootElement
      as="header"
      className="fixed top-0 z-9999 w-full bg-black px-[var(--gutter-h)]"
    >
      <Section.Container
        container="none"
        className="flex h-[55px] items-center gap-2"
      >
        <div className="_logo flex items-center">
          <ACMELogo
            variant="simple"
            simpleFill="#fff"
            simpleSizeClass="size-5"
          />{" "}
          <span className="font-Geist ml-3 text-lg font-[700]">ACME</span>
        </div>

        <nav className="_navlinks mx-auto hidden md:block">
          <ul className="flex justify-center gap-4">
            {NavLinks.map((item, index) => (
              <li key={index} className="">
                <a href={item.url} className="hover:opacity-90">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="_utilities ml-auto flex items-center gap-1">
          <a href="#" className="_github flex items-center gap-1 md:-mb-1">
            <Github className="size-4" />{" "}
            <span className="font-JetBrainsMono">38.1K</span>
          </a>
          <div className="_btns+search flex items-center gap-1">
            <Button variant={"ghost"} className="hidden lg:block">
              Login
            </Button>
            <Button className="hidden bg-white text-black hover:bg-white/90 lg:block">
              Get Started
            </Button>

            <button className="ml-2">
              <Search size={16} />
            </button>
          </div>
          <div className="_sheet ml-2">{/* <SheetMintlify /> */}</div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
};

const PayloadHero = () => {
  return (
    <Section.RootElement className={`min-h-[65vh] px-[var(--gutter-h)]`}>
      <Section.Container
        container="none"
        className="grid grid-cols-1 items-center gap-0 max-md:pt-5 md:grid-cols-16"
      >
        <div className="_header--cta grid md:col-span-4 md:items-center">
          <div className="wrapper">
            <h3 className="font-UntitledSansB mb-5 font-normal text-balance sm:text-4xl md:w-[150%] lg:text-5xl">
              The backend to build the modern web.
            </h3>
            <div className="_cta-btns mb-15 grid w-full border-y sm:grid-cols-2 md:grid-cols-1">
              <PayloadLinkBtn variant="copy" text="$ npx create-payload-app" />
              <PayloadLinkBtn
                link="#"
                text="Schedule a demo"
                className="max-sm:border-t md:border-t"
                variant="link"
              />
            </div>
          </div>
        </div>

        <div className="_hero-imgs relative grid pb-15 md:col-start-8 md:col-end-[span_9] md:items-center">
          <div className="bottom-img relative pt-20 pr-20 md:pt-50">
            <Image
              width="3200"
              height="1973"
              src="/payload-cms/payload--hero2.webp"
              alt="A screenshot of live preview."
              className="max-xs:max-w-[330px] rounded-[4px] border border-white/8 bg-[#141414]/70 p-[6px] shadow-2xl shadow-black md:max-w-[800px]"
            />
          </div>
          <div className="top-img absolute pl-20">
            <Image
              width="3200"
              height="1915"
              src="/payload-cms/payload--hero1.webp"
              alt="Payload app structure and config"
              className="max-xs:max-w-[330px] rounded-[4px] border border-white/8 bg-[#141414]/70 p-[6px] shadow-2xl shadow-black md:max-w-[800px]"
            />
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
};

const PayloadCustomers = () => {
  return (
    <Section.RootElement className="px-[var(--gutter-h)]">
      <Section.Container container="none" className="">
        <div className="_contents flex flex-col md:items-center">
          <h4 className="font-UntitledSansR relative mb-10 font-[500]">
            Payload is the open-source Next.js backend used in production by the
            most innovative companies on earth.
          </h4>

          <div className="_logo-grid mt-10 grid h-[calc(var(--column)*4)] w-full grid-cols-8 md:h-[calc(var(--column)*2)] md:grid-cols-16">
            {GridIcons.map((grid, index) => (
              <div key={index} className={grid.className}>
                {grid.asDiv?.status ? (
                  grid.asDiv.node
                ) : grid.img ? (
                  <Image
                    alt={grid.img.alt}
                    width={grid.img.width}
                    height={grid.img.height}
                    src={grid.img.src}
                    className={grid.img.className}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
};

const ProductScreenshots = () => {
  return (
    <Section.RootElement className="pb-15">
      <Section.Container
        className="_header grid justify-center px-[var(--gutter-h)] py-15 pt-30"
        container="none"
      >
        <h2 className="font-UntitledSansB text-center font-normal">
          Code-first for developers.
          <br />
          Content-first for marketers.
        </h2>
      </Section.Container>
      <Section.Container container="none" className="_product-img md:mt-5">
        <Image
          width={2880}
          height={1940}
          src={"/payload-cms/product-screenshots.webp"}
          alt="Large product screenshot of payload interfaces"
          className="aspect-[auto_2880/1940]"
        />
      </Section.Container>
    </Section.RootElement>
  );
};

const ProductFeatures = () => {
  const [hoveredItem, setHoveredItem] = useState(FeatureLinks[0].id);

  return (
    <Section.RootElement className="relative px-[var(--gutter-h)]">
      <Section.Container className="feature-list grid grid-cols-1 py-15 md:grid-cols-16 lg:py-20">
        <div className="__links--headers h-full pt-10 md:col-span-8">
          <h5 className="font-UntitledSansR">
            Use Payload to build anything. Or everything.
          </h5>

          <div className="_header-links my-5 mb-15 flex flex-col">
            {FeatureLinks.map((item) => (
              <button
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(FeatureLinks[0].id)}
                key={item.id}
                className="group max-w-max"
              >
                <a
                  href={item.url}
                  className="flex items-center justify-between"
                >
                  <span
                    className={`${
                      item.className
                    } transition-opacity duration-500 ${
                      hoveredItem === item.id ? "opacity-100" : "opacity-40"
                    } font-UntitledSansB my-2 mr-2 text-left text-3xl md:whitespace-pre-line`}
                  >
                    {item.id}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="opacity-0 duration-500 ease-in-out group-hover:opacity-30"
                  />
                </a>
              </button>
            ))}
          </div>

          <div className="payload-btn lg:grid lg:grid-cols-8">
            <PayloadLinkBtn
              variant="link"
              className="border-y lg:col-span-4"
              link="#"
              text="Schedule a demo"
            />
          </div>
        </div>

        <div className="_images relative z-4 flex h-125 items-center justify-center max-md:order-first md:col-span-8 md:h-full md:items-center md:justify-start">
          {hoveredItem &&
            FeatureLinks.map(
              (item) =>
                hoveredItem === item.id && (
                  <Image
                    width={item.img.width}
                    height={item.img.height}
                    src={item.img.src}
                    alt={item.img.alt}
                    key={item.id}
                    className="animate-fadeIn absolute sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px]"
                  />
                ),
            )}
        </div>

        <Background.Layer className="bg-scanline absolute inset-y-0 left-[calc(100vw-var(--gutter-h)-var(--column)*8)] hidden w-[calc(var(--gutter-h)+var(--column)*8)] bg-[url(/payload-cms/pattern-element.png)] bg-repeat opacity-8 md:block lg:left-[calc(100vw-var(--gutter-h)-var(--column)*4)]" />
      </Section.Container>
    </Section.RootElement>
  );
};

const TestimonialCard = ({
  author,
  img,
  quote,
  url,
  className,
}: {
  author: string;
  quote: string;
  url: string;
  className?: string;
  img: {
    width: number;
    height: number;
    alt: string;
    src: string;
  };
}) => {
  return (
    <div
      className={`${className} _testimonial-card group relative flex !h-full w-full shrink-0 grow-0 snap-start snap-always flex-col border-y border-l bg-black p-8 md:w-1/2`}
    >
      <a href={url} className="absolute inset-0" />
      <div className="">
        <h4 className="font-UntitledSansB mb-3">&apos;{quote}&apos;</h4>
        <p className="text-[1.2rem]">{author}</p>
      </div>

      <div className="bottom-half mt-auto flex items-center">
        <div className="--image">
          <Image
            src={img.src}
            height={img.height}
            width={img.width}
            alt={img.alt}
            className="pointer-events-none -ml-10 aspect-[150/37] h-[80px]"
          />
        </div>
        <div className="case-study ml-auto flex items-center opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <span className="">Case Study</span>
          <span className="mr-2 ml-1">
            <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <Section.RootElement className="bg-black py-10 lg:pt-20">
      <Section.Container container="none" className="px-[var(--gutter-h)]">
        <h3 className="font-UntitledSansB font-normal">
          From Fortune 500 companies to indie devs, Payload is the answer to
          &apos;build vs. buy.&apos;
        </h3>
      </Section.Container>
      <Section.Container
        container="none"
        className="_carousel scrollbar-hide relative z-4 flex h-[var(--card-height)] snap-x scroll-pl-[var(--gutter-h)] overflow-visible overflow-x-scroll px-[var(--gutter-h)] py-10 [--card-height:30rem]"
      >
        {Testimonials.map((item) => (
          <TestimonialCard
            url={item.url}
            quote={item.quote}
            key={item.id}
            author={item.author}
            img={item.img}
            className={item.className}
          />
        ))}
      </Section.Container>
      <Section.Container
        className="--testimonial-controls px-[var(--gutter-h)] pb-10"
        container="none"
      >
        <div className="buttons ml-10">
          <button className="mr-2 p-2">
            <ArrowLeft size={20} />
          </button>
          <button className="p-2">
            <ArrowRight size={20} />
          </button>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
};

const GridLines = () => {
  return (
    <div className="grid-lines pointer-events-none absolute top-0 left-[var(--gutter-h)] -z-1 grid h-full w-[calc(100%-var(--gutter-h)*2)] grid-cols-16 gap-0 select-none">
      <div className="grid-line gl-left [grid-area:1/1/1/1]" />
      <div className="grid-line gl-left-center hidden [grid-area:1/5/1/9] md:block" />
      <div className="grid-line gl-center hidden [grid-area:1/9/1/13] sm:max-md:block" />
      <div className="grid-line gl-right-center hidden [grid-area:1/13/1/17]" />
      <div className="grid-line gl-right [grid-area:1/17/1/17]" />
    </div>
  );
};

/* main component */
export default function PayloadCMS() {
  useScrollbarMode("dark");

  return (
    <Section.RootElement className="_app.payload relative !top-0 !left-0 overflow-hidden text-white [--border:#fff]/15">
      <Section.Container container="none">
        <>
          <ClonesModal
            source="payloadcms.com"
            sourceURL="https://payloadcms.com/"
            bgURL="bg-[url(/_nard/imgs/payload-banner.webp)]"
            desc="payloadcms.com, not sponsored by the way :)"
          />
          <Background>
            <Background.Texture
              texture="url(/payload-cms/pattern-1.gif)"
              className="fixed !bg-size-[140px] bg-[50%] bg-repeat md:!bg-size-[250px]"
              blendMode="multiply"
            />
            <Background.Layer className="fixed inset-0 bg-[url(/payload-cms/payload-bg-design.jpg)] bg-cover" />
            <Background.Layer className="top-mask-gradient fixed inset-x-0 top-0 left-0 h-[var(--mask-height)] bg-gradient-to-b from-black to-transparent [--mask-height:320px]" />
          </Background>
        </>
        <div
          className="_contents relative !top-0 !left-0"
          style={{ zIndex: CONTENTSZINDEX }}
        >
          <PayloadNav />
          <div className="hero__customers relative pt-[var(--hero-top-padding)] [--hero-top-padding:8rem]">
            <PayloadHero />
            <PayloadCustomers />
            <GridLines />
          </div>
          <div className="_product-screenshots relative">
            <ProductScreenshots />
            <div className="grid-lines pointer-events-none absolute top-0 left-[var(--gutter-h)] -z-1 grid h-full w-[calc(100%-var(--gutter-h)*2)] grid-cols-16 gap-0 select-none">
              <div className="grid-line2 gl-left [grid-area:1/1/1/1]" />
              <div className="grid-line2 gl-left-center hidden [grid-area:1/5/1/9] md:block" />
              <div className="grid-line2 gl-center hidden [grid-area:1/9/1/13] sm:max-md:block" />
              <div className="grid-line2 gl-right-center hidden [grid-area:1/13/1/17]" />
              <div className="grid-line2 gl-right [grid-area:1/17/1/17]" />
            </div>
          </div>
          <div className="features__testimonials relative bg-black">
            <ProductFeatures />
            <Testimonial />
            <div className="grid-lines pointer-events-none absolute top-0 left-[var(--gutter-h)] z-1 grid h-full w-[calc(100%-var(--gutter-h)*2)] grid-cols-16 gap-0 select-none">
              <div className="grid-line2 gl-left [grid-area:1/1/1/1]" />
              <div className="grid-line2 gl-left-center hidden [grid-area:1/5/1/9] lg:block" />
              <div className="grid-line2 gl-center hidden [grid-area:1/9/1/13] md:max-lg:block" />
              <div className="grid-line2 gl-right-center hidden [grid-area:1/13/1/17]" />
              <div className="grid-line2 gl-right [grid-area:1/17/1/17]" />
            </div>
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}
