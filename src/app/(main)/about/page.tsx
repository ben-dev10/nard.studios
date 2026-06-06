import Section from "@/components/ui/elements/section";
import Link from "next/link";
import Image from "next/image";
import {
  AlarmClockIcon,
  ArrowUpRight,
  BadgeCentIcon,
  Download,
  MessagesSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/app/_components/contact-form";
import { NARD_EMAIL } from "@/app/_assets/constants";
import { HashScrollHandler } from "@/components/hash-scroll-handler";
import { Badge } from "@/components/ui/badge";
import GhanaGlobe from "@/components/globe";
import { cn } from "@/lib/utils";
import { NardLogoSmall } from "@/components/_ui/icons";

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
  const gridItemsSize = "border-border/50 h-95 rounded-lg border bg-[#fafafc]";
  const badgeCSS =
    "text-foreground flex items-center rounded-full hover:cursor-pointer hover:bg-black hover:text-white border border-black/10 bg-transparent nth-[2]:border-transparent nth-[2]:bg-[#27d4ee] nth-[2]:text-white";

  const skillsData = [
    {
      icon: <BadgeCentIcon className="shrink-0" />,
      text: "Nextjs",
    },
    {
      icon: <BadgeCentIcon className="shrink-0" />,
      text: "React",
    },
    {
      icon: <BadgeCentIcon className="shrink-0" />,
      text: "Typescript",
    },
    {
      icon: <BadgeCentIcon className="shrink-0" />,
      text: "Convex",
    },
    {
      icon: <BadgeCentIcon className="shrink-0" />,
      text: "Supabase",
    },
    {
      icon: <BadgeCentIcon className="shrink-0" />,
      text: "Clerk",
    },
    {
      icon: <BadgeCentIcon className="shrink-0" />,
      text: "MongoDB",
    },
    {
      icon: <BadgeCentIcon className="shrink-0" />,
      text: "C",
    },
    {
      icon: <BadgeCentIcon className="shrink-0" />,
      text: "Python",
    },
  ];

  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="px-[calc(var(--gutter-x)-22px)] pt-25 pb-15"
      >
        <div className="mb-12">
          <h1 className="font-FigtreeR mb-5">A developer and designer.</h1>
          <h6 className="text-muted-foreground mb-2">
            I am a passionate and dedicated programmer based in the heart of
            Accra, Ghana. I share a passion for design also and lately I have
            come to the realization that <b>design</b> is more than what users
            see. But a medium through which we get to evoke emotions and convey
            intent, with the ultimate aim of guiding a user to a specific goal.
          </h6>
        </div>

        <div className="_profile-bento mt-6 grid grid-cols-1 gap-4 md:grid-cols-5">
          <div
            className={cn(
              "_location-card overflow-hidden md:col-span-3",
              gridItemsSize,
            )}
          >
            <div className="p-6">
              <h3 className="font-FigtreeR mb-1.5">Building beautiful UIs</h3>
              <p className="text-muted-foreground">
                Based in the bustling city of{" "}
                <span className="text-n-accent font-bold">
                  Accra, Ghana (GH)
                </span>
                , where everyday presents a new exciting problem to solve.
              </p>
            </div>

            <div className="_map grid grid-cols-[0.4fr_0.6fr]">
              <div className="_pictures relative mt-6 place-items-center">
                <ImageCard
                  imgSrc="url('/_blog/_imgs/full-code-tools.webp')"
                  className="-ml-8 -rotate-10"
                />
                <ImageCard
                  imgSrc="url('/_blog/_imgs/full-code-tools.webp')"
                  className="mt-15 ml-28 rotate-20"
                />
              </div>
              <GhanaGlobe />
            </div>
          </div>

          <div
            className={cn(
              "_skills-card flex flex-col md:col-span-2",
              gridItemsSize,
            )}
          >
            <NardLogoSmall className="my-6 mb-8 ml-6" />

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
              <h3 className="font-FigtreeR mb-2">Growing digital skills</h3>
              <p className="text-muted-foreground max-w-[450px]">
                Armed with a mastery of a variety of{" "}
                <span className="text-n-accent font-bold">digital skills</span>{" "}
                crucial for developing projects at breakneck speeds
              </p>
            </div>
          </div>
          <div className={cn("md:col-span-2", gridItemsSize)}>3</div>
          <div className={cn("md:col-span-3", gridItemsSize)}>4</div>
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
              I work primarily in front-end development — transforming concepts
              and designs into dynamic, accessible, and performant web
              experiences (I am actively developing my backend skills as well so
              I should be growing into a full-stack role very soon). A summary
              of what I do are:
            </p>

            <ul className="ml-8 list-disc space-y-3">
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
                <Link
                  href="/process/#pricing"
                  className="text-n-accent underline"
                >
                  development package
                </Link>{" "}
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
            src="/_nard/_thumbnails/nard-profile-banner.webp"
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
        className="_contact-section bg-white px-[calc(var(--gutter-x)-22px)] py-15"
      >
        <div className="_contact-form+headers flex flex-col gap-x-15 md:flex-row">
          <div className="_headers md:w-[40%] md:pt-10">
            <h2 className="font-FigtreeR font-[700]">Get In touch</h2>
            <p className="text-muted-foreground mt-2 mb-3">
              Have any questions, or want to collaborate on a project together?
              I&apos;d love to hear from you.
            </p>
            <p className="text-muted-foreground mt-3 mb-3">
              You can send a message by filling out the form here or send an
              email directly by clicking on the &quot;direct email&quot; link
              beneath the form.
            </p>
          </div>

          <div className="_contact+mail md:w-[60%] md:min-w-[400px]">
            <div className="_contact-form my-8 mb-5 rounded-[13px] border-t-[4px] bg-neutral-100 p-5 pl-8 shadow-lg shadow-black/2">
              <div className="text-muted-foreground mb-8 flex items-center gap-2">
                <MessagesSquare size={14} stroke="black" />{" "}
                <h5 className="">Quick Message</h5>
              </div>
              <ContactForm />
            </div>

            <div className="_mail flex justify-end">
              <p className="text-muted-foreground ml-auto">
                Or send a{" "}
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
        className="mb-25 p-10 px-[calc(var(--gutter-x)-22px)] py-15 pt-20"
      >
        <div className="_work+resume">
          <h3 className="font-FigtreeR mb-3 font-[700]">Work & Resume</h3>

          <div>
            <Link href="/api/cv" target="_blank" rel="noopener noreferrer">
              <Button>
                Resume <Download />{" "}
              </Button>
            </Link>
            <Link href="/gallery" className="ml-3">
              <Button variant="outline" className="">
                See projects <ArrowUpRight />{" "}
              </Button>
            </Link>
          </div>

          <div className="flex gap-2 pt-10">
            <p>
              <b>Available for work</b>
            </p>
            <div className="relative flex max-w-max scale-[0.8] items-center justify-center">
              <span className="absolute size-[10px] shrink-0 animate-ping rounded-full bg-blue-300" />
              <span className="absolute inline-block size-[7px] shrink-0 rounded-full bg-blue-400" />{" "}
            </div>
          </div>

          <div className="mt-2 block">
            <p>
              I am currently available for freelance projects or any work
              opportunities (remote, hybrid or full-time). Looking forward to
              joining a team where I can contribute, learn and help build
              meaningful digital experiences.
            </p>

            <p className="text-muted-foreground mt-8 flex items-center gap-1 font-bold">
              <AlarmClockIcon size={15} /> Response time: &lt; 24hrs
            </p>
          </div>
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
