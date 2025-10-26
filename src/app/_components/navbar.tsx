import { NardLogoSmallLight } from "@/components/_ui/icons";
import Background from "@/components/ui/elements/background";
import Section from "@/components/ui/elements/section";
import { AppSheet } from "./app--sheet";
import { Building2, FileBox, PencilLine, Wallpaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    name: "Work",
    url: "#",
    icon: <Building2 size={16} />,
  },
  {
    name: "Gallery",
    url: "#",
    icon: <Wallpaper size={16} />,
  },
  {
    name: "Resources",
    url: "#",
    icon: <FileBox size={16} />,
  },
  {
    name: "Blog",
    url: "#",
    icon: <PencilLine size={16} />,
  },
];

export default function Navbar({ isVisible }: { isVisible: boolean }) {
  return (
    <Section.RootElement className="fixed top-0 z-999 w-full">
      <Section.Container
        container="8xl"
        className={`flex items-center justify-between p-5 ${isVisible && "pt-12"}`}
      >
        <div className="_left-half relative cursor-pointer rounded-full border-2 border-white/60 bg-white/55 p-4 px-6 shadow-2xl backdrop-blur-[30px]">
          <Background.Layer
            className={`_bg-blur absolute inset-0 -z-1 mt-5 rounded-full ${conicGradient} opacity-25 blur-md`}
          />

          <div className="_contents flex gap-2">
            <NardLogoSmallLight />
            <p className="text-[0.9rem] font-[600]">nard.studios</p>
          </div>
        </div>

        <div className="_right-half flex items-center gap-2 rounded-full bg-white/55 p-3 px-5 shadow-2xl backdrop-blur-[20px]">
          <div className="_utilities md:mr-3">
            <Link href="mailto:quarshiebernard552@gmail.com?subject=Project%20Inquiry&body=Hi%20there,">
              <Button className="bevel-[0.5] rounded-full !text-[0.9rem] active:scale-[0.9]">
                Send Email
              </Button>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-3">
              {NavLinks.map((link, index) => (
                <li key={index} className="">
                  <a href={link.url} className="text-[0.9rem]">
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
  );
}
