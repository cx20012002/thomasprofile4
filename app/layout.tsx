import type { Metadata } from "next";
import { Anton, Instrument_Sans, Instrument_Serif, Francois_One, Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import Header from "./components/Header";
import GlobalFooterWrapper from "./components/GlobalFooterWrapper";
import GlobalHeaderWrapper from "./components/GlobalHeaderWrapper";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-anton",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-instrument-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-instrument-serif",
});

const francoisOne = Francois_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-francois-one",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thomas Profile",
  description: "My personal profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          anton.variable,
          instrumentSans.variable,
          instrumentSerif.variable,
          francoisOne.variable,
          inter.variable,
          "bg-secondary font-francoisOne text-primary antialiased",
        )}
        suppressHydrationWarning={true}
      >
        <GlobalHeaderWrapper />
        {children}
        <GlobalFooterWrapper />
      </body>
    </html>
  );
}
