import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const berkeleyMono = localFont({
  src: "./fonts/BerkeleyMono-Regular.woff",
  variable: "--font-mono",
  weight: "400 600",
});

export const metadata: Metadata = {
  title: "Evgenii Khramkov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Evgenii Khramkov personal page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body
        className={`${berkeleyMono.variable} antialiased font-mono bg-white text-black dark:bg-black dark:text-white min-h-svh overflow-hidden flex flex-col`}
      >
        {children}
        <footer className="text-xs p-4">
          <div className="mx-auto max-w-7xl">@ {year} ewgenius.me</div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
