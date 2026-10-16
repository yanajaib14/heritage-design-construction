import Header from "@/components/sections/Header";
import MenuSheet from "@/components/sections/MenuSheet";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Kitchens from "@/components/sections/Kitchens";
import KitchenOptions from "@/components/sections/KitchenOptions";
import TenDay from "@/components/sections/TenDay";
import Brands from "@/components/sections/Brands";
import FastBath from "@/components/sections/FastBath";
import Why from "@/components/sections/Why";
import Portfolio from "@/components/sections/Portfolio";
import Showroom from "@/components/sections/Showroom";
import Stories from "@/components/sections/Stories";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Resources from "@/components/sections/Resources";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SiteEffects from "@/components/SiteEffects";

export default function Home() {
  return (
    <>
      <Header />
      <MenuSheet />
      <main id="top">
        <Hero />
        <Services />
        <Kitchens />
        <KitchenOptions />
        <TenDay />
        <Brands />
        <FastBath />
        <Why />
        <Portfolio />
        <Showroom />
        <Stories />
        <ServiceAreas />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
