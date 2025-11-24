import Image from "next/image";
import ClonesModal from "@/components/_ui/clones-modal";
import PopoverUI from "@/components/_ui/popover-ui";
import { Button } from "@/components/ui/button";
import Background from "@/components/ui/elements/background";
import Section from "@/components/ui/elements/section";
import { Check, Copy, LockIcon, MessageCircle } from "lucide-react";

import nardChromeLogo from "./assets/svgs/nard-logo-chrome.svg";
import gradientSlash from "./assets/gradient-paint-slash.webp";
import whiteSlash from "./assets/white-paint-slash.webp";
import { PricingTables } from "./clients/pricing-tables";

const MiniModal = () => {
  return (
    <ClonesModal
      source="clerk.com"
      sourceURL="https://clerk.com/pricing/"
      bgURL="bg-[url(/_nard/imgs/clerk-banner.webp)]"
      desc="clerk's pricing page, find out more by clicking this link"
    />
  );
};

const Hero = () => {
  return (
    <section className="_heading relative p-10 pt-50">
      <div className="_bg-design nard-hero-chrome pointer-events-none absolute top-0 z-1 flex w-full justify-center overflow-hidden pt-10 select-none">
        <Image
          src={nardChromeLogo}
          alt="nard-chrome-logo"
          className="-ml-20 size-100 mask-b-from-20 mask-b-to-60 max-md:size-90"
        />
      </div>

      <div className="_contents relative z-2">
        <h1 className="mb-5 text-center font-[600] text-balance">
          Pricing that scales with you
        </h1>
        <p className="mb-4 text-center">
          10,000 monthly active users free. Surprisingly simple, exceptionally
          powerful. Every feature you need now and as you scale.
        </p>
        <button
          type="button"
          className="relative mx-auto mt-6 block rounded-full bg-white/5 bg-gradient-to-r from-white/5 to-transparent py-1 pr-2.5 pl-3 text-sm/5 text-gray-300 before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white/5"
        >
          Starting July 1, we will start collecting tax in select countries.{" "}
          <span className="inline-flex items-center gap-1.5 font-medium text-white">
            See pricing
            <svg
              viewBox="0 0 10 10"
              className="size-2.5 fill-none stroke-gray-400"
              aria-hidden="true"
            >
              <path
                d="M3.75 2.75L6.25 5L3.75 7.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <Section.Container container="none" className="mb-50 border-y">
      <section className="mx-auto max-w-7xl px-10">
        <div className="relative border-x lg:grid lg:grid-cols-2">
          <hr className="absolute top-1/2 left-0 w-full lg:hidden" />
          <div className="mx-auto grid max-w-2xl justify-center p-10 py-25">
            <div className="">
              <p className="mb-4 opacity-50">Enterprise</p>
              <h4 className="text-balance">
                Need more support and compliance features or pricing
                doesn&apos;t work for your business?
              </h4>
              <Button
                variant={"link"}
                className="group relative isolate mt-8 inline-flex items-center justify-center overflow-hidden rounded-[8px] bg-gray-700 !p-5 !px-5 py-[0.1875rem] text-sm font-medium text-white shadow-md ring-gray-700 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[8px] before:bg-gradient-to-b before:from-white/20 before:opacity-50 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-[8px] after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay hover:no-underline hover:before:opacity-100"
              >
                <a href="#" className="">
                  Contact sales
                </a>
              </Button>
              <ul className="mt-12 space-y-4">
                <li className="flex items-center gap-1">
                  <svg
                    fill="none"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="mt-0.5 mr-2 size-5 flex-none"
                  >
                    <path
                      className="stroke-white/80"
                      d="M14.25 8A6.25 6.25 0 0 0 8 1.75M13.414 11.125l-.433-.25M11.125 13.413l-.25-.433M8 13.75v.5M5.125 12.98l-.25.432M3.02 10.876l-.433.25M2.25 8h-.5M3.02 5.125l-.433-.25M5.125 3.02l-.25-.433"
                    ></path>
                  </svg>{" "}
                  <p>99.99% Uptime SLA</p>
                </li>
                <li className="flex items-center gap-2.5">
                  <MessageCircle size={16} className="text-white/70" />{" "}
                  <p>Support SLA</p>
                </li>
                <li className="flex items-center gap-2.5">
                  <LockIcon size={16} className="text-white/70" />{" "}
                  <span className="flex items-center">
                    HIPAA/BAA compliance
                  </span>
                  <span className="-mb-1 -ml-1">
                    <PopoverUI
                      className="border-black bg-black text-white"
                      content="Training sessions, architecture review, and migrations support provided by a dedicated Solutions engineer"
                    />
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Copy size={16} className="text-white/70" />{" "}
                  <span className="flex items-center">
                    Onboarding & migration support
                  </span>
                  <span className="-mb-1 -ml-1">
                    <PopoverUI
                      className="border-black bg-black text-white"
                      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, voluptatem?"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto grid max-w-2xl justify-center p-10 py-25 lg:border-l">
            <div className="">
              <p className="mb-4 opacity-50">Startups</p>
              <h4 className="text-balance">
                Pre-negotiated startup discounts are available through are
                partners
              </h4>
              <Button
                variant={"link"}
                className="group relative isolate mt-8 inline-flex items-center justify-center overflow-hidden rounded-[8px] bg-gray-700 !p-5 !px-5 py-[0.1875rem] text-sm font-medium text-white shadow-md ring-gray-700 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[8px] before:bg-gradient-to-b before:from-white/20 before:opacity-50 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-[8px] after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay hover:no-underline hover:before:opacity-100"
              >
                <a href="#" className="">
                  Apply now
                </a>
              </Button>
              <div className="mt-12">
                {[
                  "Partners include Stripe Atlas, Y Combinator, OnDeck, Pioneer, and many more",
                  "Eligible up to 1 year after launch",
                  "Eligible up to $5 million in venture funding",
                ].map((text, index) => (
                  <p key={index} className="mb-3 flex gap-1.5">
                    <Check size={14} className="shrink-0" />
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section.Container>
  );
};

// main-component
export default function ClerkPricingPage() {
  return (
    <>
      <>
        <Background className="">
          <Background.Layer className="_app-bg fixed inset-0 -z-1 bg-[var(--app-bg)] [--app-bg:#131316]" />
        </Background>
      </>
      <Section.RootElement
        as="main"
        className="_app.clerk font-Geist overflow-hidden bg-[var(--app-bg)] text-white [--app-bg:#131316] [--border:#2a2b2e]"
      >
        <Section.Container container="7xl" className="">
          <>
            <MiniModal />
            <Background className="">
              <Background.Layer
                opacity={0.9}
                className="_gradient-slash absolute inset-x-0 top-0 !z-10 mt-[calc(-571/16*1rem)] -ml-70 overflow-hidden pl-[50%] mix-blend-overlay"
              >
                <Image
                  alt="gradient-slash"
                  fetchPriority="high"
                  decoding="async"
                  className="ml-[calc(-544/16*1rem)] w-[calc(1458/16*1rem)] max-w-none"
                  src={gradientSlash}
                  style={{ color: "transparent" }}
                />
              </Background.Layer>
              <Background.Layer
                opacity={0.3}
                className="_white-slash absolute inset-x-0 top-[20vh] z-10 overflow-hidden pl-[50%] mix-blend-overlay select-none"
              >
                <Image
                  alt="white-slash"
                  className="ml-[calc((-642-608)/16*1rem)] w-[calc(2220/16*1rem)] max-w-none"
                  src={whiteSlash}
                  style={{ color: "transparent" }}
                />
              </Background.Layer>
            </Background>
          </>

          <Hero />
          <PricingTables />
        </Section.Container>

        <FeaturesSection />
      </Section.RootElement>
    </>
  );
}
