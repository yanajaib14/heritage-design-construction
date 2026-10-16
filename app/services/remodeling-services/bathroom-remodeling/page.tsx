import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Cards, Faq, Steps, Split } from "@/components/ui/Blocks";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Bathroom Remodeling",
  description: "Custom bathroom remodels in the South Sound: primary suites, hall baths and powder rooms, plus the 3-day Fast Bath Program.",
};

const B = "/services/remodeling-services/bathroom-remodeling";

export default function BathroomPage() {
  return (
    <>
      <PageHero
        eyebrow="Bathroom remodeling"
        title={<>Baths designed <em>to unwind.</em></>}
        lede="Custom, high-end primary suites, hall baths and powder rooms, with tile, stone, vanities and fixtures selected in our showroom."
        image="/images/pf-bathview.webp"
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Remodeling", href: "/services/remodeling-services" },
          { label: "Bathroom Remodeling", href: B },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">Plan your bathroom →</Link>
        <Link className="btn" href={`${B}/fast-bath-program`}>Fast Bath</Link>
      </PageHero>
      <Cards
        eyebrow="Custom bathrooms"
        title={<>Every bath, <em>made to measure.</em></>}
        cards={[
          { icon: "drop", title: "Primary suites", text: "Spa-style retreats with custom showers, tubs and vanities." },
          { icon: "home", title: "Hall baths", text: "Durable, beautiful baths for family and guests." },
          { icon: "key", title: "Powder rooms", text: "Small rooms with big personality." },
        ]}
      />
      <Split
        eyebrow="Fast Bath Program"
        title={<>Same layout. <em>About 3 days.</em></>}
        text="When you love your layout but not your bathroom, Fast Bath delivers a quality upgrade in about three days: tub-to-shower and shower-to-tub conversions, replacements and vanity upgrades."
        image="/images/fb-after.webp"
        imageAlt="Finished bathroom after a Fast Bath upgrade"
        flip
      >
        <Link className="btn btn-ink" href={`${B}/fast-bath-program`}>Explore Fast Bath →</Link>
        <Link className="btn" href={`${B}/fast-bath-program/bathroom-ai-estimator`}>Get an estimate</Link>
      </Split>
      <Steps
        eyebrow="How it works"
        title={<>Design. Select. <em>Build.</em></>}
        steps={[
          { title: "Design", text: "Layout and design with your designer." },
          { title: "Select", text: "Tile, stone, vanities and fixtures chosen in our showroom." },
          { title: "Build", text: "Our own team builds it." },
        ]}
      />
      <Portfolio />
      <Faq
        title={<>Bathroom <em>questions.</em></>}
        items={[
          { q: "Should I choose a custom remodel or Fast Bath?", a: "Choose a custom remodel if you want to change the layout or create a fully custom space. Choose Fast Bath if you are keeping the layout and want a quality upgrade in about three days." },
          { q: "How long does a custom bathroom remodel take?", a: "[Typical timeline to confirm.]" },
        ]}
      />
      <Contact />
    </>
  );
}
