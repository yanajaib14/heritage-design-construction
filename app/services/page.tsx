import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Services from "@/components/sections/Services";
import KitchenOptions from "@/components/sections/KitchenOptions";
import Why from "@/components/sections/Why";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Services | Design, Remodeling & Construction",
  description:
    "Design, remodeling and construction from one company in Lacey, WA: custom kitchens, cabinet refacing, the 10-Day Kitchen and Fast Bath programs, whole-home remodels and commercial tenant improvements.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>We design, remodel <em>and build.</em></>}
        lede="Custom kitchens and whole-home remodels lead what we do, backed by bathroom remodeling, design services and commercial construction, all from one team."
       
        crumbs={[{ label: "Services", href: "/services" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Book a Consultation →</Link>
      </PageHero>
      <Services />
      <KitchenOptions />
      <Why />
      <Contact title={<>Your project, <em>start to finish.</em></>} />
    </>
  );
}
