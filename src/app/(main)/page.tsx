import { Bolt } from "@/components/_ui/icons";
import Background from "@/components/ui/elements/background";
import Section from "@/components/ui/elements/section";
import Image from "next/image";
import Link from "next/link";
import {
  CircleCheck,
  CirclePlus,
  Copy,
  ExternalLink,
  Plus,
  Share,
} from "lucide-react";
import ActionBTN from "../_components/_ui/action-btn";
import CTA from "../_components/cta";
import { ReadMoreSection } from "@/components/_blog/read-more-section";
import CardsCarousel from "./_clients/cards-carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Hero } from "./_clients/home-hero";
import { MotionStagger } from "@/components/_motion/core";
import cereal from "@/app/gallery/_assets/_imgs/cereal-3d(1).webp";
import velvet from "@/app/gallery/_assets/_imgs/velvet.webp";
import profileCard from "@/app/gallery/_assets/_imgs/profile-card.webp";
import clonesSVG from "../_assets/_nard/svgs/clones-block.svg";
import gallerySVG from "../_assets/_nard/svgs/gallery-block.svg";
import flyersCollage from "../_assets/_nard/imgs/flyers--img-arts.webp";
import nydHero from "@public/_clients/nyd55/nyd55-hero.webp";
import nydFavicon from "@public/_clients/nyd55/nyd-logo-arrow.svg";
import { PathBeam } from "@/components/path-beam";

function Projects() {
  return (
    <Section.RootElement className="mb-15">
      <Section.Container container="none" className="_section--clones mb-8">
        <div className="bg-white pt-1">
          <Section.Container
            container="8xl"
            className="relative mb-8 px-[var(--gutter-x)]"
          >
            <Background className="grid justify-center">
              {/* <Background.Texture texture="noise" className="debug -z-1" /> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="background gradient"
                src="/_nard/gradient-blob.png"
                className="min-w-300 origin-center scale-150 opacity-30"
              />
            </Background>

            <MotionStagger preset="blurIn" staggerDelay={0.6}>
              <h2 className="_h2 font-FigtreeR mx-auto mt-17 max-w-[400px] py-5 pb-2 text-center">
                Crafting UIs that look{" "}
                <span className="font-SeriouslyNostalgic !font-[100]">
                  good
                </span>{" "}
                and works{" "}
                <span className="font-SeriouslyNostalgic !font-[100]">
                  right
                </span>{" "}
              </h2>
              <p className="mb-15 text-center">
                (<i>mostly</i> 🙃)
              </p>

              <div className="_client-projects relative z-3 mb-30">
                <div className="_showcase-pill mb-18 max-md:mb-22">
                  <div className="mx-auto flex max-w-max items-center gap-1 rounded-full bg-neutral-200/30 p-1 px-3">
                    <Bolt className="size-3 rotate-30" />
                    <span className="block !text-[0.7rem]">
                      Client Projects
                    </span>
                  </div>
                </div>

                <div className="_card-stack relative flex justify-center transition-transform duration-300 ease-in-out max-md:scale-110">
                  {/* card 1 */}
                  <div className="card relative z-3 mx-auto max-w-5xl rounded-lg bg-[#fffdfc] p-1 pb-0 shadow-xl">
                    <div className="header">
                      <Image
                        priority
                        // placeholder="blur"
                        src={nydHero.src}
                        width={nydHero.width}
                        height={nydHero.height}
                        alt="nyd55 hero image"
                        className="border-border/50 rounded-md border"
                      />
                    </div>
                    <div className="body flex items-center justify-between p-3">
                      <div className="flex items-center gap-3">
                        <div className="size-6.5 rounded-full p-1">
                          <Image
                            src={nydFavicon.src}
                            width={nydFavicon.width}
                            height={nydFavicon.height}
                            alt="nyd55 favicon"
                            className=""
                          />
                        </div>
                        <div>
                          <p className="m-0! text-[0.9rem] font-semibold">
                            NYD55 LOGISTICS
                          </p>
                          <p className="text-muted-foreground text-[0.75rem]">
                            A retail and logistics company.
                          </p>
                        </div>
                      </div>

                      <a
                        href="https://nydlogistic.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <small className="_link text-muted-foreground hover:text-n-accent flex items-center gap-1.5 transition-colors duration-200">
                          Visit Website{" "}
                          <ExternalLink size={11} className="-mt-1" />
                        </small>
                      </a>
                    </div>
                  </div>

                  {/* card 2 */}
                  <div className="_card-2 border-border/70 absolute z-2 mx-auto h-full w-full max-w-5xl -translate-y-8 scale-95 rounded-lg border bg-neutral-50 p-1 shadow-2xl md:-translate-y-10">
                    <div className="_bg h-full w-full rounded-lg bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 p-1">
                          <span className="rounded-md bg-neutral-200/60 p-0.75 text-neutral-600">
                            <CirclePlus size={6.5} className="" />
                          </span>
                          <small className="text-muted-foreground text-[0.65rem]">
                            Future project
                          </small>
                        </div>
                        <div className="flex items-center gap-2 pr-2">
                          <Share size={6.5} className="text-muted-foreground" />
                          <Plus size={6.5} className="text-muted-foreground" />
                          <Copy size={6.5} className="text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* card 3 */}
                  <div className="_card-2 border-border/70 absolute z-1 mx-auto h-full w-full max-w-5xl -translate-y-15 scale-90 rounded-lg border bg-neutral-50 p-1 shadow-2xl md:-translate-y-20">
                    <div className="_bg h-full w-full rounded-lg bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 p-1">
                          <span className="rounded-md bg-neutral-200/60 p-0.75 text-neutral-600">
                            <CirclePlus size={6.5} className="" />
                          </span>
                          <small className="text-muted-foreground text-[0.65rem]">
                            Future project
                          </small>
                        </div>
                        <div className="flex items-center gap-2 pr-2">
                          <Share size={6.5} className="text-muted-foreground" />
                          <Plus size={6.5} className="text-muted-foreground" />
                          <Copy size={6.5} className="text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionStagger>

            <div className="_h3 mb-5 flex">
              <div className="relative flex flex-col justify-center">
                <Image
                  alt="clones svg"
                  src={clonesSVG}
                  className="-translate-x-5 -translate-y-2 scale-[0.8] max-md:scale-[0.6]"
                />

                <PathBeam
                  path="M0 0L0 856"
                  duration={2.5}
                  height={500}
                  width={2}
                  className="absolute top-[70%] mask-b-from-20% mask-b-to-80%"
                />
              </div>
              <div>
                <h3 className="font-FigtreeR mb-2 font-[700]">Experiments</h3>
                <p className="text-muted-foreground text-[0.9rem]">
                  Mainly Web design and development. Mobile Development coming
                  soon.
                </p>
              </div>
            </div>
          </Section.Container>

          <CardsCarousel />
        </div>
      </Section.Container>

      <Section.Container
        container="8xl"
        className="_section--graphic-design mb-8 px-[var(--gutter-x)] py-8"
      >
        <div className="ml-10 flex flex-col gap-x-15 md:flex-row md:justify-center">
          <div className="left-half mb-5 md:w-[350px]">
            <div className="relative flex flex-col justify-center">
              <Image
                alt="gallery svg"
                src={gallerySVG}
                className="-translate-x-15 translate-y-14 max-md:scale-[0.7]"
              />

              <PathBeam
                path="M0 0L0 239.5L10 251.5L10 359L0 372.5L0 726.5"
                duration={3}
                height={750}
                width={20}
                className="absolute top-[190%] -translate-x-10.5 mask-b-from-20% mask-b-to-80% opacity-50"
              />
            </div>

            <h3 className="font-FigtreeR mb-3 font-[700]">Graphic Design</h3>
            <p className="text-muted-foreground mb-5">
              Custom designed assets of all kinds to give every project that
              unique touch, including, but not limited to:
            </p>

            <ul className="text-muted-foreground pl-5">
              <li className="flex items-center gap-1.5">
                <CircleCheck size={12} className="text-primary" />
                <span className="">Flyers, Posters</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheck size={12} className="text-primary" />
                <span className="">Banners</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheck size={12} className="text-primary" />
                <span className="">3D Renders</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheck size={12} className="text-primary shrink-0" />
                <span className="">Thumbnails, and so much more...</span>
              </li>
            </ul>
          </div>

          <div className="right-half md:w-[calc(100%-350px)]">
            <Image
              alt="bg-img"
              src={flyersCollage}
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
        <div className="max-550:-ml-35 mb-[40px] flex justify-center gap-20 py-10 md:gap-30">
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
        <div className="mt-8 mb-15 flex justify-center">
          <Link
            href="/gallery/#design-tab"
            className="block pb-2 drop-shadow-xl drop-shadow-black/10"
          >
            <ActionBTN className="h-10 rounded-full" text="See more designs" />
          </Link>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function BlogSection() {
  return (
    <Section.RootElement className="bg-white">
      <Section.Container
        container="8xl"
        className="p-10 px-[var(--gutter-x)] pb-20"
      >
        <h2 className="font-FigtreeR pt-15 text-center">Recent Blogs</h2>
        <p className="mt-4 text-center">
          Topics on software technology, design and anything in-between.
        </p>
        <div className="">
          <ReadMoreSection currentSlug={[]} title="" borders="" maxPosts={2} />
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function FAQ() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="p-10 px-[var(--gutter-x)] py-15 md:flex md:gap-20"
      >
        <div className="_header">
          <h2 className="font-FigtreeR mt-10 mb-2 text-center font-[700] md:text-left">
            Frequently Asked Questions{" "}
          </h2>
          <p className="max-md:text-center">
            Let&apos;s get some pressing questions out of the way.
          </p>
        </div>

        <div className="_faq-accordion my-10 w-full p-5 md:pt-0">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                <h6 className="font-FigtreeR">
                  How long does it take to complete a site?
                </h6>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-10">
                The timeline varies depending on the scope. A standard
                &quot;brochure&quot; website typically takes <b>2-4</b> weeks
                from discovery to deployment, while more complex e-commerce or
                custom web applications may take <b>6-10</b> weeks.{" "}
                <Link
                  href="/blog/introducing-nard-studios"
                  className="text-n-accent underline"
                >
                  I explain more here.
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline">
                <h6 className="font-FigtreeR">
                  What do you need from me to get started?
                </h6>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-10">
                Design is always the first point in development so if you have
                some designs or concepts ready (i.e brand colors, typography,
                graphic assets) that would speed up the development process, no
                worries if you don&apos;t have any, together, we will build a
                custom style guide for your project before development begins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:no-underline">
                <h6 className="font-FigtreeR">
                  Do you offer maintenance after the site is done?
                </h6>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-10">
                Yes I do. I offer a standard 21-day warranty period after launch
                to fix any bugs. Beyond that, I offer monthly maintenance
                packages if you would like me to handle software updates,
                backups, and small content tweaks so you can focus on your
                business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/process/#FAQs"
            className="mt-8 block drop-shadow-xl drop-shadow-black/10"
          >
            <ActionBTN className="h-10 rounded-full" text="See all FAQs" />
          </Link>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

/**
 * _FEATURE: 1. sections: Testimonials
 */

export default function Home() {
  return (
    <main
      className={`_homepage font min-h-screen overflow-hidden transition-colors duration-300`}
    >
      <Background className="opacity-50">
        <Background.Layer className="fixed top-0 left-0 h-full w-[30px] origin-bottom bg-[url(/_nard/svgs/left-marquee.svg)] lg:scale-[1.2]" />
        <Background.Layer className="fixed top-0 -right-6 h-full w-[45px] origin-bottom bg-[url(/_nard/svgs/right-marquee.svg)] lg:scale-[1.2]" />
      </Background>
      <>
        <div>
          <Hero />
          <Projects />
          <GraphicRow />
          <BlogSection />
          <FAQ />
          <CTA />
        </div>
      </>
    </main>
  );
}
