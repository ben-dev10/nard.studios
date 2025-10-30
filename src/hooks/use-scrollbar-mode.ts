"use client";

import { useEffect } from "react";

export function useScrollbarMode(mode: "light" | "dark") {
  useEffect(() => {
    document.documentElement.style.colorScheme = `${mode} !important`;

    return () => {
      document.documentElement.style.colorScheme = "light";
    };
  }, [mode]);
}
