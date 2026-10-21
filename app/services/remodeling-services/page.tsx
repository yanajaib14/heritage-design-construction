import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import Kitchens from "@/components/sections/Kitchens";
import KitchenOptions from "@/components/sections/KitchenOptions";
import TenDay from "@/components/sections/TenDay";
import FastBath from "@/components/sections/FastBath";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/services/remodeling-services" },
  title: "Remodeling Services | Kitchens, Baths & Whole Home",
  description:
    "Custom kitchen remodels, cabinet refacing, the 10-Day Kitchen Program, bathroom remodels, the Fast Bath Program and whole-home remodeling across the South Sound.",
};

const SERVICES = [
  "Custom kitchen remodeling",
  "Cabinet refacing",
  "10-Day Kitchen Program",
  "Bathroom remodeling",
  "Fast Bath Program",
  "Whole-home remodeling",
];

export default function RemodelingPage() {
  return (
    <>
      <PageHero
        eyebrow="Remodeling services"
        title={<>Kitchens, baths <em>and whole homes.</em></>}
        lede="From a fully custom kitchen to a three-day bath upgrade, every remodel is designed, supplied and built by one team, with every finish chosen in our Lacey showroom."
       
        crumbs={[{ label: "Services", href: "/services" }, { label: "Remodeling", href: "/services/remodeling-services" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Book a Consultation →</Link>
        <a className="btn" href="#fast-bath">Fast Bath</a>
      </PageHero>

      <Kitchens />

      <section className="split bg-off on-light" id="whole-home">
        <div className="copy">
          <div className="eyebrow">Whole-home remodeling</div>
          <h2 className="h2">One vision, <em>every room.</em></h2>
          <p>When a kitchen is only the start, we plan the whole home together: layout, flow, finishes and structure, designed as one and built by one team.</p>
          <ul className="rows">
            <li>Open layouts and structural changes</li>
            <li>Kitchens, baths and living spaces in one plan</li>
            <li>Consistent finishes chosen in our showroom</li>
            <li>One project manager from design to walkthrough</li>
          </ul>
          <div className="btns"><Link className="btn btn-ink" href="/services/remodeling-services/whole-home-remodeling">Whole-home remodeling →</Link></div>
        </div>
        <div className="sphoto" role="img" aria-label="An open kitchen and living space after a whole-home remodel" style={{ backgroundImage: "url(/images/wh-open-plan.webp)" }} />
      </section>

      <KitchenOptions />

      <section className="band bg-paper on-light" id="refacing">
        <div className="wrap pintro">
          <div className="left" style={{ display: "grid", gap: 22 }}>
            <div className="eyebrow">Cabinet refacing</div>
            <h2 className="h2">A new look, <em>same layout.</em></h2>
          </div>
          <div className="prose">
            <p>If your cabinet boxes are solid and the layout works, refacing gives your kitchen a new face: <strong>new doors, drawer fronts and finishes</strong> on your existing cabinets.</p>
            <p>You choose door styles, colors and hardware in our showroom, and our team handles the rest.</p>
            <p>Pricing: <span className="tbd">[Refacing pricing to confirm]</span></p>
            <div className="btns"><Link className="btn btn-ink" href="/services/remodeling-services/kitchen-remodeling/cabinet-refacing">Cabinet refacing →</Link></div>
          </div>
        </div>
      </section>

      <TenDay />

      <section className="split bg-off on-light" id="bathrooms">
        <div className="sphoto" role="img" aria-label="Spa-style primary bathroom" style={{ backgroundImage: "url(/images/pf-bathview.webp)" }}></div>
        <div className="copy">
          <div className="eyebrow">Bathroom remodeling</div>
          <h2 className="h2">Baths designed <em>to unwind.</em></h2>
          <p>Custom, high-end primary suites, hall baths and powder rooms, with tile, stone, vanities and fixtures selected in our showroom.</p>
          <ul className="rows">
            <li>Primary suites</li>
            <li>Hall baths</li>
            <li>Powder rooms</li>
          </ul>
          <div className="btns"><Link className="btn btn-ink" href="/services/remodeling-services/bathroom-remodeling">Bathroom remodeling →</Link><Link className="btn" href="/services/remodeling-services/bathroom-remodeling/fast-bath-program">Fast Bath →</Link></div>
        </div>
      </section>

      <FastBath />
      <Portfolio />
      <Contact title={<>Ready to remodel? <em>Let’s plan it.</em></>} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": SERVICES.map((name) => ({
            "@type": "Service",
            name,
            provider: { "@type": "GeneralContractor", name: SITE.name, telephone: "+1-360-557-3444" },
            areaServed: "South Sound, Washington",
          })),
        }}
      />
    </>
  );
}
