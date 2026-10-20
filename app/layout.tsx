import type { Metadata } from "next";
import { Source_Serif_4, Manrope } from "next/font/google";
import "./globals.css";
import "./site.css";
import "./pages.css";
import "./motion.css";
import "./editorial.css";
import Header from "@/components/sections/Header";
import MenuSheet from "@/components/sections/MenuSheet";
import MobileBar from "@/components/MobileBar";
import Footer from "@/components/sections/Footer";
import SiteEffects from "@/components/SiteEffects";
import JsonLd from "@/components/ui/JsonLd";
import { BASE_URL, CITIES, SAME_AS, SITE } from "@/lib/site";

const serif = Source_Serif_4({
  variable: "--font-serif",
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
  metadataBase: new URL(BASE_URL),
  openGraph: { type: "website", siteName: SITE.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
  title: {
    default: "Heritage Design & Construction | Custom Kitchens & Remodeling in Lacey, WA",
    template: "%s | Heritage Design & Construction",
  },
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
    <html lang="en" data-scroll-behavior="smooth" className={`${serif.variable} ${manrope.variable}`}>
      <body>
        <Header />
        <MenuSheet />
        <main id="top">{children}</main>
        <Footer />
        <MobileBar />
        <SiteEffects />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            "@id": `${BASE_URL}/#business`,
            name: SITE.name,
            url: BASE_URL,
            logo: `${BASE_URL}/brand/heritage-logo.webp`,
            image: `${BASE_URL}/images/hero-showroom.webp`,
            hasMap: SITE.directions,
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:30" },
            ],
            ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
            telephone: "+1-360-557-3444",
            foundingDate: "2004",
            address: {
              "@type": "PostalAddress",
              streetAddress: SITE.street,
              addressLocality: SITE.city,
              addressRegion: SITE.region,
              postalCode: SITE.zip,
              addressCountry: "US",
            },
            areaServed: CITIES.map((c) => ({ "@type": "City", name: `${c}, WA` })),
          }}
        />
      </body>
    </html>
  );
}
