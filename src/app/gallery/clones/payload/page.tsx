import Background from "@/components/ui/elements/background";
import Section from "@/components/ui/elements/section";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";
import { GridIcons, Testimonials, NavLinks } from "./assets/data";
import { ACMELogo } from "@/components/_ui/acme-logo";
import { Github } from "@/components/_ui/icons";
import { Button } from "@/components/ui/button";
import ClonesModal from "@/components/_ui/clones-modal";
import { ProductFeatures } from "./clients/product-features";
import { PayloadLinkBtn } from "./clients/payload-btn";

import payloadBgDesign from "./assets/payload-bg-design.jpg";
import pattern1 from "./assets/pattern-1.gif";
import hero1 from "./assets/payload--hero1.webp";
import hero2 from "./assets/payload--hero2.webp";
import productScreenshots from "./assets/product-screenshots.webp";

/*
_FIXME: Grid-lines Optimize
*/

const CONTENTSZINDEX = 3;

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
              src={hero2}
              alt="A screenshot of live preview."
              className="max-xs:max-w-[330px] rounded-[4px] border border-white/8 bg-[#141414]/70 p-[6px] shadow-2xl shadow-black md:max-w-[800px]"
            />
          </div>
          <div className="top-img absolute pl-20">
            <Image
              src={hero1}
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
          src={productScreenshots}
          alt="Large product screenshot of payload interfaces"
          className="aspect-[auto_2880/1940]"
        />
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
      className={`${className} _testimonial-card group snap-alway relative flex !h-full w-full shrink-0 grow-0 snap-start flex-col border-y border-l bg-black p-8 md:w-1/2`}
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

      <Section.Container container="none">
        <div className="_carousel-wrapper relative pb-5">
          <div className="_carousel scrollbar-hide relative z-4 mb-0 flex h-[var(--card-height)] snap-x scroll-pl-[var(--gutter-h)] overflow-visible overflow-x-scroll scroll-smooth px-[var(--gutter-h)] py-10 [--card-height:30rem]">
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
          </div>
        </div>
      </Section.Container>
      <Section.Container
        className="__testimonial-controls px-[var(--gutter-h)] pb-10"
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

function MiniModal() {
  return (
    <ClonesModal
      source="payloadcms.com"
      sourceURL="https://payloadcms.com/"
      bgURL="bg-[url(/_nard/imgs/payload-banner.webp)]"
      desc="payloadcms.com, not sponsored by the way :)"
    />
  );
}

/* main component */
export default function PayloadCMS() {
  return (
    <Section.RootElement className="_app.payload relative !top-0 !left-0 overflow-hidden bg-black text-white [--border:#fff]/15">
      <Section.Container container="none">
        <>
          <MiniModal />
          <Background>
            <Background.Layer
              className="debug fixed inset-0 z-1 !bg-size-[140px] bg-[50%] bg-repeat mix-blend-multiply md:!bg-size-[250px]"
              styles={{ backgroundImage: `url(${pattern1.src})` }}
            />
            <Background.Layer
              className={`_main-bg-design fixed inset-0 bg-cover`}
              styles={{ backgroundImage: `url(${payloadBgDesign.src})` }}
            />
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
          <div className="features__testimonials relative bg-black pb-60">
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
