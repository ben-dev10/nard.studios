"use client";
import { NardLogoSmall } from "@/components/_ui/icons";
import Background from "@/components/ui/elements/background";
import Section from "@/components/ui/elements/section";
import { AppSheet } from "./app-sheet";
import {
  Gift,
  PencilLine,
  UserCircleIcon,
  Wallpaper,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

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
    visible: true,
  },
  {
    name: "Gallery",
    url: "/gallery",
    icon: <Wallpaper size={16} />,
    visible: true,
  },
  {
    name: "Process",
    url: "/process",
    icon: <Workflow size={16} />,
    visible: true,
  },
  {
    name: "Blog",
    url: "/blog",
    icon: <PencilLine size={16} />,
    visible: true,
  },
  {
    name: "Resources",
    url: "/resources",
    icon: <Gift size={16} />,
    visible: false,
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
                <Link href="/about/#contact">
                  <Button className="rounded-full">Contact</Button>
                </Link>
              </div>
              <nav className="hidden md:block">
                <ul className="flex items-center text-muted-foreground gap-3">
                  {NavLinks.map((link, index) => (
                    <li
                      key={index}
                      className={`${link.visible ? "" : "hidden"}`}
                    >
                      <a
                        href={link.url}
                        className={`text-[0.9rem] ${
                          isActive(link.url)
                            ? "text-primary font-[600] decoration-black/20"
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
