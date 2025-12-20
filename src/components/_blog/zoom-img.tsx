"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/* BETA:
 * Issue: clicking the image in zoomed mode causes it to shift down once,
 * only occurs above a certain viewport width and wether or not window was resized
 */

export function ZoomImage({
  img,
}: {
  img: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}) {
  const [open, setOpen] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const handleClick = () => {
    setOpen(true);
    setHeight(imgRef.current?.getBoundingClientRect().height);
  };

  useEffect(() => {
    document.body.style.overflow = open === true ? "hidden" : "";
  });

  return (
    <div className="_img-zoom">
      <div className="_img-clone" style={{ height: open ? height : "" }} />
      <div
        className={`${open ? "_bg-overlay fixed inset-0 !z-55 cursor-zoom-out bg-white/60 backdrop-blur-[30px]" : "relative z-2"}`}
        onClick={() => setOpen(false)}
      />
      <motion.img
        ref={imgRef}
        layout
        onClick={handleClick}
        alt={img.alt}
        src={img.src}
        className={`_img w-full cursor-zoom-in rounded-lg border ${open ? `fixed top-1/2 left-1/2 !z-56 max-h-[90vh] -translate-x-1/2 -translate-y-1/2 scale-[0.98] !cursor-auto xl:max-w-[110rem]` : "relative z-2"}`}
      />
    </div>
  );
}
