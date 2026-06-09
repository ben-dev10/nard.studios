import Section from "@/components/ui/elements/section";
import Link from "next/link";
import Image from "next/image";
import { AlarmClockIcon, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/app/_components/contact-form";
import { NARD_EMAIL } from "@/app/_assets/constants";
import { HashScrollHandler } from "@/components/hash-scroll-handler";
import { Badge } from "@/components/ui/badge";
import GhanaGlobe from "@/components/globe";
import { cn } from "@/lib/utils";
import { NardLogoSmall } from "@/components/_ui/icons";
import figmaUI from "@public/_nard/svgs/grid--figma.svg";
import comingSoon from "@public/_nard/svgs/coming-soon.svg";
import convexLogo from "@public/_nard/svgs/convex-logo.svg";
import cLogo from "@public/_nard/_imgs/c-lang-logo.webp";
import { FlickeringGrid } from "@/components/_blog/flickering-grid";
import NextjsIcon from "@/components/icons/next-js";
import ReactIcon from "@/components/icons/react";
import TypescriptIcon from "@/components/icons/typescript";
import SupabaseIcon from "@/components/icons/supabase";
import MongodbIcon from "@/components/icons/mongo-db";
import PythonIcon from "@/components/icons/python";
import ClerkIcon from "@/components/icons/clerk";

const ImageCard = ({
  imgSrc,
  className,
}: {
  imgSrc: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute aspect-[0.9/1] w-[60%] rounded-lg bg-white p-1 pb-5 shadow-lg",
        className,
      )}
    >
      <div
        className="h-full rounded-lg"
        style={{
          backgroundImage: imgSrc,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

function About() {
  const gridItemsSize =
    "border-border/50 h-105 rounded-lg border bg-[#fafafc] overflow-hidden";
  const badgeCSS =
    "text-foreground flex items-center rounded-full hover:cursor-pointer hover:bg-black hover:text-white border border-black/10 bg-transparent nth-[2]:border-transparent nth-[2]:bg-[#27d4ee] nth-[2]:text-white";

  const skillsData = [
    {
      icon: <NextjsIcon className="shrink-0" />,
      text: "Nextjs",
    },
    {
      icon: <ReactIcon className="shrink-0" />,
      text: "React",
    },
    {
      icon: <TypescriptIcon className="shrink-0" />,
      text: "Typescript",
    },
    {
      icon: (
        <Image
          src={convexLogo.src}
          width={convexLogo.width}
          height={convexLogo.height}
          alt="convex logo"
          className="w-3.5 shrink-0"
        />
      ),
      text: "Convex",
    },
    {
      icon: <SupabaseIcon className="shrink-0" />,
      text: "Supabase",
    },
    {
      icon: <ClerkIcon className="shrink-0" />,
      text: "Clerk",
    },
    {
      icon: <MongodbIcon className="shrink-0" />,
      text: "MongoDB",
    },
    {
      icon: (
        <Image
          src={cLogo.src}
          width={cLogo.width}
          height={cLogo.height}
          alt="c-lang logo"
          className="w-3.5 shrink-0"
        />
      ),
      text: "C",
    },
    {
      icon: <PythonIcon className="shrink-0" />,
      text: "Python",
    },
  ];

  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="px-[calc(var(--gutter-x)-22px)] pt-25 pb-15"
      >
        <div className="mb-20">
          <h1 className="font-FigtreeR mb-5">A developer and designer.</h1>
          <p className="text-muted-foreground mb-2">
            I am a passionate and dedicated programmer | engineer based in the
            heart of Accra, Ghana.
          </p>
        </div>

        <div className="_profile-bento mt-6 grid grid-cols-1 gap-4 md:grid-cols-5">
          {/* skills */}
          <div
            className={cn(
              "_skills-card relative flex flex-col md:col-span-2",
              gridItemsSize,
            )}
          >
            <div className="_dots-texture absolute top-0 h-20 w-full mask-b-from-20% mask-b-to-80% opacity-50">
              <FlickeringGrid
                squareSize={1.5}
                gridGap={3.5}
                flickerChance={0.1}
              />
            </div>
            <NardLogoSmall className="my-6 mb-12 ml-6" />

            <div className="_badges @container relative grow overflow-hidden">
              <div className="row_1 mb-3 flex gap-2">
                {skillsData.map((item, index) => (
                  <Badge key={index} className={badgeCSS}>
                    {item.icon}
                    <p>{item.text}</p>
                  </Badge>
                ))}
              </div>

              <div className="row_2 mb-3 flex flex-row-reverse gap-2 lg:-mr-30">
                {skillsData.map((item, index) => (
                  <Badge key={index} className={cn(badgeCSS)}>
                    {item.icon}
                    <p>{item.text}</p>
                  </Badge>
                ))}
              </div>

              <div className="row_3 -ml-6 flex gap-2">
                {skillsData.map((item, index) => (
                  <Badge key={index} className={badgeCSS}>
                    {item.icon}
                    <p>{item.text}</p>
                  </Badge>
                ))}
              </div>

              <div className="pointer-events-none">
                <div className="absolute inset-y-0 left-0 w-90 bg-gradient-to-r from-[#fafafc] from-15% to-transparent @max-[500px]:w-40" />
                <div className="absolute inset-y-0 right-0 w-90 bg-gradient-to-l from-[#fafafc] from-15% to-transparent @max-[500px]:w-40" />
              </div>
            </div>

            <div className="_base px-6 pb-6">
              <h4 className="font-FigtreeR mb-2">Growing digital skills</h4>
              <p className="text-muted-foreground max-w-[450px] text-[0.9rem]">
                Equipped with a diverse set of{" "}
                <span className="text-n-accent font-bold">digital skills,</span>{" "}
                enabling the rapid design and development of modern digital
                products.
              </p>
            </div>
          </div>

          {/* location */}
          <div
            className={cn(
              "_location-card @container md:col-span-3",
              gridItemsSize,
            )}
          >
            <div className="p-6">
              <h4 className="font-FigtreeR mb-1.5">Building beautiful UIs</h4>
              <p className="text-muted-foreground max-w-2xl text-[0.9rem]">
                Based in{" "}
                <span className="text-n-accent font-bold">
                  Accra, Ghana (GH)
                </span>
                , where every day brings new opportunities to solve meaningful
                design and development challenges.
              </p>
            </div>

            <div className="_map grid grid-cols-[0.4fr_0.6fr]">
              <div className="_pictures relative mt-6 place-items-center">
                <div className="_stars absolute">
                  <Image
                    src="/_nard/svgs/stars.svg"
                    width={127}
                    height={117}
                    alt="stars svg"
                    className="w-80"
                  />
                  <Image
                    src="/_nard/svgs/stars.svg"
                    width={127}
                    height={117}
                    alt="stars svg"
                    className="-mt-125 ml-50 w-80"
                  />
                </div>

                <ImageCard
                  imgSrc="url('/_nard/_imgs/ghana-1.webp')"
                  className="-ml-8 -rotate-10"
                />
                <ImageCard
                  imgSrc="url('/_nard/_imgs/ghana-2.webp')"
                  className="mt-15 ml-28 rotate-20"
                />
              </div>
              <GhanaGlobe />
            </div>
          </div>

          {/* design */}
          <div
            className={cn(
              "_design-card flex flex-col md:col-span-3",
              gridItemsSize,
            )}
          >
            <div className="p-6">
              <h4 className="font-FigtreeR mb-1.5">Unique Designs</h4>
              <p className="text-muted-foreground text-[0.9rem]">
                From <span className="text-n-accent font-bold">2D</span>{" "}
                graphics to <span className="text-n-accent font-bold">3D</span>{" "}
                visuals, every design is carefully crafted to bring ideas to
                life and elevate every project.
              </p>
            </div>

            <div className="_img grow">
              <Image
                priority
                src={figmaUI.src}
                width={figmaUI.width}
                height={figmaUI.height}
                alt="Figma UI"
                className="w-full"
              />
            </div>
          </div>

          {/* coming-soon */}
          <div
            className={cn(
              "_coming-soon-card flex flex-col md:col-span-2",
              gridItemsSize,
            )}
          >
            <div className="@container flex h-[65%]">
              <Image
                src={comingSoon.src}
                alt="Coming soon Ui"
                width={comingSoon.width}
                height={comingSoon.height}
                className="h-full min-h-[250px] w-full justify-center"
              />
            </div>

            <div className="h-[45%] grow p-6">
              <h4 className="font-FigtreeR mb-1.5">Coming soon</h4>
              <p className="text-muted-foreground text-[0.9rem]">
                <span className="text-n-accent font-bold">nard.studios </span>is
                expanding beyond design into video editing, mobile applications,
                and desktop software development.
              </p>
            </div>
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function Article() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="mb-6 px-[calc(var(--gutter-x)-22px)] py-5"
      >
        <section>
          <div className="mt-3 space-y-5">
            <h2 className="font-FigtreeR mb-4 font-bold">What I do.</h2>

            <p>
              I work primarily in front-end development, transforming concepts
              and designs into dynamic, accessible, and performant web
              experiences.{" "}
              {/* (I am actively developing my backend skills as well so
              I should be growing into a full-stack role very soon).  */}
              A summary of what I do:
            </p>

            <ul className="ml-10 list-disc space-y-3">
              <li>
                <b>Website Design and Development:</b> Building interactive UIs
                and web applications using React, Next.js, and modern front-end
                tooling.
              </li>
              <li>
                <b>Graphic Design:</b> this is another sub-service I offer,
                where I make designs for print or digital use (flyers,
                thumbnails, posters, logos .etc). I offer this as a standalone
                service but it is included in the web{" "}
                {/* <Link
                  href="/process/#pricing"
                  className="text-n-accent underline"
                > */}
                development package {/* </Link>{" "} */}
                for free. See the{" "}
                <Link
                  href="/gallery/#design-tab"
                  className="text-n-accent underline"
                >
                  gallery
                </Link>{" "}
                for design samples.
              </li>
            </ul>
          </div>
        </section>
      </Section.Container>

      <Section.Container
        container="none"
        className="pb-15 md:px-[calc(var(--gutter-x)-22px)]"
      >
        <div className="_img mx-auto max-w-[970px]">
          <Image
            priority
            alt="nard.profile image"
            width={2400}
            height={1260}
            src="/_nard/_thumbnails/nard-profile-banner-inverted.webp"
            className="md:rounded-md"
          />
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function Contact() {
  return (
    <Section.RootElement id="contact">
      <Section.Container
        container="8xl"
        className="_contact-section bg-white px-[calc(var(--gutter-x)-22px)] py-12"
      >
        <div className="_contact-form">
          <div className="_contact+mail mx-auto md:w-[80%] md:min-w-[500px]">
            <div className="_contact-form border-border/70 my-8 mb-5 rounded-xl border bg-neutral-50/[55%] p-5 pl-8 shadow-lg shadow-black/2">
              <div className="_header mb-10">
                <h2 className="font-FigtreeR font-[700]">Get In touch</h2>
                <p className="text-muted-foreground mt-2 mb-4 text-balance">
                  Have any questions, or want to collaborate on a project
                  together? I&apos;d love to hear from you.
                </p>
                <p className="text-muted-foreground mt-3 mb-3 max-w-2xl text-[0.9rem] text-balance">
                  You can send a message by filling out the form here or send an
                  email directly by clicking on the &quot;direct email&quot;
                  link beneath the form.
                </p>
              </div>

              <ContactForm />
            </div>

            <div className="_mail flex justify-end">
              <p className="text-muted-foreground ml-auto">
                Send a{" "}
                <Link
                  href={`mailto:${NARD_EMAIL}?subject=Project%20Inquiry&body=Hi%20there`}
                  className="text-n-accent underline"
                >
                  direct email
                </Link>{" "}
                instead.
              </p>
            </div>
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function Resume() {
  return (
    <Section.RootElement id="resume" className="">
      <Section.Container
        container="8xl"
        className="p-5 px-[calc(var(--gutter-x)-22px)]"
      >
        <div className="_work+resume my-15 mb-6 rounded-xl border bg-white p-10">
          <h3 className="font-FigtreeR mb-3 text-center font-[700]">
            Work & Resume
          </h3>

          <div className="text-muted-foreground mx-auto mb-6 max-w-xl text-center">
            I am currently available for freelance projects or any work
            opportunities (remote, hybrid or full-time).
            <div className="relative -top-1 -mt-18 ml-3 inline-block">
              <div className="relative flex max-w-max scale-[0.8] items-center justify-center">
                <span className="absolute size-[10px] shrink-0 animate-ping rounded-full bg-blue-300" />
                <span className="absolute inline-block size-[7px] shrink-0 rounded-full bg-blue-400" />{" "}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/api/cv" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full px-4.5!">
                Resume <Download />{" "}
              </Button>
            </Link>
            <Link href="/gallery" className="ml-3">
              <Button variant="outline" className="rounded-full">
                See projects <ArrowUpRight />{" "}
              </Button>
            </Link>
          </div>
          <small className="text-muted-foreground mt-2 flex justify-center">
            <div className="flex items-center gap-1">
              <AlarmClockIcon size={12} />{" "}
              <span className="mt-1">Response time: &lt; 24hrs</span>
            </div>
          </small>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

export default function AboutPage() {
  return (
    <main className="_about-page -mt-25 min-h-screen bg-[#fcfcfc] pt-25">
      <HashScrollHandler />
      <About />
      <Article />
      <Contact />
      <Resume />
    </main>
  );
}
