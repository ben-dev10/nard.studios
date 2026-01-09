import Section from "@/components/ui/elements/section";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookTextIcon, Code2, PenToolIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Masonry from "../_components/masonry";
import Background from "@/components/ui/elements/background";
import MiniFooter from "../_components/mini-footer";
import galleryHero from "@/app/_assets/_nard/_ui/gallery-hero.webp";
import { HashScrollHandler } from "@/components/hash-scroll-handler";
import GallerySkeleton from "@/app/gallery/_assets/gallery-skeleton";
import { Suspense } from "react";
import PopoverUI from "@/components/_ui/popover-ui";
import CardsCarousel from "../(main)/_clients/cards-carousel";

function Hero() {
  return (
    <Section.RootElement className={`bg-[#f4f5f8] pt-20`}>
      <Section.Container
        container="8xl"
        className="px-[var(--gutter-x)] pt-25 pb-10 md:pt-8"
      >
        <Background.Layer className="absolute inset-0 -top-120 z-10 h-30 bg-blue-500" />
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-15">
          <div className="_header sm:w-[440px] md:min-w-[450px]">
            <h1 className="font-FigtreeR mb-5 text-balance">
              Hall of experiments & milestones
            </h1>
            <p>
              On this page,you will find a collection of code & design projects,
              experiments and links to clones & graphics I&apos;ve made until
              now, and the home of all future projects.
            </p>
          </div>

          <div className="_hero-img max-xs:-translate-x-35 pointer-events-none min-w-[600px] -translate-x-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="sheet isometric art" src={galleryHero.src} />
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

const BlocksCard = ({
  title,
  cardClass,
  imgClass,
  href,
  img,
}: {
  title: string;
  cardClass: string;
  imgClass: string;
  href: string;
  img: Record<"src" | "alt", string> & Record<"width" | "height", number>;
}) => {
  return (
    <Link href={href} className={`${cardClass} _block-card block`}>
      <div
        className={`_contents-wrapper h-[250px] rounded-[14px] bg-[#f0f0f0] p-2`}
      >
        <div className="_header-bg @container h-[80%] overflow-hidden rounded-[12px] bg-white px-5 pt-5">
          <div
            className={`${imgClass} _header-img-wrapper mx-auto h-full w-[80%]`}
          >
            <Image
              alt={img.alt}
              width={img.width}
              height={img.height}
              src={img.src}
              className=""
            />
          </div>
        </div>
        <p className="p-2 font-bold">{title}</p>
      </div>
    </Link>
  );
};

function SoftwareTabContent() {
  return (
    <Section.RootElement className="">
      <Section.Container container="8xl" className="p-8 px-[var(--gutter-x)]">
        <div className="_header my-5">
          <h2 className="font-FigtreeR mb-4">Software projects.</h2>
          <p className="text-muted-foreground mb-15">
            Over the past couple of years, I have built a myriad of projects,
            many of which did not see the light of day - archived away into
            oblivion. But there were some that were fun, challenging and great
            learning experiences that I thought would be nice to have them
            featured in my portfolio.
          </p>
        </div>

        <div className="_separator-01 flex items-center gap-5">
          <p className="">
            <b>Featured</b>
          </p>
          <hr className="w-full" />
        </div>
      </Section.Container>

      <CardsCarousel />

      <Section.Container
        container="8xl"
        className="_ui-blocks mb-30 p-8 px-[var(--gutter-x)]"
      >
        <div className="_separator-02 flex items-center gap-5">
          <p className="whitespace-pre">
            <b>UI BLocks Library 📦</b>
          </p>
          <hr className="w-full" />
        </div>

        <div className="_blocks-card--grid max-xs:grid-cols-1 grid gap-5 py-10 sm:grid-cols-8">
          <BlocksCard
            title="Sheets"
            href="/gallery/ui"
            cardClass="col-span-1 sm:col-span-3"
            imgClass="pl-8 @sm:pl-0 min-w-[260px]"
            img={{
              alt: "sheets-card image",
              height: 500,
              width: 664,
              src: "/_nard/_ui/sheets-ui.webp",
            }}
          />
          <BlocksCard
            title="Headers"
            href="/gallery/ui"
            cardClass="col-span-1 sm:col-span-5"
            imgClass="pl-8 @sm:pl-0 min-w-[260px]"
            img={{
              alt: "headers-card image",
              height: 808,
              width: 428,
              src: "/_nard/_ui/headers-ui.webp",
            }}
          />
          <BlocksCard
            title="Heroes"
            href="/gallery/ui"
            cardClass="col-span-1 sm:col-span-5"
            imgClass="pl-8 @sm:pl-0 min-w-[260px]"
            img={{
              alt: "heroes-card image",
              height: 500,
              width: 664,
              src: "/_nard/_ui/heroes-ui.webp",
            }}
          />
          <BlocksCard
            title="Footers"
            href="/gallery/ui"
            cardClass="col-span-1 sm:col-span-3"
            imgClass="pl-8 @sm:pl-0 min-w-[260px]"
            img={{
              alt: "sheets-card image",
              height: 500,
              width: 664,
              src: "/_nard/_ui/footers-ui.webp",
            }}
          />
        </div>

        <div className="flex justify-center">
          <Link href={"/gallery/ui"}>
            <Button className="rounded-full">
              See all blocks <ArrowRight size={12} />
            </Button>
          </Link>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function DesignTabContent() {
  return (
    <Section.RootElement className="min-h-[80vh] p-10">
      <Section.Container
        container="8xl"
        className="px-[calc(var(--gutter-x)-30px)]"
      >
        <div className="_header my-5">
          <h2 className="font-FigtreeR">Image Gallery</h2>
          <p className="text-muted-foreground mt-2 mb-15">
            Flyers, 3D Renders and Logos.
          </p>
        </div>

        <Suspense fallback={<GallerySkeleton />}>
          <Masonry />
        </Suspense>
      </Section.Container>
    </Section.RootElement>
  );
}

function EngineeringTabContent() {
  return (
    <Section.RootElement className="min-h-[80vh] p-10">
      <Section.Container container="8xl">
        <div className="">Engineering Tab Section</div>
      </Section.Container>
    </Section.RootElement>
  );
}

export default function GalleryPage() {
  return (
    <>
      <main className="-mt-20 overflow-hidden pt-0 transition-colors duration-300">
        <HashScrollHandler />
        <Hero />
        <hr className="_line border-t" />

        <div className="_tabbed-section py-10">
          <Tabs defaultValue="software" className="_header-tabs">
            <TabsList className="mx-auto flex h-12 [&_p]:text-[1rem]">
              <TabsTrigger id="software-tab" value="software">
                <div className="flex items-center gap-2 px-2">
                  <Code2 className="size-5 shrink-0" />
                  <p>Software</p>
                </div>
              </TabsTrigger>

              <TabsTrigger id="design-tab" value="design" className="">
                <div className="flex items-center gap-2 px-2">
                  <PenToolIcon className="size-5 shrink-0" />
                  <p className="">Design</p>
                </div>
              </TabsTrigger>

              <div className="" id="engineering-tab">
                <PopoverUI
                  side="top"
                  trigger={
                    <TabsTrigger value="engineering" disabled asChild>
                      <div className="flex items-center gap-2 opacity-40">
                        <BookTextIcon className="size-5 shrink-0" />
                        <p>Engineering</p>
                      </div>
                    </TabsTrigger>
                  }
                  content="Coming soon..."
                />
              </div>
            </TabsList>
            <>
              <TabsContent value="software">
                <SoftwareTabContent />
              </TabsContent>
              <TabsContent value="design">
                <DesignTabContent />
              </TabsContent>
              <TabsContent value="engineering">
                <EngineeringTabContent />
              </TabsContent>
            </>
          </Tabs>
        </div>
      </main>
      <MiniFooter />
    </>
  );
}
