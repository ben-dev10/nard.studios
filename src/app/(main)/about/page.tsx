"use client";
import Section from "@/components/ui/elements/section";
import Link from "next/link";

function Article() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="px-[var(--gutter-x)] pt-25 pb-10"
      >
        <section className="">
          <h1 className="mb-5">
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

        <section>
          <h2 className="mt-8">What I Do</h2>
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

        <section className="my-8 rounded-[13px] border-t-[4px] !bg-neutral-100 p-5">
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
        className="mb-25 p-10 px-[var(--gutter-x)] py-15"
      >
        <div className="_area-1">
          <div className="avatar size-10 rounded-full" />
        </div>

        <div className="_area-2">
          <p className="">
            <b>A little bit of history</b>
            <span className="mt-2 block">
              I was first introduced to programming in my pre-high school days,
              but during the 2020 pandemic, there was suddenly more time to do
              anything, being the introvert that I am...
            </span>
          </p>
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
