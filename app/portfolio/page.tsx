import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Portfolio from "@/components/sections/Portfolio";
import Stories from "@/components/sections/Stories";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Portfolio | Kitchens & Bathrooms",
  description: "Kitchens and bathrooms designed and built by Heritage Design & Construction across the South Sound.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Spaces we&apos;ve <em>designed and built.</em></>}
        lede="A selection of kitchens and bathrooms from our team. Whole-home and commercial projects are coming soon."
       
        crumbs={[{ label: "Portfolio", href: "/portfolio" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Start your project →</Link>
      </PageHero>
      <Portfolio />
      <Stories />
      <Contact title={<>Like what you see? <em>Let’s build yours.</em></>} />
    </>
  );
}
