"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui//sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialIcons from "@/components/_ui/social-icons";
import type { NavLinksProps } from "./navbar";
import Image from "next/image";

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
            <span className="sr-only">Hamburger icon</span>
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
        className={`_sheet-content.wrapper bg-background/95 text-foreground backdrop-blur-2xl md:hidden`}
      >
        <SheetHeader aria-hidden className="hidden">
          <SheetTitle className="flex">nard.studios</SheetTitle>
          <SheetDescription>
            A dialog for storing navbar links on mobile devices
          </SheetDescription>
        </SheetHeader>
        <div className="_sheet-content relative">
          <div className="_sheet-graphic pointer-events-none absolute top-0 left-0 -z-2 h-[150px] w-full">
            <Image
              alt="sheet isometric art"
              width={2400}
              height={1260}
              src="/_nard/_ui/sheet-img.webp"
              className=""
            />
          </div>

          <div className="_contents mt-80">
            <nav className="_sheet-links p-5">
              <ul onClick={handleClick} className="space-y-3">
                {NavLinks.map((link) => (
                  <li key={link.name.toString().slice(0, 5)}>
                    <Link
                      href={link.url}
                      id="navLink"
                      className={`sheet-link hover:bg-primary/80 flex items-center gap-1 rounded-lg p-2 px-3 hover:text-white ${
                        isActive(link.url)
                          ? "active bg-primary font-[600] text-white"
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
            <div className="_social-links mt-15 flex flex-col">
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
        </div>
      </SheetContent>
    </Sheet>
  );
}
