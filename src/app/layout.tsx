import type { Metadata } from "next";
import { Spline_Sans } from "next/font/google";
import "./globals.css";

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WaveX - Pure. Raw. Immersive.",
  description: "WaveX delivers uncompressed audio streams that capture the subtle nuances of every instrument, exactly as the artist intended.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${splineSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0E0E0E] text-[#E5E3E2]">
        {children}
      </body>
    </html>
  );
}