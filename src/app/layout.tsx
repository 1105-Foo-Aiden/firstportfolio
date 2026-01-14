import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "@/app/Style/globals.css"
const space_mono = Space_Mono({ subsets: ["latin"], weight: "700", preload: true });

export const metadata: Metadata = {
  title: "Aiden Foo's Portfolio",
  description: "No AI needed",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={space_mono.className}>{children}</body>
    </html>
  );
}
