import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/ui/JsonLd";
import Showroom from "@/components/sections/Showroom";
import Contact from "@/components/sections/Contact";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/services/design-services" },
  title: "Design Services | Space Planning & 3D Renderings",
  description:
    "Space planning, 3D renderings and in-person selections at our Lacey showroom. Heritage designers plan kitchens, baths, whole homes and commercial spaces.",
};

export default function DesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Design services"
        title={<>Designed before <em>day one.</em></>}
        lede="Space planning, 3D renderings and selections at our showroom, so you see your project and approve every detail before construction begins."
       
        crumbs={[{ label: "Services", href: "/services" }, { label: "Design", href: "/services/design-services" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Start your design →</Link>
      </PageHero>

      <section className="band bg-off on-light">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <div className="eyebrow">What&apos;s included</div>
              <h2 className="h2">From first sketch <em>to final finish.</em></h2>
            </div>
          </div>
          <div className="cards">
            <div className="wc"><Icon name="grid" /><h3>Space planning</h3><p>Layouts that fit how you cook, gather and live, or how your business runs.</p></div>
            <div className="wc"><Icon name="cube" /><h3>3D renderings</h3><p>See your space before it is built, and adjust it until it feels right.</p></div>
            <div className="wc"><Icon name="store" /><h3>Showroom selections</h3><p>Choose cabinetry, stone, tile, fixtures and hardware in person with your designer.</p></div>
          </div>
        </div>
      </section>

      <section className="band bg-graph">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <div className="eyebrow">The design process</div>
              <h2 className="h2">Plan it. See it. <em>Build it.</em></h2>
            </div>
          </div>
          <ol className="steps">
            <li><span className="n">01</span><h3>Consultation</h3><p>We meet in your home or at the showroom to talk through goals, style and how you use the space.</p></li>
            <li><span className="n">02</span><h3>Design &amp; renderings</h3><p>Your designer plans the layout and shows it to you in 3D.</p></li>
            <li><span className="n">03</span><h3>Selections</h3><p>Every finish is chosen at Heritage Design Center, then our team builds what you approved.</p></li>
          </ol>
        </div>
      </section>

      <Showroom />
      <Contact title={<>Let’s design it <em>together.</em></>} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Design services",
          description: "Space planning, 3D renderings and showroom selections.",
          provider: { "@type": "GeneralContractor", name: SITE.name, telephone: "+1-360-557-3444" },
          areaServed: "South Sound, Washington",
        }}
      />
    </>
  );
}
