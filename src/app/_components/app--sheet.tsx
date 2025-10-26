import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  // SheetFooter,
} from "@/components/ui//sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialIcons from "@/components/_ui/social-icons";
import type { NavLinksProps } from "./navbar";

export function AppSheet({ NavLinks, side }: NavLinksProps) {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {
          <Button
            className="group size-8 md:hidden"
            variant="ghost"
            size="icon"
          >
            <svg
              className="pointer-events-none"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </Button>
        }
      </SheetTrigger>
      <SheetContent
        side={side}
        className={`sheet-content-wrapper bg-background/95 text-foreground p-5 pt-3 pl-5 backdrop-blur-2xl md:hidden`}
      >
        <SheetHeader aria-hidden className="hidden">
          <SheetTitle>Navlinks Sheet</SheetTitle>
          <SheetDescription>
            A dialog for storing navbar links on mobile devices
          </SheetDescription>
        </SheetHeader>
        <div className="sheet-content mx-auto mb-auto flex w-[90%] max-w-[450px] flex-col gap-3 text-[13px]">
          {/* line */}
          <hr className="absolute left-0 mt-8 h-1 w-full" />

          {/* sheet links */}
          <nav className="sheet-links mt-15">
            <ul onClick={handleClick} className="space-y-3">
              {NavLinks.map((link) => (
                <li
                  key={link.name.toString().slice(0, 5)}
                  // className="list-none"
                >
                  <Link
                    href={link.url}
                    id="navLink"
                    className={`sheet-link hover:bg-primary flex items-center gap-1 rounded-md p-2 px-3 hover:text-white ${
                      isActive(link.url)
                        ? "active bg-violet-500 font-[600] text-white"
                        : ""
                    }`}
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* social-links */}
          <div className="mt-15 flex flex-col">
            <hr className="mt-3" />
            <SocialIcons
              SVGClass="size-6 w-full text-foreground mt-5"
              className="mx-auto flex gap-5"
              xtwitter
              github
              linkedin
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
