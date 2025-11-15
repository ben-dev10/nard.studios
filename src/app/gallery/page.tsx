import Section from "@/components/ui/elements/section";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookTextIcon, Code2, PenToolIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import ProjectCard from "../_components/project-card";
import { Button } from "@/components/ui/button";
import { TooltipUI } from "@/components/_ui/tooltip-ui";

function Hero() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="px-[var(--gutter-x)] pt-25 pb-10 md:pt-8"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-15">
          <div className="_header sm:w-[440px] md:min-w-[450px]">
            <h1 className="mb-5 text-balance">
              Hall of experiments, arts & milestones
            </h1>
            <p>
              On this page,you will find a collection of code & design projects,
              experiments and links to clones & graphics I&apos;ve made until
              now, and the home of all future projects.
            </p>
          </div>

          <div className="_hero-img min-w-[500px] max-md:translate-x-5">
            <Image
              priority
              alt="Gallery hero image"
              width={1472}
              height={1264}
              src="/_nard/imgs/gallery-hero.webp"
              className=""
            />
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
          <h2 className="mb-5">Software projects.</h2>
          <p className="text-muted-foreground mb-5">
            Over the past coupled of years I have built a number of projects,
            many of which didn&apos;t see the light of day - archived away in a
            soon to be deleted repository.
          </p>
          <p className="text-muted-foreground mb-10">
            But there are some that works that were fun yet challenging and a
            great learning experience that I thought would be nice to have
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

      <div className="_featured-cards mb-10 flex gap-10 overflow-x-auto px-[var(--gutter-x)] py-5 md:justify-center">
        <ProjectCard
          href="/gallery/clones/clerk"
          title="Clerk Pricing Page clone"
          desc="A clone of Clerk's pricing page."
          img={{
            alt: "Clerk's Pricing page banner",
            src: "/_nard/imgs/clerk-banner.webp",
            width: 1260,
            height: 765,
          }}
          date="Sept 2025"
        />
        <ProjectCard
          href="/gallery/clones/payload"
          title="Payload Homepage clone"
          desc="A near-exact clone of Payload's homepage."
          img={{
            alt: "Payload's homepage banner",
            src: "/_nard/imgs/payload-banner.webp",
            width: 1260,
            height: 765,
          }}
          date="Sept 2025"
        />
      </div>

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
              height: 500,
              width: 664,
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
      <Section.Container container="8xl">
        <div className="">Design Tab Section</div>
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
      <main className="overflow-hidden pt-0 transition-colors duration-300">
        <Hero />
        <hr className="_line border-dashed" />

        <div className="_tabbed-section py-10">
          <Tabs defaultValue="software" className="_header-tabs">
            <ScrollArea>
              <TabsList className="mx-auto grid h-12 grid-cols-3 [&_p]:text-[1.1rem]">
                <TabsTrigger value="software">
                  <div className="flex items-center gap-2">
                    <Code2 className="size-5 shrink-0" />
                    <p>Software</p>
                  </div>
                </TabsTrigger>
                {/* _ERROR: The tooltip implementations below will throw hydration errors */}
                <TooltipUI
                  content=" Coming Soon"
                  trigger={
                    <TabsTrigger value="design" disabled className="">
                      <div className="flex items-center gap-2">
                        <PenToolIcon className="size-5 shrink-0" />
                        <p className="">Design</p>
                      </div>
                    </TabsTrigger>
                  }
                />
                <TooltipUI
                  content=" Coming Soon"
                  trigger={
                    <TabsTrigger value="engineering" disabled>
                      <div className="flex items-center gap-2">
                        <BookTextIcon className="size-5 shrink-0" />
                        <p>Engineering</p>
                      </div>
                    </TabsTrigger>
                  }
                />
              </TabsList>
            </ScrollArea>
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
    </>
  );
}
