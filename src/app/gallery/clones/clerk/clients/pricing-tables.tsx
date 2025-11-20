"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PopoverUI from "@/components/_ui/popover-ui";
import { Check } from "lucide-react";
import Image from "next/image";

import nardLogoMuted from "../assets/svgs/nard-logo-muted.svg";

interface Addon {
  id: string;
  price: number;
}

export const PricingTables = () => {
  const basePrice = 25;
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());

  const addons: Addon[] = [
    { id: "auth", price: 100 },
    { id: "admin", price: 100 },
    { id: "b2b-saas", price: 100 },
  ];

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(addonId)) {
        next.delete(addonId);
      } else {
        next.add(addonId);
      }
      return next;
    });
  };

  const calculateTotal = (): number => {
    const addonsTotal = addons
      .filter((addon) => selectedAddons.has(addon.id))
      .reduce((sum, addon) => sum + addon.price, 0);
    return basePrice + addonsTotal;
  };

  return (
    <>
      <section className="_free+pro--pricing-table mb-16 grid grid-cols-2 gap-8 p-10 xl:grid-cols-3">
        <div className="_free--pricing-table col-span-2 border border-b-0 border-x-white/10 border-t-gray-700 p-6 pt-8 xl:col-auto">
          <div className="">
            <p className="mb-3 text-[1.1rem]">Free plan</p>
            <p className="mb-8 opacity-60">
              Everything you need to get started
            </p>
          </div>
          <div className="price mt-5 flex gap-2">
            <p className="opacity-80">US</p>
            <p className="font-GeistMono text-5xl font-[600]">$0</p>
            <p className="self-center text-white/50">per month</p>
          </div>
          <Button
            variant={"link"}
            className="group relative isolate mt-8 inline-flex items-center justify-center overflow-hidden rounded-[8px] bg-gray-700 !p-5 !px-5 py-[0.1875rem] text-sm font-medium text-white shadow-md ring-gray-700 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[8px] before:bg-gradient-to-b before:from-white/20 before:opacity-50 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-[8px] after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay hover:no-underline hover:before:opacity-100"
          >
            <a href="#" className="">
              Get started for free
            </a>
          </Button>
          <p className="mt-8 mb-4">Start building</p>
          {[
            "No credit card required",
            <span key={22} className="flex items-center gap-1">
              10,000 monthly active users
              <span className="-mb-1">
                <PopoverUI
                  className="border-black bg-black text-white"
                  content={
                    <span className="">
                      A user is considered{" "}
                      <span className="text-sky-400">active </span> when they
                      return to your app 24+ hours after signing up.
                    </span>
                  }
                />
              </span>
            </span>,
            "Pre-built components",
            "Custom domain",
          ].map((text, index) => (
            <p key={index} className="mb-2 flex gap-1 text-[0.9rem]">
              <Check size={14} />
              {text}
            </p>
          ))}
        </div>

        <div className="_pro--pricing-table relative col-span-2 grid gap-x-8 border-t border-sky-300 md:grid-cols-2">
          <p className="absolute bottom-[100%] w-full bg-gradient-to-br from-sky-400 from-20% via-sky-200 via-40% to-sky-600 bg-clip-text p-2 text-center text-[0.8rem] text-transparent">
            All features free to use in development mode
          </p>
          <>
            <svg
              aria-hidden="true"
              className="absolute inset-y-0 left-0 h-full !w-px border-l-[0.1px] border-dashed border-sky-300/70 [mask-image:linear-gradient(white,transparent)]"
            >
              <rect width="100%" height="100%" fill="url(#pattern)"></rect>
            </svg>
            <svg
              aria-hidden="true"
              className="absolute inset-y-0 right-0 h-full !w-px border-l-[0.1px] border-dashed border-sky-300/70 [mask-image:linear-gradient(white,transparent)]"
            >
              <rect width="100%" height="100%" fill="url(#pattern)"></rect>
            </svg>
          </>
          <div className="left-side border-sky-300/15 p-6 pt-8">
            <div className="">
              <p className="mb-3 text-[1.1rem] text-sky-300">Pro plan</p>
              <p className="mb-8 opacity-60">
                Powerful extra features for your growing business.
              </p>
            </div>
            <div className="price mt-5 flex gap-2">
              <p className="opacity-80">US</p>
              <p className="font-GeistMono text-5xl font-[600]">
                {/* basePrice: $25 */}${calculateTotal()}
              </p>
              <p className="self-center text-white/50">per month</p>
            </div>
            <Button
              variant={"link"}
              className="group relative isolate mt-8 inline-flex items-center justify-center overflow-hidden rounded-[8px] bg-sky-400 px-3 py-[0.1875rem] text-sm font-medium text-sky-950 shadow-md ring-sky-400 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[8px] before:bg-gradient-to-b before:from-white/20 before:opacity-50 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay hover:no-underline hover:before:opacity-100"
            >
              <a href="#" className="">
                Get started for free
              </a>
            </Button>
            <p className="mt-8 mb-4">Scale your app</p>
            {[
              "$0.2 per MAU after 10,000",
              "10,000 monthly active users",
              "Remove Clerk branding",
              "Allowlist / Blocklist",
              "Customizable session duration",
              "...and much more",
            ].map((text, index) => (
              <p key={index} className="mb-2 flex gap-1 text-[0.9rem]">
                <Check size={14} className="text-sky-300" />
                {text}
              </p>
            ))}
          </div>
          <div className="right-side relative">
            <div className="hidden md:block">
              <svg
                aria-hidden="true"
                className="absolute inset-y-0 left-0 h-full !w-px border-l-[0.1px] border-dashed border-sky-300/25 [mask-image:linear-gradient(white,transparent)]"
              >
                <rect width="100%" height="100%" fill="url(#pattern)"></rect>
              </svg>
              <svg
                aria-hidden="true"
                className="absolute inset-y-0 left-[-32px] h-full !w-px border-l-[0.1px] border-dashed border-sky-300/25 [mask-image:linear-gradient(white,transparent)]"
              >
                <rect width="100%" height="100%" fill="url(#pattern)"></rect>
              </svg>
            </div>
            {/* -- */}
            <div className="border-t pt-5">
              <div className="mb-3 flex items-center justify-between gap-x-2 border-l border-sky-300 py-2 pr-3 pl-6">
                <label
                  htmlFor="check-1"
                  className="flex cursor-pointer items-center text-[0.9rem]"
                >
                  <Checkbox
                    id="check-1"
                    checked={selectedAddons.has("auth")}
                    onCheckedChange={() => toggleAddon("auth")}
                    className="mr-2 border-white/50 [--primary:#74d4ff]"
                  />
                  <span>Enhanced authentication add-on</span>
                </label>
                <p className="rounded-[4px] border border-dashed p-1 px-2 text-[0.8rem]">
                  {" "}
                  $100/mo
                </p>
              </div>
              <div className="p-6 pt-2">
                {[
                  "Multi-factor auth (SMS, TOTP, backup codes)",
                  "Device tracking and revocation",
                  "Simultaneous sessions",
                  "SAML authentication",
                ].map((text, index) => (
                  <p key={index} className="mb-2 flex gap-1 text-[0.9rem]">
                    <Check size={14} className="text-sky-300" />
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <div className="border-t pt-5">
              <div className="mb-3 flex items-center justify-between gap-x-2 border-l border-sky-300 py-2 pr-3 pl-6">
                <label
                  htmlFor="check-2"
                  className="flex cursor-pointer items-center text-[0.9rem]"
                >
                  <Checkbox
                    id="check-2"
                    checked={selectedAddons.has("admin")}
                    onCheckedChange={() => toggleAddon("admin")}
                    className="mr-2 border-white/50 [--primary:#74d4ff]"
                  />
                  <span>Enhanced administration add-on</span>
                </label>
                <span className="ml-3 rounded-[4px] border border-dashed p-1 px-2 text-[0.8rem]">
                  $100/mo
                </span>
              </div>
              <div className="p-6 pt-2">
                {[
                  "User impersonation",
                  "Enhanced rules",
                  <span key={99} className="block">
                    Audit logs{" "}
                    <span className="text-2xs/[1.125rem] mt-[calc(1/16*1rem)] inline-flex rounded-md bg-neutral-800 px-1.5 align-top text-[0.7rem] font-medium text-gray-400">
                      Coming soon
                    </span>{" "}
                  </span>,
                ].map((text, index) => (
                  <p key={index} className="mb-2 flex gap-1 text-[0.9rem]">
                    <Check size={14} className="text-sky-300" />
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="_b2b--pricing-table p-10">
        <div className="relative">
          <div className="absolute bottom-[100%] grid p-2 pb-8 text-base/6 text-gray-400 md:grid-cols-2">
            <p className="col-start-2 !text-[0.8rem] max-md:text-center max-md:text-balance">
              <strong className="font-medium text-white">First Day Free</strong>{" "}
              means no charges for users who sign-up but never return. Users are
              only counted as active when they come back after 24 hours.
            </p>
          </div>
          <div className="relative overflow-hidden border border-b-0 lg:grid lg:grid-cols-3">
            <>
              <Image
                alt="muted-nard-logo"
                className="pointer-events-none absolute -right-11 -bottom-60 z-1 w-[calc(846/16*1rem)] mask-b-from-20 mask-b-to-80 opacity-95 md:-bottom-120"
                src={nardLogoMuted}
                style={{ color: "transparent" }}
              />
              <svg
                aria-hidden="true"
                className="absolute inset-y-0 left-0 h-full !w-px border-l-[0.1px] border-dashed border-yellow-300/25 [mask-image:linear-gradient(white,transparent)]"
              >
                <rect width="100%" height="100%" fill="url(#pattern)"></rect>
              </svg>
            </>
            <div className="lg:col-span-2">
              <div className="mb-8 px-6 pt-6">
                <p className="mb-2 text-yellow-300">B2B Saas Suites</p>
                <h4 className="">The easy solution to multi-tenancy</h4>
              </div>
              <div className="grid gap-x-20 gap-y-8 px-6 pb-6 sm:grid-cols-2">
                <div>
                  <p className="mb-4">
                    B2B SaaS features in{" "}
                    <span className="ml-1 inline-flex rounded-[6px] bg-gray-700 bg-gradient-to-b from-white/20 from-[46%] to-[54%] p-[2px] px-[6px] text-[0.8rem] font-medium text-white bg-blend-overlay shadow-md">
                      Free plan
                    </span>
                  </p>
                  {[
                    "Purpose-built components and APIs for managing teams.",
                    "Free for 100 monthly active organizations",
                    "Up to 5 members per organization",
                    "Invitation flows and basic roles",
                  ].map((text, index) => (
                    <p key={index} className="mb-2 flex gap-1 text-[0.9rem]">
                      <Check size={14} />
                      {text}
                    </p>
                  ))}
                </div>
                <div className="">
                  <p className="mb-4 flex items-center gap-1">
                    B2B SaaS features in{" "}
                    <span className="ml-1 inline-flex rounded-[6px] bg-sky-400 bg-gradient-to-b from-white/20 from-[46%] to-[54%] p-[2px] px-1.5 text-[0.8rem] font-medium text-gray-950 bg-blend-overlay shadow-md">
                      Pro plan
                    </span>
                  </p>
                  {[
                    "$1 per MA0 after 100",
                    "Unlimited members per organization",
                  ].map((text, index) => (
                    <p key={index} className="mb-2 flex gap-1 text-[0.9rem]">
                      <Check size={14} />
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-1/2 border-t pt-5 lg:grid lg:border-t-0 lg:border-l">
              <div className="lg:mt-12 lg:self-center">
                <div className="mb-3 flex items-center gap-x-2 border-l border-yellow-300 py-2 pr-3 pl-6">
                  <label
                    htmlFor="check-3"
                    className="flex cursor-pointer items-center text-[0.9rem]"
                  >
                    <Checkbox
                      id="check-3"
                      checked={selectedAddons.has("b2b-saas")}
                      onCheckedChange={() => toggleAddon("b2b-saas")}
                      className="mr-2 border-white/50 [--primary:_#ffdf20]"
                    />
                    <span>Enhanced B2B SaaS add-on</span>
                  </label>
                  <span className="ml-auto rounded-[4px] border border-dashed p-1 px-2 text-[0.8rem]">
                    {" "}
                    $100/mo
                  </span>
                </div>
                <div className="p-6 pt-2">
                  {[
                    "Domain restrictions",
                    "Authentic invitations",
                    "Custom roles and permissions",
                  ].map((text, index) => (
                    <p key={index} className="mb-2 flex gap-1 text-[0.9rem]">
                      <Check size={14} className="text-yellow-300" />
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
