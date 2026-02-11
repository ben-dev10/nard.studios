import Section from "@/components/ui/elements/section";
import Link from "next/link";
import Image from "next/image";
import {
  AlarmClockIcon,
  ArrowUpRight,
  Briefcase,
  Download,
  MapPin,
  MessagesSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/app/_components/contact-form";
import { NARD_EMAIL } from "@/app/_assets/constants";
import { HashScrollHandler } from "@/components/hash-scroll-handler";
import { Badge } from "@/components/ui/badge";

function About() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="px-[calc(var(--gutter-x)-22px)] pt-25 pb-15"
      >
        <div className="mb-12">
          <h1 className="font-FigtreeR mb-5">A developer (and designer?)</h1>
          <h6 className="text-muted-foreground mb-2">
            I am a passionate and dedicated programmer based in the heart of
            Accra, Ghana. I share a passion for design also and lately I have
            come to the realization that <b>design</b> is more than what users
            see. But a medium through which we get to evoke emotions and convey
            intent, with the ultimate aim of guiding a user to a specific goal.
          </h6>
        </div>

        <div className="flex gap-6 rounded-lg border bg-white p-3">
          <div className="w-[6px] rounded-full bg-black" />
          <div className="flex h-full max-w-max flex-wrap items-center gap-10 p-2 py-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="profile-photo.webp"
              className="size-15 rounded-full"
              alt="my profile photo"
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <MapPin size={13} className="text-n-accent -mt-1" />{" "}
                <span className="text-muted-foreground">Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase size={13} className="text-n-accent -mt-1" />{" "}
                <span className="text-muted-foreground">
                  3+ years experience
                </span>
              </div>
            </div>
            <div className="_skills">
              <p className="text-muted-foreground mb-2 text-[0.8rem] uppercase">
                Skills
              </p>
              <div className="flex max-w-xs flex-wrap gap-2">
                <Badge className="rounded-full">React</Badge>
                <Badge className="rounded-full">Typescript</Badge>
                <Badge className="rounded-full">Next.js</Badge>
                <Badge className="rounded-full">Supabase</Badge>
                <Badge className="rounded-full">Firebase</Badge>
                <Badge className="rounded-full">MongoDB</Badge>
                <Badge className="rounded-full">Docker/Git</Badge>
              </div>
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
    <main className="_about-page min-h-screen">
      <HashScrollHandler />
      <About />
      <Article />
      <Contact />
      <Resume />
    </main>
  );
}
