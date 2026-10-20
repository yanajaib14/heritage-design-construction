import type { Metadata } from "next";
import Hero, { TrustPhone } from "@/components/sections/Hero";
import ThreeWays from "@/components/sections/ThreeWays";
import TenDay from "@/components/sections/TenDay";
import FastBath from "@/components/sections/FastBath";
import HomePortfolio from "@/components/sections/HomePortfolio";
import WhyReviews from "@/components/sections/WhyReviews";
import Showroom from "@/components/sections/Showroom";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustPhone />
      <ThreeWays />
      <TenDay />
      <FastBath />
      <HomePortfolio />
      <WhyReviews />
      <Showroom extras />
      <Contact />
    </>
  );
}
