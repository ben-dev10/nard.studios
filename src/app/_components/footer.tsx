import { Ghana, NardLogoGroup, NardLogoSmall } from "@/components/_ui/icons";
import SocialIcons from "@/components/_ui/social-icons";
import Section from "@/components/ui/elements/section";
import {
  ExternalLink,
  FileBox,
  PencilLine,
  UserCircleIcon,
  Wallpaper,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const line = <div className="_line w-full border-t border-dashed" />;
const copy = (
  <p className="copy mr-1 !text-[0.88rem] opacity-70 max-md:text-[0.9rem]">
    &copy; 2025 - present, with ❤️ from Ghana{" "}
    <Ghana className="-mt-1 ml-1 inline size-4 shrink-0" />
  </p>
);

const footerLinks = [
  {
    header: "About",
    headerIcon: <UserCircleIcon size={16} className="" />,
    links: [
      {
        name: "Resume",
        url: "/about",
      },
      {
        name: "Profile",
        url: "/about",
      },
      {
        name: (
          <span className="flex items-center gap-1">
            Contact <ExternalLink size={12} className="opacity-80" />{" "}
          </span>
        ),
        url: "/about",
      },
    ],
  },
  {
    header: "Gallery",
    headerIcon: <Wallpaper size={16} className="" />,
    links: [
      {
        name: "Web Dev",
        url: "/gallery/#software-tab",
      },
      {
        name: "2D/3D",
        url: "/gallery/#design-tab",
      },
      {
        name: "Engineering",
        url: "/gallery/#engineering-tab",
      },
    ],
  },
  {
    header: "Resources",
    headerIcon: <FileBox size={14} />,
    links: [
      {
        name: "Snippets",
        url: "/resources",
      },
      {
        name: "Curated Links",
        url: "/resources",
      },
      {
        name: "Inspiration",
        url: "/resources",
      },
    ],
  },
  {
    header: "Blog",
    headerIcon: <PencilLine size={14} />,
    links: [
      {
        name: "Changelogs",
        url: "/blog",
      },
      {
        name: "Roadmap",
        url: "/blog/introducing-nard-studios",
      },
    ],
  },
];

const FOOTER_BG = "bg-[#eff0f0]"; /* or: #fafafa #f4f5ff */

export default function Footer() {
  return (
    <Section.RootElement
      as="footer"
      className={`${FOOTER_BG} group relative overflow-hidden`}
    >
      <Section.Container
        container="8xl"
        className={`relative p-10 px-[var(--gutter-x)] pt-15`}
      >
        <div className="_header+links flex flex-col gap-y-5 md:flex-row md:gap-15">
          <div className="_header md:max-w-[200px]">
            <div className="logos">
              <NardLogoGroup className="mb-2" />
              <p className="mb-10 !text-[0.9rem] opacity-80">
                Crafting stunning and performant UIs, with care and precision.
              </p>

              <div className="">
                <SocialIcons
                  className="mb-3 flex max-w-max gap-2 pb-1"
                  SVGClass="size-6 text-black"
                  xtwitter
                  github
                  linkedin
                />
                <div className="sm:hidden">{copy}</div>

                <div className="mt-5">
                  <p className="text-muted-foreground text-[0.6rem] font-bold">
                    SITE COMPLETION
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      alt="scale-svg"
                      src="/_nard/svgs/gradient-scale.svg"
                      width={121}
                      height={20}
                    />
                    <p>64%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="max-md:py-8 md:hidden">{line}</span>

          <div className="_links flex flex-wrap gap-15 gap-y-18 max-md:gap-x-33 md:gap-10">
            {footerLinks.map((item) => (
              <div key={item.header.slice(0, 5)} className="footer-links">
                <div className="max-550:mb-3 mb-2 flex gap-4 opacity-80">
                  {item.headerIcon}
                  <p className="">{item.header}</p>
                </div>
                <div className="links ml-2 flex h-[90%] flex-col gap-[6px] border-l text-[0.9rem] lg:h-[70%]">
                  {item.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      className="hover:border-primary/70 hover:text-primary max-550:py-0.5 -ml-[1.5px] border-l border-transparent pl-8"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="_copy+logo mt-65">
          <div className="hidden sm:block">{copy}</div>
          <div>
            <NardLogoSmall className="absolute right-10 -bottom-45 size-90 grayscale-90 transition-[filter] duration-500 group-hover:grayscale-0" />
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}
