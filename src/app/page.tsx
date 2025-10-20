import Section from "@/components/ui/elements/section";
import Link from "next/link";

function SocialPill() {
  return <div>SocialPill</div>;
}

function Hero() {
  return (
    <div>
      <h2 className="font-FunnelDisplay text-balance mb-5">
        I enjoy <span className="font-SeriouslyNostalgic">designing</span> &{" "}
        <span className="font-SeriouslyNostalgic">crafting</span> user
        interfaces.
      </h2>

      <p className="mb-2 text-muted-foreground">
        Welcome to my portfolio, my name is Bernard Quarshie, but you can call
        me Ben or nard.
      </p>
      <p className="text-muted-foreground">
        When the pandemic hit in 2020, there was suddenly more free time to do
        “anything”, that was when I discovered I loved UI and it let me down a
        long journey of self-discovery...& here we are a few years on. If you
        wish to know more about me, continue here.
      </p>

      <div className="">
        <Link href="/clones/" className="text-blue-500 underline mt-5 block">
          Clones/
        </Link>
        <Link href="/clones/payload" className="text-blue-500 underline block">
          Clones/Payload
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Section.RootElement className="transition-colors duration-300">
      <Section.Container className="p-10 pt-45">
        <Hero />
      </Section.Container>
    </Section.RootElement>
  );
}
