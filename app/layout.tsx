import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import "./site.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Heritage Design & Construction | Custom Kitchens & Remodeling in Lacey, WA",
  description:
    "Custom kitchens, whole-home remodeling, cabinet refacing and the 10-Day Kitchen and Fast Bath programs. Showroom at 8695 Martin Way E #101, Lacey, WA.",
  icons: { icon: "/brand/heritage-mark.webp" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
