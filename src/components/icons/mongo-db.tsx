import { cn } from "@/lib/utils";
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MongodbIcon({ title = "", className, ...props }: IconProps) {
  return (
    <svg
      id="brand-mongodb-icon"
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
        <path d="M12 3v19" />
        <path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z" />
      </g>
    </svg>
  );
}

export default MongodbIcon;
