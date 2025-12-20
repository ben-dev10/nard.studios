"use client";

import { cn } from "@/lib/utils";
import { ZoomImage } from "./zoom-img";

interface MediaViewerProps {
  src: string;
  alt?: string;
  type?: "image" | "zoomable image" | "video";
  className?: string;
  width?: number;
  height?: number;
}

export function MediaViewer({
  src,
  alt = "",
  type = "image",
  className,
  width,
  height,
}: MediaViewerProps) {
  const mediaProps = {
    src,
    alt,
    className: cn("w-full h-full rounded-lg border overflow-hidden", className),
    ...(width && height ? { width, height } : {}),
  };

  const renderMedia = () => {
    if (type === "video") {
      return (
        <video {...mediaProps} controls loop>
          Your browser does not support the video tag.
        </video>
      );
    }

    if (type === "zoomable image") {
      return (
        <ZoomImage
          {...mediaProps}
          img={{
            alt: alt,
            src: src,
          }}
        />
      );
    }

    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...mediaProps} />;
  };

  return (
    <div className="my-6 w-full">
      <div className="relative w-full">{renderMedia()}</div>
    </div>
  );
}

// Helper components for easier MDX usage
export function ImageViewer(props: Omit<MediaViewerProps, "type">) {
  return <MediaViewer {...props} type="image" />;
}

export function VideoViewer(props: Omit<MediaViewerProps, "type">) {
  return <MediaViewer {...props} type="video" />;
}
