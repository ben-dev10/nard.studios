"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PathBeamProps {
  /** SVG path `d` attribute */
  path: string;
  /** Width of the SVG viewport */
  width?: number;
  /** Height of the SVG viewport */
  height?: number;
  /** Leading gradient color (the "head" of the beam) */
  colorFrom?: string;
  /** Trailing gradient color (the "tail" of the beam) */
  colorTo?: string;
  /** Animation duration in seconds */
  duration?: number;
  /** Stroke width of the beam */
  beamWidth?: number;
  /** Stroke width of the background track */
  trackWidth?: number;
  /** Opacity of the background track */
  trackOpacity?: number;
  /** How far behind the head the gradient starts (0–1, fraction of path length) */
  beamSpread?: number;
  /** Number of points sampled along the path for the animation keyframes */
  samples?: number;
  className?: string;
}

/**
 * Given a DOM <path> element, returns an array of { x, y } points sampled
 * evenly along the path, from 0 to totalLength.
 */
function samplePath(
  el: SVGPathElement,
  count: number,
): { x: number; y: number }[] {
  const total = el.getTotalLength();
  return Array.from({ length: count }, (_, i) => {
    const pt = el.getPointAtLength((i / (count - 1)) * total);
    return { x: pt.x, y: pt.y };
  });
}

export function PathBeam({
  path,
  width = 317,
  height = 80,
  colorFrom = "#2EB9DF",
  colorTo = "#9E00FF",
  duration = 2,
  beamWidth = 2,
  trackWidth = 1,
  trackOpacity = 0.2,
  beamSpread = 0.35,
  samples = 60,
  className,
}: PathBeamProps) {
  // Unique gradient ID so multiple instances on the same page don't collide
  const id = useId().replace(/:/g, "");
  const gradientId = `beam-gradient-${id}`;

  // Ref to the invisible <path> we use purely for measurement
  const measureRef = useRef<SVGPathElement>(null);

  /**
   * Keyframe arrays for the four gradient coordinates.
   * Each array has `samples` entries — one per sampled point along the path.
   *
   * x1/y1  → the "tail" of the gradient (behind the head by `beamSpread` fraction)
   * x2/y2  → the "head" of the gradient (the bright leading edge)
   */
  const [keyframes, setKeyframes] = useState<{
    x1: number[];
    y1: number[];
    x2: number[];
    y2: number[];
  } | null>(null);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const points = samplePath(el, samples);
    const total = el.getTotalLength();

    /**
     * For each sample index `i` (the head position), we need to find where
     * the tail sits. The tail is `beamSpread * totalLength` units *behind*
     * the head along the path.
     *
     * We look up the tail by measuring backwards: tailDist = headDist - spread.
     * If tailDist < 0 we clamp to 0 (the beam is still "entering" the path).
     */
    const spreadDist = beamSpread * total;

    const x2 = points.map((p) => p.x);
    const y2 = points.map((p) => p.y);

    const tailPoints = points.map((_, i) => {
      const headDist = (i / (samples - 1)) * total;
      const tailDist = Math.max(0, headDist - spreadDist);
      return el.getPointAtLength(tailDist);
    });

    const x1 = tailPoints.map((p) => p.x);
    const y1 = tailPoints.map((p) => p.y);

    setKeyframes({ x1, y1, x2, y2 });
  }, [path, samples, beamSpread]);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={cn(className)}
    >
      {/* Invisible path used only for measurement */}
      <path ref={measureRef} d={path} stroke="none" fill="none" />

      {/* Background track — the faint "rail" the beam runs along */}
      <path
        d={path}
        stroke="currentColor"
        strokeOpacity={trackOpacity}
        strokeWidth={trackWidth}
      />

      {/* The animated beam itself */}
      <path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth={beamWidth}
      />

      <defs>
        {keyframes ? (
          /**
           * motion.linearGradient animates the four gradient-coordinate props
           * through the pre-computed keyframe arrays.
           *
           * gradientUnits="userSpaceOnUse" means x1/y1/x2/y2 are in the SVG
           * coordinate system (pixels), NOT percentages of the bounding box.
           * This is what makes the gradient track the path correctly.
           */
          <motion.linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            animate={keyframes}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Tail — transparent */}
            <stop offset="0%" stopColor={colorFrom} stopOpacity={0} />
            {/* Mid — solid leading color */}
            <stop offset="50%" stopColor={colorFrom} stopOpacity={1} />
            {/* Head — trailing color, fades out */}
            <stop offset="100%" stopColor={colorTo} stopOpacity={0} />
          </motion.linearGradient>
        ) : (
          // Fallback: static gradient before measurement completes
          <linearGradient id={gradientId} gradientUnits="userSpaceOnUse">
            <stop stopColor={colorFrom} stopOpacity={0} />
          </linearGradient>
        )}
      </defs>
    </svg>
  );
}
