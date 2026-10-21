import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/ui/JsonLd";
import Contact from "@/components/sections/Contact";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/services/construction-services" },
  title: "Commercial Construction & Tenant Improvements",
  description:
    "Commercial construction and tenant improvements (TI) in the South Sound for tenants, landlords and brokers, designed, supplied and built by one Lacey, WA team.",
};

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Construction services"
        title={<>Commercial spaces, <em>built right.</em></>}
        lede="Commercial construction and tenant improvements for tenants, landlords and brokers, with the same design, supply and build team behind our residential work."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Construction", href: "/services/construction-services" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Discuss your project →</Link>
        <Link className="btn" href="/services/construction-services/commercial-construction">Commercial construction</Link>
        <Link className="btn" href="/services/construction-services/commercial-construction/tenant-improvements-ti">Tenant improvements</Link>
      </PageHero>

      <section className="band bg-off on-light" id="ti">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <div className="eyebrow">Tenant improvements</div>
              <h2 className="h2">Built for <em>everyone at the table.</em></h2>
            </div>
            <p>Whether you lease the space, own the building or represent either side, one team handles design, materials and construction.</p>
          </div>
          <div className="cards">
            <div className="wc"><Icon name="key" /><h3>Tenants</h3><p>A space that fits how your business works, designed and built under one contract.</p></div>
            <div className="wc"><Icon name="building" /><h3>Landlords</h3><p>Build-outs that make your space ready to lease and ready to move in.</p></div>
            <div className="wc"><Icon name="chat" /><h3>Brokers</h3><p>A single design-build partner to bring into your clients&apos; deals.</p></div>
          </div>
        </div>
      </section>

      <section className="band bg-graph">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <div className="eyebrow">How it works</div>
              <h2 className="h2">Design, supply, build. <em>One team.</em></h2>
            </div>
          </div>
          <ol className="steps">
            <li><span className="n">01</span><h3>Design</h3><p>Space planning and design for your layout, finishes and use.</p></li>
            <li><span className="n">02</span><h3>Supply</h3><p>Cabinetry, counters, tile, fixtures and hardware from Heritage Design Center.</p></li>
            <li><span className="n">03</span><h3>Build</h3><p>Construction managed and built by our own team.</p></li>
          </ol>
        </div>
      </section>

      <section className="band bg-paper on-light">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <div className="eyebrow">Commercial projects</div>
              <h2 className="h2">Recent <em>commercial work.</em></h2>
            </div>
          </div>
          <div className="cards">
            <div className="ph shot" style={{ aspectRatio: "4/3" }}><small>Photo to come</small>Finished commercial interior</div>
            <div className="ph shot" style={{ aspectRatio: "4/3" }}><small>Photo to come</small>Tenant improvement build-out</div>
            <div className="ph shot" style={{ aspectRatio: "4/3" }}><small>Photo to come</small>Crew on a commercial job site</div>
          </div>
        </div>
      </section>

      <Contact title={<>Let’s talk about <em>your build.</em></>} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Commercial construction and tenant improvements",
          provider: { "@type": "GeneralContractor", name: SITE.name, telephone: "+1-360-557-3444" },
          areaServed: "South Sound, Washington",
        }}
      />
    </>
  );
}
