"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const Banner = () => {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const hideForRoute = pathname.startsWith("/gallery");

  if (!visible || hideForRoute) return null;

  return (
    <>
      {visible && (
        <div className="_banner relative !z-50 overflow-hidden bg-black text-white">
          <div className="flex justify-center">
            <div className="_line absolute top-0 left-0 z-1 h-[1px] w-full bg-white mix-blend-overlay" />
            <div className="absolute -ml-90">
              <div className="absolute top-0 left-0 h-[40px] w-full -rotate-60 bg-white blur-md" />
              <div className="absolute top-0 left-0 h-[70px] w-full -rotate-60 bg-blue-500 blur-2xl" />

              <Image
                alt="lines-svg"
                src="/_nard/svgs/lines.svg"
                width={345}
                height={35}
                className="relative"
              />
            </div>

            <div className="_contents relative flex items-center gap-2 p-2">
              <p className="">Site is a work in progress</p>
              <button
                className="cursor-pointer rounded-full"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <span className="sr-only">Close icon</span>
                <X size={16} className="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
