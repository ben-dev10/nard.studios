"use client";

import SocialIcons from "./social-icons";
import React, { SVGProps, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ButtonGroupThemeToggle } from "./theme-toggles";
import { X } from "lucide-react";
import SocialShare from "./social-share";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";


export const NardLogoDark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35 * 1.4}
      height={35 * 1.4}
      viewBox="0 0 40 30"
      fill="none"
      className="grid place-items-center"
    >
      <g filter="url(#filter0_d_1235_138)">
        <path
          d="M29.86 23.0922C30.2761 23.4465 30.3281 24.0727 29.9492 24.4665C27.8595 26.6386 25.1379 28.1118 22.1589 28.6675C18.8561 29.2836 15.4418 28.7336 12.4996 27.1116C9.55731 25.4895 7.26962 22.8961 6.02744 19.7744C4.78526 16.6527 4.66568 13.1965 5.68913 9.99641C5.72942 9.86551 5.77208 9.73538 5.81708 9.60608C5.99741 9.08799 6.58765 8.86425 7.08625 9.09299C7.4505 9.26009 7.81848 9.43067 8.18578 9.59647C8.69839 9.82786 8.94044 10.4326 8.7572 10.9643C8.75488 10.9711 8.75256 10.9778 8.75024 10.9846C7.9484 13.4766 8.03851 16.17 9.00512 18.6029C9.97172 21.0358 11.7546 23.0567 14.0481 24.319C16.3415 25.5813 19.0027 26.0064 21.5753 25.5214C23.8217 25.0979 25.8784 24.0035 27.48 22.394C27.8674 22.0047 28.4907 21.9415 28.9124 22.2934C29.2312 22.5595 29.5475 22.8262 29.86 23.0922Z"
          fill="url(#paint0_linear_1235_138)"
          shapeRendering="crispEdges"
        />
        <path
          d="M29.86 23.0922C30.2761 23.4465 30.3281 24.0727 29.9492 24.4665C27.8595 26.6386 25.1379 28.1118 22.1589 28.6675C18.8561 29.2836 15.4418 28.7336 12.4996 27.1116C9.55731 25.4895 7.26962 22.8961 6.02744 19.7744C4.78526 16.6527 4.66568 13.1965 5.68913 9.99641C5.72942 9.86551 5.77208 9.73538 5.81708 9.60608C5.99741 9.08799 6.58765 8.86425 7.08625 9.09299C7.4505 9.26009 7.81848 9.43067 8.18578 9.59647C8.69839 9.82786 8.94044 10.4326 8.7572 10.9643C8.75488 10.9711 8.75256 10.9778 8.75024 10.9846C7.9484 13.4766 8.03851 16.17 9.00512 18.6029C9.97172 21.0358 11.7546 23.0567 14.0481 24.319C16.3415 25.5813 19.0027 26.0064 21.5753 25.5214C23.8217 25.0979 25.8784 24.0035 27.48 22.394C27.8674 22.0047 28.4907 21.9415 28.9124 22.2934C29.2312 22.5595 29.5475 22.8262 29.86 23.0922Z"
          stroke="url(#paint1_linear_1235_138)"
          shapeRendering="crispEdges"
        />
        <path
          d="M29.86 23.0922C30.2761 23.4465 30.3281 24.0727 29.9492 24.4665C27.8595 26.6386 25.1379 28.1118 22.1589 28.6675C18.8561 29.2836 15.4418 28.7336 12.4996 27.1116C9.55731 25.4895 7.26962 22.8961 6.02744 19.7744C4.78526 16.6527 4.66568 13.1965 5.68913 9.99641C5.72942 9.86551 5.77208 9.73538 5.81708 9.60608C5.99741 9.08799 6.58765 8.86425 7.08625 9.09299C7.4505 9.26009 7.81848 9.43067 8.18578 9.59647C8.69839 9.82786 8.94044 10.4326 8.7572 10.9643C8.75488 10.9711 8.75256 10.9778 8.75024 10.9846C7.9484 13.4766 8.03851 16.17 9.00512 18.6029C9.97172 21.0358 11.7546 23.0567 14.0481 24.319C16.3415 25.5813 19.0027 26.0064 21.5753 25.5214C23.8217 25.0979 25.8784 24.0035 27.48 22.394C27.8674 22.0047 28.4907 21.9415 28.9124 22.2934C29.2312 22.5595 29.5475 22.8262 29.86 23.0922Z"
          stroke="url(#paint2_linear_1235_138)"
          strokeOpacity="0.2"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        d="M33.2926 18.8683C33.2381 19.0484 33.0183 19.1019 32.8729 18.9824C32.1598 18.3963 31.4346 17.8246 30.7082 17.2727C30.5495 17.1521 30.4776 16.9494 30.5186 16.7544C30.9847 14.5389 30.7723 12.2314 29.905 10.1347C28.9959 7.93663 27.4138 6.08311 25.3858 4.84007C23.3578 3.59703 20.9882 3.02837 18.6169 3.2157C16.3522 3.39462 14.1971 4.25438 12.4332 5.67823C12.2814 5.80076 12.0735 5.83061 11.8965 5.7487C11.1526 5.40458 10.4345 5.06666 9.69813 4.74231C9.37696 4.60084 9.29121 4.18244 9.54668 3.94181C11.7419 1.87418 14.5329 0.538578 17.5331 0.131551C20.7744 -0.30818 24.0691 0.361752 26.8812 2.03236C29.6934 3.70298 31.8575 6.27597 33.0216 9.33278C34.1857 12.3896 34.2812 15.7503 33.2926 18.8683Z"
        fill="url(#paint3_linear_1235_138)"
      />
      <path
        d="M14.1097 20.3397C14.1097 19.2656 14.1849 16.8382 14.1849 15.3775V14.0134C14.1849 12.7138 14.1849 12.2197 14.1097 11.2745L12.6704 11.0597V10.1253L17.3319 8.5249L17.7293 8.78268L17.9549 11.4034V15.3453C17.9549 16.806 17.9549 19.2442 18.0193 20.3075L14.1097 20.3397ZM19.0934 19.2656V20.3397H12.8745V19.2656L15.0226 18.7931H16.8271L19.0934 19.2656ZM25.0652 12.6493V15.399C25.0652 16.9134 25.0652 19.2979 25.1404 20.3612H21.2308C21.2308 19.2871 21.2952 16.9134 21.2952 15.399V12.8964C21.2952 11.3819 20.9193 10.8449 19.9741 10.8449C19.3971 10.921 18.8416 11.1135 18.3412 11.4107C17.8409 11.708 17.4061 12.1038 17.0634 12.5742H16.2578V11.049H17.8797L16.9774 11.7149C18.61 9.31972 19.9634 8.5249 21.6604 8.5249C23.7012 8.5249 25.0652 9.89972 25.0652 12.6279V12.6493ZM23.9912 18.7931L26.3004 19.2656V20.3397H20.0278V19.2656L22.176 18.7931H23.9912Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_1235_138"
          x="0.5"
          y="8.50439"
          width="34.2056"
          height="28.9089"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0780499 0 0 0 0 0.0780499 0 0 0 0 0.0780499 0 0 0 0.53 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1235_138"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1235_138"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1235_138"
          x1="17.9765"
          y1="12.6171"
          x2="17.2462"
          y2="38.2123"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#333333" stopOpacity="0.8" />
          <stop offset="0.14" stopColor="#222222" stopOpacity="0.87" />
          <stop offset="0.36" stopColor="#0F0F0F" stopOpacity="0.94" />
          <stop offset="0.63" stopColor="#040404" stopOpacity="0.99" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1235_138"
          x1="15.9912"
          y1="24.9324"
          x2="12.9912"
          y2="27.4324"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" stopColor="#666666" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1235_138"
          x1="27"
          y1="26.5"
          x2="26.5"
          y2="23.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00F7FB" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1235_138"
          x1="9.00782"
          y1="9.5776"
          x2="33.9908"
          y2="9.5776"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#BA9BC9" />
          <stop offset="1" stopColor="#29ABE2" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
};


type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

export function GithubLogo({ title = "nard.github.io", ...props }: IconProps) {
  return (
    <svg
      height="32"
      width="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{title}</title>
      <g fill="currentColor">
        <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z" />
      </g>
    </svg>
  );
}

function ShareIcon({ title = "", ...props }: IconProps) {
  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M21 6h-3.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C13 8.28 13 9.12 13 10.8V12m8-6-3-3m3 3-3 3m-8-6H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V14"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

// main component
type MiniModalProps = {
  sourceURL?: string;
  source?: string;
  desc?: string;
};

// _FEATURE: 1. mega-link bg-image
export default function ClonesModal({
  sourceURL = "https://google.com",
  source = "Google homepage",
  desc = "Google's homepage,find out more by clicking this link.",
}: MiniModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [cloneURL, setCloneURL] = useState(window.location.href);

  // _FEATURE: Use sonner instead of alert()
  const { copyToClipboard, isCopied } = useCopyToClipboard({
    timeout: 100,
    onCopy() {
      alert("Copied text");
    },
  });

  return (
    <div>
      <div className="fixed right-5 bottom-5 z-999">
        {/* mini-modal */}
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
                width: "auto",
                height: 350,
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
              className="modal absolute right-0 bottom-[0%] z-5 flex min-w-[350px] flex-col gap-y-3 rounded-[12px] bg-gradient-to-br from-[#202020] to-black p-5 text-white shadow-2xl"
            >
              {/* status-bar */}
              <div className="mb-auto flex">
                <p className="pointer-events-none mr-auto text-[0.8rem] uppercase opacity-70">
                  UI Clones
                </p>
                <div className="mr-3 scale-[0.9]">
                  <ButtonGroupThemeToggle className="bg-[#303030] p-[2px]" />
                </div>
                <button onClick={() => setIsOpen(false)}>
                  <X size={14} />
                </button>
              </div>
              {/* links */}
              <div className="mb-10">
                <p className="mb-2 opacity-90">I cloned this UI from</p>

                <div className="mega-link mb-3 h-[70px] rounded-[12px] bg-[url(/imgs/dark-project-app-screenshot.png)] bg-[0%_100%] ring ring-neutral-800 transition-colors duration-500 hover:ring hover:ring-neutral-500">
                  <a
                    href={sourceURL}
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

                <div className="source-socials">
                  <p className="mb-2 text-[0.85rem] opacity-70">
                    Source code on GitHub, find out more on my socials 🚀
                  </p>
                  <div className="flex items-center gap-3">
                    <a href="#" className="nard--github">
                      <GithubLogo
                        title="nard.github.com"
                        className="size-6 text-white/80"
                      />
                    </a>
                    <div className="nard--socials">
                      <SocialIcons
                        SVGClass="size-5 text-white"
                        className="flex gap-[6px] rounded-full bg-[#404040] p-1 px-2"
                        instagram
                        xtwitter
                        linkedin
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* share */}
              <div className="share">
                <div className="mb-2 flex items-center gap-2">
                  <ShareIcon className="size-4" />
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
                        {isCopied ? <IconCheck /> : <IconCopy />}
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>

                  <SocialShare triggerStyles="ml-2 h-full grid w-[35px] place-items-center rounded-[4px] bg-[#2E2E2E] px-1.5 text-white/80" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* modal-trigger */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative drop-shadow-2xl focus:scale-[0.9]"
        >
          <span className="gradient-blur-animation absolute inset-0 z-1 block scale-[1.2] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,_#2BFF17_0deg,_#F86767_180deg,_#2D5AFF_270deg,_#B84EFF_360deg)] blur" />
          <span className="relative z-2 block rounded-full bg-gradient-to-bl from-[#414141] to-black p-1">
            <NardLogoDark />
            <span className="sr-only">Modal Trigger</span>
          </span>
        </button>
      </div>
    </div>
  );
}
