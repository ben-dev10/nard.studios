import PageNotReady from "@/app/_components/page-not-ready";
import Section from "@/components/ui/elements/section";

function Section1() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="px-[var(--gutter-x)] pt-25 pb-10"
      >
        <div className="">
          <h3 className="mb-5"> Resources page</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            mollitia.
          </p>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

export default function ProcessPage() {
  return (
    <main className="_resources-page min-h-screen">
      <Section1 />
      <PageNotReady />
    </main>
  );
}
