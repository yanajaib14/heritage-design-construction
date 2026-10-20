import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Intro, Tbd } from "@/components/ui/Blocks";
import FastBath from "@/components/sections/FastBath";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Bathroom AI Estimator",
  description: "Get a ballpark price for your Fast Bath upgrade in a few quick steps with the Heritage Bathroom AI Estimator.",
};

export default function EstimatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Bathroom AI Estimator"
        title={<>Your ballpark price, <em>in four steps.</em></>}
        lede="Answer four quick questions about your bathroom and get an estimated range for your Fast Bath upgrade."
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Bathrooms", href: "/services/remodeling-services/bathroom-remodeling" },
          { label: "Fast Bath", href: "/services/remodeling-services/bathroom-remodeling/fast-bath-program" },
          { label: "Estimator", href: "/services/remodeling-services/bathroom-remodeling/fast-bath-program/bathroom-ai-estimator" },
        ]}
      >
        <a className="btn btn-chrome" href="#estimator">Start my estimate →</a>
      </PageHero>
      <FastBath />
      <Intro eyebrow="About the estimate" title={<>A starting point, <em>not a quote.</em></>} bg="paper">
        <p>The estimator gives a ballpark range. Your final price is confirmed after a visit with our team.</p>
        <p><Tbd>[How the AI estimator works, and whether photos can be uploaded.]</Tbd></p>
      </Intro>
      <Contact variant="ink" image="/images/fb-after.webp" />
    </>
  );
}
