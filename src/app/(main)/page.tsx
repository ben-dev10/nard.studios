import { Bolt } from "@/components/_ui/icons";
import Background from "@/components/ui/elements/background";
import Section from "@/components/ui/elements/section";
import Image from "next/image";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
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
import { Button } from "@/components/ui/button";

import cereal from "@/app/gallery/_assets/_imgs/cereal-3d(1).webp";
import velvet from "@/app/gallery/_assets/_imgs/velvet.webp";
import profileCard from "@/app/gallery/_assets/_imgs/profile-card.webp";
import clonesSVG from "../_assets/_nard/svgs/clones-block.svg";
import gallerySVG from "../_assets/_nard/svgs/gallery-block.svg";
import flyersCollage from "../_assets/_nard/imgs/flyers--img-arts.webp";

const line = <div className="_line w-full border-t border-dashed" />;

function Projects() {
  return (
    <Section.RootElement className="mb-15">
      <Section.Container container="none" className="_section--clones mb-8">
        <Section.Container
          container="8xl"
          className="mb-8 px-[var(--gutter-x)]"
        >
          <MotionStagger preset="blurIn" staggerDelay={0.6}>
            <div className="_showcase-pill mt-17">
              <div className="mx-auto flex max-w-max items-center gap-1 rounded-full bg-neutral-200/30 p-1 px-3">
                <Bolt className="size-3 rotate-30" />
                <span className="block !text-[0.7rem]">Showcase</span>
              </div>
            </div>
            <h2 className="_h2 font-FigtreeR mx-auto max-w-[400px] py-5 pb-2 text-center">
              Crafting UIs that look{" "}
              <span className="font-SeriouslyNostalgic !font-[100]">good</span>{" "}
              and works{" "}
              <span className="font-SeriouslyNostalgic !font-[100]">
                right
              </span>{" "}
            </h2>
            <p className="mb-15 text-center">
              (<i>mostly</i> 🙃)
            </p>
          </MotionStagger>

          <div className="_h3 mb-5 flex">
            <Image
              alt="clones svg"
              src={clonesSVG}
              className="-translate-x-5 -translate-y-2 scale-[0.8] max-md:scale-[0.6]"
            />

            <div>
              <h3 className="font-FigtreeR mb-2 font-[700]">
                Software Projects
              </h3>
              <p className="text-muted-foreground text-[0.9rem]">
                I tried to recreate some of the best UIs on the internet.
              </p>
            </div>
          </div>
        </Section.Container>

        <CardsCarousel />
      </Section.Container>

      <Section.Container
        container="8xl"
        className="_section--graphic-design mt-8 mb-8 px-[var(--gutter-x)] py-8"
      >
        {line}
        <div className="mt-8 ml-10 flex flex-col gap-x-15 md:mt-15 md:flex-row md:justify-center">
          <div className="left-half mb-5 md:w-[350px]">
            <Image
              alt="gallery svg"
              src={gallerySVG}
              className="-translate-x-15 translate-y-14 max-md:scale-[0.7]"
            />

            <h3 className="font-FigtreeR mb-3 font-[700]">Graphics Design</h3>
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

            <div className="mt-8">
              <Link
                href="/gallery"
                className="rounded-[8px] pb-2 shadow-md shadow-black/45"
              >
                <ActionBTN
                  className="h-11 w-full rounded-lg"
                  text="See gallery"
                />
              </Link>
            </div>
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
              <AccordionContent>
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
              <AccordionContent>
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
              <AccordionContent>
                Yes I do. I offer a standard 21-day warranty period after launch
                to fix any bugs. Beyond that, I offer monthly maintenance
                packages if you would like me to handle software updates,
                backups, and small content tweaks so you can focus on your
                business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link href="/process/#FAQs">
            <Button className="mt-8">See all FAQs -&gt; </Button>
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
        <Background.Layer className="fixed top-0 left-0 h-full w-[30px] bg-[url(/_nard/svgs/left-marquee.svg)]" />
        <Background.Layer className="fixed top-0 -right-6 h-full w-[45px] bg-[url(/_nard/svgs/right-marquee.svg)]" />
      </Background>
      <>
        <Hero />
        <Projects />
        <GraphicRow />
        <BlogSection />
        <FAQ />
        <CTA />
      </>
    </main>
  );
}
