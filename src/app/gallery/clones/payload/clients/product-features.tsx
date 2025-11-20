"use client";
import { useState } from "react";
import { FeatureLinks } from "../assets/data";
import Section from "@/components/ui/elements/section";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PayloadLinkBtn } from "./payload-btn";
import Background from "@/components/ui/elements/background";

export const ProductFeatures = () => {
  const [hoveredItem, setHoveredItem] = useState(FeatureLinks[0].id);

  return (
    <Section.RootElement className="relative px-[var(--gutter-h)]">
      <Section.Container className="feature-list grid grid-cols-1 py-15 md:grid-cols-16 lg:py-20">
        <div className="__links--headers h-full pt-10 md:col-span-8">
          <h5 className="font-UntitledSansR">
            Use Payload to build anything. Or everything.
          </h5>

          <div className="_header-links my-5 mb-15 flex flex-col">
            {FeatureLinks.map((item) => (
              <button
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(FeatureLinks[0].id)}
                key={item.id}
                className="group max-w-max"
              >
                <a
                  href={item.url}
                  className="flex items-center justify-between"
                >
                  <span
                    className={`${
                      item.className
                    } transition-opacity duration-500 ${
                      hoveredItem === item.id ? "opacity-100" : "opacity-40"
                    } font-UntitledSansB my-2 mr-2 text-left text-3xl md:whitespace-pre-line`}
                  >
                    {item.id}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="opacity-0 duration-500 ease-in-out group-hover:opacity-30"
                  />
                </a>
              </button>
            ))}
          </div>

          <div className="payload-btn lg:grid lg:grid-cols-8">
            <PayloadLinkBtn
              variant="link"
              className="border-y lg:col-span-4"
              link="#"
              text="Schedule a demo"
            />
          </div>
        </div>

        <div className="_images relative z-4 flex h-125 items-center justify-center max-md:order-first md:col-span-8 md:h-full md:items-center md:justify-start">
          {hoveredItem &&
            FeatureLinks.map(
              (item) =>
                hoveredItem === item.id && (
                  <Image
                    width={item.img.width}
                    height={item.img.height}
                    src={item.img.src}
                    alt={item.img.alt}
                    key={item.id}
                    className="animate-fadeIn absolute sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px]"
                  />
                ),
            )}
        </div>

        <Background.Layer className="bg-scanline absolute inset-y-0 left-[calc(100vw-var(--gutter-h)-var(--column)*8)] hidden w-[calc(var(--gutter-h)+var(--column)*8)] bg-[url(/payload-cms/pattern-element.png)] bg-repeat opacity-8 md:block lg:left-[calc(100vw-var(--gutter-h)-var(--column)*4)]" />
      </Section.Container>
    </Section.RootElement>
  );
};
