"use client";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { ArrowUpRight, Check, Copy } from "lucide-react";

export const PayloadLinkBtn = ({
  link,
  text,
  className,
  variant = "link",
}: {
  link?: string;
  text: string;
  className?: string;
  variant: "copy" | "link";
}) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  let content: React.ReactNode | string = "no content";
  const originalStyles =
    "absolute top-0 flex h-full w-full items-center justify-between p-2 py-3 transition-[top] duration-[450ms] ease-[cubic-bezier(0.17,0.84,0.44,1)] group-hover:-top-[110%] group-hover:-rotate-z-1";
  const duplicateStyles =
    "absolute top-[115%] flex h-full w-full rotate-z-1 items-center justify-between bg-white p-2 py-3 text-black transition-[top] duration-[450ms] ease-[cubic-bezier(0.17,0.84,0.44,1)] group-hover:top-0 group-hover:rotate-z-0";

  if (link && variant === "link") {
    content = (
      <>
        <a href={link} className={`px-4 ${originalStyles}`}>
          {text} <ArrowUpRight className="" size={14} />
        </a>
        <a href={link} className={`px-4 ${duplicateStyles}`}>
          {text} <ArrowUpRight className="" size={14} />
        </a>
      </>
    );
  }

  if (!link && variant === "copy") {
    content = (
      <>
        <span
          onClick={() => {
            copyToClipboard("npx create-payload-app");
          }}
          className={`font-JetBrainsMono px-4 ${originalStyles}`}
        >
          {text}
          {isCopied ? <Check size={14} /> : <Copy className="" size={14} />}
        </span>
        <span
          onClick={() => {
            copyToClipboard("npx create-payload-app");
          }}
          className={`font-JetBrainsMono px-4 ${duplicateStyles}`}
        >
          {text}
          {isCopied ? <Check size={14} /> : <Copy className="" size={14} />}
        </span>
      </>
    );
  }

  return (
    <button
      className={`group relative h-[var(--btn-height)] w-full overflow-hidden [--btn-height:50px] md:text-[0.7rem] ${className}`}
    >
      {content}
    </button>
  );
};
