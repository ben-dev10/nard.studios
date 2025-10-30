import Section from "@/components/ui/elements/section";
import Navbar from "../_components/navbar";
import PageNotReady from "../_components/page-not-ready";

function Code() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="px-[var(--gutter-x)] pt-25 pb-10"
      >
        <div className=""></div>
      </Section.Container>
    </Section.RootElement>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="p-10 pt-20 transition-colors duration-300">
        <>
          <h3 className="mb-5">Welcome to my gallery</h3>
          <p>
            Here you will find a collection of code-design projects and
            experiments and links to clones & graphics I&apos;ve made recently
            or in the past.{" "}
          </p>
        </>
        <Code />

        <PageNotReady />
      </main>
    </>
  );
}
