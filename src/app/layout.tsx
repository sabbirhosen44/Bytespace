import type { Metadata } from "next";
import { poppins, satoshi } from "@/lib/fonts";
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
      <body className="font-body text-body-m bg-white text-neutral-950 antialiased">
        {children}
      </body>
    </html>
  );
}