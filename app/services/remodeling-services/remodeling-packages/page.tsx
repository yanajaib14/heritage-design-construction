import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Split } from "@/components/ui/Blocks";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/services/remodeling-services/remodeling-packages" },
  title: "Remodeling Packages | 10-Day Kitchen, Cabinet Refacing & Fast Bath",
  description:
    "Three focused remodeling packages from one South Sound team: the 10-Day Kitchen Program, cabinet refacing and the Fast Bath Program, with finishes chosen in our Lacey showroom.",
};

const R = "/services/remodeling-services";

// One page for the three focused programs; each keeps its own detailed page.
const PACKAGES = [
  {
    eyebrow: "10-Day Kitchen Program",
    title: <>A new kitchen <em>in 10 business days.</em></>,
    text: "Same layout, no months of disruption. A complete kitchen for qualified same-layout projects, planned up front so the install runs on a fixed schedule.",
    rows: ["Keeps your existing layout", "Finishes chosen in our showroom", <>Pricing: <span className="tbd">[to confirm]</span></>],
    image: "/images/kitchens.webp",
    alt: "A finished kitchen from the 10-Day Kitchen Program",
    href: `${R}/kitchen-remodeling/10-day-kitchen-program`,
    cta: "10-Day Kitchen Program",
  },
  {
    eyebrow: "Cabinet refacing",
    title: <>A new look, <em>same layout.</em></>,
    text: "New doors, drawer fronts and finishes on your existing cabinet boxes, for kitchens whose layout already works.",
    rows: ["Keeps your cabinet boxes", "New doors, fronts and hardware", <>Pricing: <span className="tbd">[to confirm]</span></>],
    image: "/images/rf-white-shaker.webp",
    alt: "White shaker cabinet doors after refacing",
    href: `${R}/kitchen-remodeling/cabinet-refacing`,
    cta: "Cabinet refacing",
  },
  {
    eyebrow: "Fast Bath Program",
    title: <>A better bathroom, <em>made easy.</em></>,
    text: "Focused bathroom upgrades that keep your layout, planned and installed by our local team.",
    rows: ["Keeps your bathroom layout", "Tile, vanity and fixtures from our showroom", <>Pricing: <span className="tbd">[to confirm]</span></>],
    image: "/images/fb-room.webp",
    alt: "A bathroom finished through the Fast Bath Program",
    href: `${R}/bathroom-remodeling/fast-bath-program`,
    cta: "Fast Bath Program",
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Remodeling packages"
        title={<>Focused remodels, <em>clear scope.</em></>}
        image="/images/kitchens.webp"
        lede="When your layout already works, one of our packages gets you a new kitchen or bath with less time and disruption."
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Remodeling", href: R },
          { label: "Remodeling Packages", href: `${R}/remodeling-packages` },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">Book a consultation →</Link>
      </PageHero>
      {PACKAGES.map((p, i) => (
        <Split
          key={p.href}
          eyebrow={p.eyebrow}
          title={p.title}
          text={p.text}
          rows={p.rows}
          image={p.image}
          imageAlt={p.alt}
          flip={i % 2 === 1}
        >
          <div className="btns"><Link className="btn btn-ink" href={p.href}>{p.cta} →</Link></div>
        </Split>
      ))}
      <Contact title={<>Not sure which fits? <em>Let’s talk it through.</em></>} />
    </>
  );
}
