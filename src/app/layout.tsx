import type { Metadata } from "next";
import { poppins, satoshi } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace | Get Access to Hundreds of Courses",
  description:
    "Discover courses, build your skills and grow your career with ByteSpace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshi.variable}`}>
      <body className="relative flex min-h-screen flex-col bg-white font-body text-body-m text-neutral-950 antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}