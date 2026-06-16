import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "UnizConnect | 1:1 Strategy Session with Ayesha Saleem",
  description: "Get personalized guidance on your study abroad and career path. Stop guessing and start planning with confidence.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-gray-50 text-gray-900 selection:bg-brand-purple selection:text-white md:cursor-none`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
