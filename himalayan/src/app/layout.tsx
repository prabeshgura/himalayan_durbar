import type { Metadata } from "next";
import { Geist, Geist_Mono, MonteCarlo } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/providers/SmoothScrollProvider";
import Navbar from "./components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// MonteCarlo display font for banquet branding
const monteCarlo = MonteCarlo({
  variable: "--font-monte-carlo",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Himalayan Durbar",
  description: "Himalayan Durbar — banquet experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${monteCarlo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <SmoothScrollProvider>
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
