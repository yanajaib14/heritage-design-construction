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
      <TrustBand />
      <Services />
      <Programs />
      <HomePortfolio />
      <WhyReviews />
      <Showroom extras />
      <ServiceAreas />
      <Contact photo={{ src: "/images/sr-consult.webp", alt: "Designers going over a material board with a client" }} />
    </>
  );
}
