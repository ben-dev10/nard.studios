"use client";
import { useEffect } from "react";

/** USAGE:
 *   useScrollbarTheme({
 *       thumb: '#ccc',
 *       track: '#333',
 *   })
 */

export default function useScrollbarTheme({
  thumb,
  track,
  thumbHover,
  thumbActive,
}: {
  thumb: string;
  track: string;
  thumbHover?: string;
  thumbActive?: string;
}) {
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--scrollbar-thumb", thumb);
    root.style.setProperty("--scrollbar-track", track);
    if (thumbHover)
      root.style.setProperty("--scrollbar-thumb-hover", thumbHover);
    if (thumbActive)
      root.style.setProperty("--scrollbar-thumb-active", thumbActive);

    return () => {
      root.style.setProperty("--scrollbar-thumb", "#fafafa");
      root.style.setProperty("--scrollbar-track", "#b6b6b6");
      root.style.setProperty("--scrollbar-thumb-hover", "#8a8a8a");
      root.style.setProperty("--scrollbar-thumb-active", track);
    };
  }, [thumb, track, thumbHover, thumbActive]);
}
