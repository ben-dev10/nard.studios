import type { Metadata } from "next";
import "./globals.css";
// import { ThemeProvider } from "@/contexts/theme-context";
import { Analytics } from "@vercel/analytics/next";
import Banner from "./_components/banner";
import { Toaster } from "sonner";
import { siteConfig } from "@/lib/site";
import { metadata as baseMetadata, metadataKeywords } from "./metadata";
import { geistSansVar } from "./_assets/fonts";

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: metadataKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSansVar.variable} _ui font-geistSans antialiased [--gutter-x:3.75rem]`}
      >
        <Banner />
        {children}
        <Analytics />
        <Toaster
          toastOptions={{
            style: {
              fontSize: "1rem",
            },
            className: "text-[1rem]",
          }}
          position="top-right"
          richColors
        />
      </body>
    </html>
  );
}
