"use client";
import Section from "@/components/ui/elements/section";
import Link from "next/link";
import Image from "next/image";
import {
  AlarmClockIcon,
  ArrowUpRight,
  Download,
  MessagesSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function Article() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="px-[var(--gutter-x)] pt-25 pb-5"
      >
        <section className="">
          <h1 className="font-FigtreeR mb-5">
            Engineer, Design,
            <br />
            Build.
          </h1>
          <p className="mb-2">
            Those are the 3 words I live by — when I see a &apos;design&apos; or
            an interface that inspires me, I first study it meticulously, like
            an <b>engineer</b> would, reverse-engineer it, and when the inner
            workings are fully understood, I try to re-
            <b>design</b> and <b>build</b> it in my own simple way.{" "}
          </p>
        </section>
      </Section.Container>

      <Section.Container
        container="none"
        className="md:px-[var(--gutter-x)] md:py-10"
      >
        <div className="_img mx-auto max-w-[1200px]">
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

      <Section.Container
        container="8xl"
        className="mb-10 px-[var(--gutter-x)] py-5"
      >
        <section>
          <h2 className="font-FigtreeR mt-8 font-[700]">What I Do</h2>
          <div className="mt-3 space-y-5">
            <p>
              I work primarily in front-end development — transforming concepts
              and designs into dynamic, accessible, and performant web
              experiences (I can also take on full-stack projects too but
              frontend is my stronghold).
            </p>

            <p>Some of the areas I focus on include:</p>

            <ul className="space-y-3 pl-4">
              <li>
                <b>Web App Development:</b> Building interactive UIs using
                React, Next.js, and modern front-end tooling.
              </li>
              <li>
                <b>Design Implementation:</b> Translating design systems and
                prototypes into pixel-perfect, maintainable code.
              </li>
              <li>
                <b>Responsive Design:</b> Ensuring every experience feels
                consistent and natural across devices.
              </li>
            </ul>
          </div>
        </section>

        <section className="my-8 rounded-[13px] border-t-[4px] !bg-neutral-100 p-5 pl-8">
          <div className="mb-5">
            <MessagesSquare size={18} stroke="black" />
          </div>
          <p className="mb-3">
            <b>
              Do you have any questions, or want to collaborate on a project
              together?
            </b>{" "}
            What are you waiting for? You can reach me via email by clicking on
            the email button above.
          </p>
          <hr className="mt-8 border-dashed" />
          <p className="mt-8">
            If you are just passing by too, stop by the{" "}
            <Link href="/resources" className="underline">
              resources page
            </Link>{" "}
            for a curated list of tips, tricks and resources I&apos;ve collected
            over the years, that i&apos;m certain you&apos;d find helpful.
          </p>
        </section>

        <p className="">
          If you want more work specific details, you can find those in the
          resume below.{" "}
        </p>
      </Section.Container>
    </Section.RootElement>
  );
}

function Resume() {
  return (
    <Section.RootElement className="border-t">
      <Section.Container
        container="8xl"
        className="mb-25 p-10 px-[var(--gutter-x)] py-15 pt-5"
      >
        <div className="_area-1">
          <div className="avatar size-10 rounded-full" />
        </div>

        <div className="_area-2 border-l-3 border-black/70 pl-5">
          <h3 className="font-FigtreeR mb-3 font-[700]">Work & Resume</h3>

          <div>
            <Button>
              Resume <Download />{" "}
            </Button>
            <Link href="/gallery" className="ml-2">
              <Button className="bg-neutral-500 hover:bg-neutral-600">
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
      <Article />
      <Resume />
    </main>
  );
}
