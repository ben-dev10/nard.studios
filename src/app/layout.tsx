import type { Metadata } from "next";
import "./globals.css";
import { geistSansVar, geistMonoVar } from "./_assets/fonts";
import { ThemeProvider } from "@/contexts/theme-context";
import { Analytics } from "@vercel/analytics/next";
import Banner from "./_components/banner";

export const metadata: Metadata = {
  title: "nard.studios",
  description: "A design and development studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSansVar.variable} ${geistMonoVar.variable} font-geistSans antialiased [--gutter-x:3.75rem]`}
      >
        <ThemeProvider>
          <Banner />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
