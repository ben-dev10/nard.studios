/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ThemeToggle } from "@/components/_blog/theme-toggle";

export function SiteNav() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-20 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-6">
        <div className="mr-4 flex">
          <Link
            href="/"
            className="mr-6 flex h-8 w-8 items-center space-x-2 overflow-hidden rounded-md text-lg font-medium tracking-tighter"
          >
            <img
              src="/magicui-logo.png"
              alt="Magic UI"
              className="h-10 w-10 object-cover"
            />
          </Link>
        </div>

        <div className="flex w-full flex-1 justify-end">
          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
