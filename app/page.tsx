import type { Metadata } from "next";
import Hero, { TrustBand } from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Programs from "@/components/sections/Programs";
import HomePortfolio from "@/components/sections/HomePortfolio";
import WhyReviews from "@/components/sections/WhyReviews";
import Showroom from "@/components/sections/Showroom";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* the rest of the page rises over the pinned hero as one continuous panel */}
      <div className="home-story">
        <TrustBand />
        <Services />
        <Programs />
        <HomePortfolio />
        <WhyReviews />
        <Showroom extras />
        <ServiceAreas />
        <Contact
          backdrop={{
            src: "/images/wh-kitchen.webp",
            alt: "A finished open kitchen with a large island",
          }}
        />
      </div>
    </>
  );
}
