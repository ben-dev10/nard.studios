import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/theme-context";
import "./globals.css";
import { geistSansVar, geistMonoVar } from "./_assets/fonts";
import { Analytics } from "@vercel/analytics/next";

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
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
