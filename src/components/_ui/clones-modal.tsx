"use client";

import SocialIcons from "./social-icons";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, X } from "lucide-react";
import SocialShare from "./social-share";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import "./_assets/clones-modal.css";
import { NardLogoDark, ShareIcon } from "./icons";
import Link from "next/link";

// main component
type MiniModalProps = {
  sourceURL?: string;
  source?: string;
  desc?: string;
  bgURL?: string;
};

export default function ClonesModal({
  sourceURL = "https://google.com",
  source = "Google homepage",
  desc = "Google's homepage,find out more by clicking this link.",
  bgURL,
}: MiniModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [cloneURL, setCloneURL] = useState("");

  useEffect(() => {
    setCloneURL(window.location.href);
  }, []);

  /* _FEATURE: 1. make model stick to viewport at lower breakpoints
               2. Use sonner instead of alert()
  */
  const { copyToClipboard, isCopied } = useCopyToClipboard({
    timeout: 100,
    onCopy() {
      // alert("Copied text");
    },
  });

  return (
    <>
      <div className="_modal+trigger fixed right-5 bottom-5 z-999">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                width: 0,
                opacity: 0,
                scale: 0,
                transformOrigin: "bottom right",
              }}
              animate={{
                width: "300px",
                height: 330,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                width: 0,
                height: 0,
                scale: 0,
                transition: {
                  // duration: 0.4,
                },
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                opacity: { duration: 0.2 },
              }}
              className="_mini-modal absolute right-0 bottom-[0%] z-5 flex min-w-[250px] flex-col gap-y-3 rounded-[12px] bg-gradient-to-b from-[#1b1b1b] to-[#0f0f0f] p-5 text-white shadow-xl ring-2 shadow-black/90 ring-neutral-400/20"
            >
              <div className="_status-bar mb-5 flex">
                <p className="mr-auto !text-[0.8rem] uppercase opacity-70">
                  <Link href="/" className="cursor-pointer">
                    UI Clones
                  </Link>
                </p>
                {/* <div className="_toggle-btn mr-3 scale-[0.8]">
                  <ButtonGroupThemeToggle className="bg-[#303030] p-[2px]" />
                </div> */}
                <button onClick={() => setIsOpen(false)}>
                  <X size={14} />
                </button>
              </div>

              <div className="_links mb-auto">
                <p className="mb-2 opacity-90">I cloned this UI from</p>

                <div
                  className={`_mega-link mb-3 h-[70px] ${bgURL} rounded-[12px] bg-[0%_100%] ring-2 ring-neutral-800/0 transition-colors duration-500 hover:ring-[2.7px] hover:ring-neutral-500/50`}
                >
                  <a
                    href={sourceURL}
                    target="_"
                    className="relative flex h-full justify-end px-4 text-end before:pointer-events-none before:absolute before:inset-0 before:rounded-[12px] before:bg-black before:opacity-80"
                  >
                    <div className="relative z-2">
                      <p className="link pt-1 text-xl font-[600]">{source}</p>
                      <span className="description inline-block max-w-[160px] text-[0.8rem] opacity-50">
                        {desc}
                      </span>
                    </div>
                  </a>
                </div>

                <div className="_source-socials">
                  <p className="mb-2 text-[0.85rem] opacity-70">
                    Source code on GitHub, find out more on my socials 🚀
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="nard--socials">
                      <SocialIcons
                        SVGClass="size-5 text-white"
                        className="flex gap-[6px] rounded-full bg-[#404040] p-1 px-2 max-sm:gap-3 max-sm:p-2 max-sm:px-3"
                        github
                        xtwitter
                        linkedin
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="_share">
                <div className="mb-2 flex items-center gap-2">
                  <ShareIcon className="size-4 stroke-white" />
                  <p className="opacity-80">Share this UI clone</p>
                </div>
                <div className="input-share flex">
                  <InputGroup className="max-w-[280px] rounded-[8px] border-0 !bg-neutral-700">
                    <InputGroupInput
                      name="url input"
                      ref={inputRef}
                      value={cloneURL}
                      onChange={(e) => setCloneURL(e.target.value)}
                      onFocus={() => {
                        // select entire link when input is focused
                        inputRef.current?.select();
                      }}
                      type="text"
                      className=""
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton
                        aria-label="Copy"
                        title="Copy"
                        size="icon-xs"
                        onClick={() => {
                          copyToClipboard(cloneURL);
                        }}
                        className="text-white hover:bg-transparent hover:text-[#ccc] dark:hover:bg-transparent"
                      >
                        {isCopied ? <Check /> : <Copy />}
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>

                  <SocialShare triggerStyles="ml-2 h-full grid w-[35px] place-items-center rounded-[4px] bg-[#2E2E2E] px-1.5 text-white/80" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(true)}
          className="_modal-trigger relative drop-shadow-2xl focus:scale-[0.9]"
        >
          <span className="_blur gradient-blur-animation absolute inset-0 z-1 block scale-[1.2] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,_#2BFF17_0deg,_#F86767_180deg,_#2D5AFF_270deg,_#B84EFF_360deg)] opacity-50 blur" />
          <span className="relative z-2 grid place-items-center rounded-full bg-gradient-to-b from-[#333337] to-[#070707] p-2.5 shadow-2xl shadow-black/90">
            <NardLogoDark className="size-8" />
            <span className="sr-only">Modal Trigger</span>
          </span>
        </button>
      </div>
    </>
  );
}
