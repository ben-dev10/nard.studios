"use client";
import { FlickeringGrid } from "@/components/_blog/flickering-grid";
import { useIsMobile } from "@/hooks/use-mobile";

export default function BlogFlickeringGrid() {
  const isMobile = useIsMobile();

  return (
    <>
      <FlickeringGrid
        className="absolute top-0 left-0 size-full"
        squareSize={isMobile ? 2 : 4}
        gridGap={isMobile ? 3 : 6}
        color="#6B7280"
        maxOpacity={0.2}
        flickerChance={isMobile ? 0 : 0.05}
      />
    </>
  );
}
