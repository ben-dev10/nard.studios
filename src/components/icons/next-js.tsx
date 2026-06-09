import { cn } from "@/lib/utils";
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NextjsIcon({ title = "", className, ...props }: IconProps) {
  return (
    <svg
      id="brand-nextjs"
      viewBox="0 0 24 24"
      className={cn("size-6", className)}
      {...props}
    >
      <title>{title}</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
        <path d="M15 12v-3" />
      </g>
    </svg>
  );
}

export default NextjsIcon;
