import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Cards, Faq, Steps, Intro, Tbd } from "@/components/ui/Blocks";
import FastBath from "@/components/sections/FastBath";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Fast Bath Program | Bathroom Upgrades in About 3 Days",
  description:
    "Fast, quality bathroom upgrades in about 3 days, keeping your layout: tub-to-shower and shower-to-tub conversions, tub and shower replacements, and vanity and fixture upgrades.",
};

const F = "/services/remodeling-services/bathroom-remodeling/fast-bath-program";

export default function FastBathPage() {
  return (
    <>
      <PageHero
        eyebrow="Fast Bath Program"
        title={<>A better bathroom, <em>in about 3 days.</em></>}
        lede="Keep your layout and get a quality upgrade, fast. Fast Bath is the quickest way to a bathroom you love, built with the same care as every Heritage project."
        image="/images/fb-after.webp"
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Remodeling", href: "/services/remodeling-services" },
          { label: "Bathrooms", href: "/services/remodeling-services/bathroom-remodeling" },
          { label: "Fast Bath", href: F },
        ]}
      >
        <Link className="btn btn-chrome" href={`${F}/bathroom-ai-estimator`}>Get my estimate →</Link>
        <Link className="btn" href="/contact">Book a consultation</Link>
      </PageHero>
      <Cards
        eyebrow="What Fast Bath covers"
        title={<>Four ways <em>to upgrade.</em></>}
        cols={4}
        cards={[
          { icon: "drop", title: "Tub-to-shower", text: "Swap a dated tub for a low-threshold walk-in shower." },
          { icon: "drop", title: "Shower-to-tub", text: "Bring back a tub where you want one." },
          { icon: "layers", title: "Tub & shower replacements", text: "New surround, fixtures and glass, without a full gut." },
          { icon: "key", title: "Vanity & fixtures", text: "Fresh vanity, faucets and lighting to finish the room." },
        ]}
      />
      <FastBath />
      <Steps
        eyebrow="How it works"
        title={<>Simple, <em>start to finish.</em></>}
        steps={[
          { title: "Estimate", text: "Get a ballpark price online, then book a visit." },
          { title: "Select", text: "Choose finishes and fixtures with our team." },
          { title: "Install", text: "Your upgrade is installed in about 3 days." },
        ]}
      />
      <Intro eyebrow="Investment" title={<>Fast Bath <em>pricing.</em></>} bg="paper">
        <p><Tbd>[Fast Bath starting price to confirm.]</Tbd></p>
      </Intro>
      <Faq
        title={<>Fast Bath <em>questions.</em></>}
        items={[
          { q: "How long does Fast Bath take?", a: "Fast Bath upgrades are completed in about 3 days, because the layout stays the same." },
          { q: "Can I move my plumbing or change the layout?", a: "Fast Bath keeps the existing layout. If you want to change it, a custom bathroom remodel is the right fit, and we design and build those too." },
          { q: "Is there a warranty?", a: "Yes. Our work is backed by a 5-year warranty." },
        ]}
      />
      <Contact />
    </>
  );
}
