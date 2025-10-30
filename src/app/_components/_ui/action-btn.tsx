import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function ActionBTN({ text }: { text: string }) {
  return (
    <button className="group h-10 rounded-[8px] bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] select-none hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]">
      <span className="mx-2 flex items-center justify-center gap-1 group-active:[transform:translate3d(0,1px,0)]">
        {text}
        <ArrowUpRight
          size={13}
          className="shrink-0 duration-250 group-hover:rotate-45"
        />
      </span>
    </button>
  );
}
