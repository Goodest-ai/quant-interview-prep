import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ProgressSync } from "@/components/progress-sync";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuantPrep — Quant Interview Practice",
  description:
    "Practice quant interview problems and play interactive market-making games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ProgressSync />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-accent focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent focus:outline-none"
        >
          Skip to content
        </a>
        <div className="min-h-screen lg:flex">
          <Navbar />
          <div className="flex min-w-0 flex-1 flex-col">
            <main
              id="main-content"
              tabIndex={-1}
              className="mx-auto w-full max-w-[90rem] flex-1 px-5 pb-16 pt-9 focus:outline-none sm:px-8 lg:px-12 lg:pt-12"
            >
              {children}
            </main>
            <footer className="border-t border-border px-5 py-5 text-xs text-muted sm:px-8 lg:px-12">
              QuantPrep · Practice with purpose
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
