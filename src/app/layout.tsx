import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "../lib/utils";

import "./globals.css";

// Font Inter
const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontInter.variable
      )}>
        {children}
      </body>
    </html>
  );
}