"use client";
import { galleryImages as imgs } from "../gallery/_assets/gallery-data";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Lightbox from "./_ui/lightbox";
import PopoverUI from "@/components/_ui/popover-ui";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { MotionStagger } from "@/components/_motion/core";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function Masonry() {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  const navigate = useCallback(
    (dir: number) => {
      if (selectedImg === null) return;
      setSelectedImg((selectedImg + dir + imgs.length) % imgs.length);
    },
    [selectedImg],
  );

  useEffect(() => {
    if (selectedImg === null) return;

    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [selectedImg, navigate]);

  return (
    <div className="_masonry+lightbox">
      <Lightbox
        imgs={imgs}
        navigate={navigate}
        setSelectedImg={setSelectedImg}
        selectedImg={selectedImg}
      />
      <div className="info mb-5 flex justify-end">
        <PopoverUI
          align="end"
          className="max-w-[200px]"
          trigger={<Info className="text-neutral-800" size={12} />}
          content={
            <div className="text-neutral-500 [&_p]:!text-[0.85rem]">
              <p>Click on an image to view in full-screen.</p>
              <p className="mt-5">
                Press{" "}
                <KbdGroup>
                  <Kbd> esc </Kbd>
                </KbdGroup>{" "}
                to exit (or click outside), left{" "}
                <KbdGroup>
                  <Kbd>
                    <ArrowLeft size={12} className="m-1 inline" />
                  </Kbd>
                </KbdGroup>
                and right{" "}
                <KbdGroup>
                  <Kbd>
                    <ArrowRight size={12} className="m-1 inline" />
                  </Kbd>
                </KbdGroup>{" "}
                arrow keys to cycle through.
              </p>
            </div>
          }
        />
      </div>
      <div className="_masonry-grid [column-gap:1rem] [column-count:2] md:[column-count:3] lg:[column-count:4]">
        <MotionStagger preset="blurIn" staggerDelay={0.1}>
          {imgs.map((item, index) => (
            <div key={index} className="_img-item mb-4">
              <Image
                alt={item.alt}
                width={item.img.width}
                height={item.img.height}
                src={item.img.src}
                className="w-full cursor-pointer rounded-sm"
                onClick={() => setSelectedImg(index)}
                placeholder="blur"
                blurDataURL={item.img.blurDataURL}
              />
            </div>
          ))}
        </MotionStagger>
      </div>
    </div>
  );
}
