import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Contact from "@/components/sections/Contact";
import { SITE } from "@/lib/site";

// The towns we serve, grouped by county.
const COUNTIES = [
  { n: "Thurston County", towns: ["Lacey (home base and showroom)", "Olympia", "Tumwater", "Yelm"] },
  { n: "Pierce County", towns: ["Tacoma", "Puyallup", "Lakewood", "University Place", "Gig Harbor", "Bonney Lake", "Spanaway", "Steilacoom", "DuPont", "Graham", "Fife"] },
  { n: "South King County", towns: ["Federal Way", "Auburn"] },
  { n: "Lewis County", towns: ["Centralia", "Chehalis"] },
  { n: "Mason County", towns: ["Shelton"] },
];

export const metadata: Metadata = {
  alternates: { canonical: "/about/service-areas" },
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

      <section className="band bg-graph sa2">
        <div className="wrap sa2-grid">
          <div className="sa2-head">
            <div className="eyebrow">By county</div>
            <h2 className="h2">Five counties, <em>one team.</em></h2>
            <p>
              Wherever you are in the South Sound, it works the same way: a consultation in your home or at our Lacey showroom, every
              selection made in one place, and our own crew on site.
            </p>
            <div className="sa2-call">
              <small>Don&apos;t see your town?</small>
              <a href={SITE.tel}>Call {SITE.phone}</a>
            </div>
          </div>
          <ol className="sa2-list">
            {COUNTIES.map((c, i) => (
              <li key={c.n}>
                <span className="sa2-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.n}</h3>
                <p>{c.towns.join(" · ")}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Contact />
    </>
  );
}
