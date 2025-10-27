import Section from "@/components/ui/elements/section";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";
import { APP_BG } from "../page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Article() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="px-[var(--gutter-x)] pt-25 pb-10"
      >
        <div className="">
          <h1 className="mb-5">
            The Journey, <br /> Thus far.
          </h1>
          <p>
            During the 2020 pandemic, there was suddenly more time to do
            anything, that was when I stumbled into programming and I&apos;ve
            never looked backed since.
          </p>
          <p className="mt-5">
            I did however graduate a Mechanical Engineering program in KNUST,
          </p>

          <div className="my-8 rounded-md bg-white p-5">
            <p className="mb-3">
              So if you have any questions or want to collaborate on a project
              together, what are you waiting for? You can reach me via email or
              WhatsApp, whichever mode you prefer:
            </p>
            <div className="flex gap-2">
              <Button variant="ctaBtn">Email</Button>
              <Button variant="ctaBtn">WhatsApp</Button>
            </div>
            <p className="mt-8">
              If you are just passing by too, stop by the{" "}
              <Link href="/resources" className="underline">
                resources page
              </Link>{" "}
              for a curated list of tips, tricks and resources I&apos;ve
              collected over the years, that i&apos;m certain you&apos;d find
              helpful.
            </p>
          </div>

          <p className="">
            If you want more work specific details, you can find those in the
            resume{" "}
          </p>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function Resume() {
  return (
    <Section.RootElement className="border-t">
      <Section.Container
        container="8xl"
        className="p-10 px-[var(--gutter-x)] py-15"
      >
        <div className="_area-1 h-[200px]">
          <div className="avatar size-20 rounded-full" />
        </div>
        <div className="_area-2"></div>
      </Section.Container>
    </Section.RootElement>
  );
}

export default function AboutPage() {
  return (
    <div className="_app.root" style={{ backgroundColor: APP_BG }}>
      <Navbar />
      <main className="min-h-screen">
        <Article />
        <Resume />

        {/* <br className="mt-120" /> */}
        <Footer />
      </main>
    </div>
  );
}
