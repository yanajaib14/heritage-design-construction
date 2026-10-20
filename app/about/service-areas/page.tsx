import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Contact from "@/components/sections/Contact";
import { CITIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | South Sound Remodeling",
  description:
    "Heritage Design & Construction designs and builds across the South Sound: Olympia, Lacey, Tumwater, Tacoma, Puyallup, Lakewood, Gig Harbor, Federal Way, Shelton and more.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title={<>Building across <em>the South Sound.</em></>}
        lede="Based in Lacey, we design and build in twenty communities across Thurston, Pierce, south King, Lewis and Mason counties."
        crumbs={[{ label: "About", href: "/about" }, { label: "Service Areas", href: "/about/service-areas" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Book a Consultation →</Link>
      </PageHero>

      <ServiceAreas />

      <section className="band bg-paper on-light">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <div className="eyebrow">All communities</div>
              <h2 className="h2">Where <em>we build.</em></h2>
            </div>
            <p>Don&apos;t see your town? Call us. If you&apos;re near the South Sound, there&apos;s a good chance we can help.</p>
          </div>
          <ul className="city-grid">
            {CITIES.map((c) => (
              <li key={c}>
                {c}
                <small>{c === "Lacey" ? "Home base and showroom" : "Kitchens · Baths · Whole home"}</small>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact image="/images/pf-bathview.webp" />
    </>
  );
}
