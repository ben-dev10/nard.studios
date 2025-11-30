import localFont from "next/font/local";

/* USAGE:
 * import { geistSansVar, geistMonoVar } from "./fonts"
 * <body className={`${geistSansVar.variable} ${geistMonoVar.variable}`}></body>
 */

export const geistSansVar = localFont({
  src: [
    {
      path: "../../utils/styles/fonts/var/geist/Geist[wght].ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../utils/styles/fonts/var/geist/Geist-Italic[wght].ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-geist-var-sans",
  display: "swap",
});

export const geistMonoVar = localFont({
  src: [
    {
      path: "../../utils/styles/fonts/var/geist/GeistMono[wght].ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../utils/styles/fonts/var/geist/GeistMono-Italic[wght].ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-geist-var-mono",
  display: "swap",
});
