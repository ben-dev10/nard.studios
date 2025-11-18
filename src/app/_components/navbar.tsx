"use client";
import { NardLogoSmall } from "@/components/_ui/icons";
import Background from "@/components/ui/elements/background";
import Section from "@/components/ui/elements/section";
import { AppSheet } from "./app--sheet";
import { FileBox, PencilLine, UserCircleIcon, Wallpaper } from "lucide-react";
import Link from "next/link";
import EmailButton from "./email-btn";
import { usePathname } from "next/navigation";

// bg-[attr(datatype-bg)]
const conicGradient =
  "bg-[conic-gradient(from_180deg_at_50%_50%,_#2BFF17_0deg,_#F86767_180deg,_#2D5AFF_270deg,_#B84EFF_360deg)]";
interface LinkProps {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

export interface NavLinksProps {
  NavLinks: LinkProps[];
  side: "top" | "right" | "bottom" | "left";
}

// Navigation links
const NavLinks = [
  {
    name: "About",
    url: "/about",
    icon: <UserCircleIcon size={16} />,
  },
  {
    name: "Gallery",
    url: "/gallery",
    icon: <Wallpaper size={16} />,
  },
  {
    name: "Resources",
    url: "/resources",
    icon: <FileBox size={16} />,
  },
  {
    name: "Blog",
    url: "/blog",
    icon: <PencilLine size={16} />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const hideNav = pathname.startsWith("/gallery/clones");

  return (
    <>
      {!hideNav && (
        <Section.RootElement
          as="header"
          className="_header !sticky !top-2 z-10 w-full"
        >
          <Section.Container
            container="8xl"
            className={`flex items-center justify-between p-5 py-1`}
          >
            <Link href={"/"}>
              <div className="_left-half relative rounded-full border-2 border-white/60 bg-white/55 p-4 px-6 shadow-2xl backdrop-blur-[30px]">
                <Background.Layer
                  className={`_bg-blur absolute inset-0 -z-1 mt-5 rounded-full ${conicGradient} opacity-25 blur-md`}
                />
                <div className="_contents flex gap-2">
                  <NardLogoSmall />
                  <p className="text-[0.9rem] font-[600]">nard.studios</p>
                </div>
              </div>
            </Link>
            <div className="_right-half flex items-center gap-2 rounded-full bg-white/55 p-3 px-5 shadow-2xl backdrop-blur-[20px] md:pr-10">
              <div className="_utilities md:mr-3">
                <EmailButton text="Contact" className="rounded-full" />
              </div>
              <nav className="hidden md:block">
                <ul className="flex items-center gap-3">
                  {NavLinks.map((link, index) => (
                    <li key={index} className="">
                      <a
                        href={link.url}
                        className={`text-[0.9rem] ${
                          isActive(link.url)
                            ? "text-primary font-[600] underline decoration-black/20 decoration-dotted"
                            : ""
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <AppSheet side="left" NavLinks={NavLinks} />
            </div>
          </Section.Container>
        </Section.RootElement>
      )}
    </>
  );
}
