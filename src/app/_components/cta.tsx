import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/elements/section";
import Background from "@/components/ui/elements/background";
import { NardLogoSmall } from "@/components/_ui/icons";
import Image from "next/image";

const conicGradient =
  "bg-[conic-gradient(from_180deg_at_50%_50%,_#4BCF9F_-10.27deg,_#FF7575_140.22deg,_#55AAFF_318.01deg,_#76FF98_329.66deg,_#4BCF9F_348.73deg,_#FF7575_369.22deg))]";

export default function CTA() {
  // _FEATURE: gradient-blur elevation
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="550:px-[var(--gutter-x)] max-550:pb-0 relative z-3 py-15"
      >
        <div className="_contents+blur relative">
          <Background.Layer
            className={`_bg-blur absolute -bottom-5 w-full ${conicGradient} opacity-25 blur-md`}
          />

          <div className="550:rounded-xl relative z-2 overflow-hidden bg-black p-10 py-20 text-white shadow-xl">
            <Background className="flex justify-center">
              <Image
                alt="nard-chrome"
                src="/_nard/svgs/nard-chrome-v2.svg"
                width={215}
                height={208}
                className="absolute z-2 mt-8 w-[230px] opacity-90 md:w-[300px]"
              />
            </Background>

            <div className="_contents relative z-2">
              <div className="mb-4 flex justify-center">
                <NardLogoSmall nFill="#E0E0E0" className="size-8" />
              </div>
              <h2 className="font-FigtreeR mb-2 text-center">
                Let&apos;s connect
              </h2>
              <p className="mx-auto max-w-[500px] text-center text-[0.95rem] opacity-80">
                I&apos;m always excited to connect with new people. Feel free to
                reach out for work related matters or simply to chat, share
                ideas or provide feedback!
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Link href="/about/#contact">
                  <Button className="bevel-[0.15] bg-white text-black hover:bg-white/95">
                    Get in touch
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button className="bevel-[0.15] bg-neutral-700 px-5 hover:bg-neutral-600">
                    Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}
