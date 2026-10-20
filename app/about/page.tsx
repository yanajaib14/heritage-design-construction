import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import Why from "@/components/sections/Why";
import Stories from "@/components/sections/Stories";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us",
  description:
    "Heritage Design & Construction is a family-owned design-build company in Lacey, WA. Since 2004 we have designed, supplied and built 800+ kitchens, baths and whole-home remodels across the South Sound.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Heritage"
        title={<>Family owned. <em>Built to last.</em></>}
        lede="A design-build house in Lacey, Washington. We design your project, supply the materials from our own showroom and build it with our own team, for homes and businesses across the South Sound."
       
        crumbs={[{ label: "About", href: "/about" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Book a Consultation →</Link>
        <Link className="btn" href="/about/showroom">Visit the showroom</Link>
      </PageHero>

      <section className="band bg-off on-light" id="our-story">
        <div className="wrap pintro">
          <div className="sec-head left" style={{ marginBottom: 0 }}>
            <div className="left">
              <div className="eyebrow">Our story</div>
              <h2 className="h2">Two decades of <em>South Sound homes.</em></h2>
            </div>
          </div>
          <div className="prose">
            <p>
              Heritage Design &amp; Construction has been remodeling homes across the South Sound since <strong>2004</strong>. We are
              family owned, and we have completed <strong>more than 800 projects</strong>, from custom kitchens and spa-like baths to
              whole-home remodels.
            </p>
            <p>
              You may know us as <strong>10 Day Kitchens</strong>. Our clients kept asking us for more: fully custom kitchens, whole-home
              remodels and commercial build-outs. Heritage Design &amp; Construction is the name for everything we do today.
            </p>
            <p>
              Our sister company, <strong>Heritage Design Center</strong>, is the showroom where our clients choose their cabinetry,
              countertops, tile, fixtures and hardware. One team designs it, one showroom supplies it, and one crew builds it.
            </p>
            <p className="tbd" style={{ justifySelf: "start", whiteSpace: "normal" }}>[Founder story and family photo, if you would like to add them.]</p>
          </div>
        </div>
      </section>

      <section className="band bg-graph" id="process">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <div className="eyebrow">How we work</div>
              <h2 className="h2">One company. <em>Start to finish.</em></h2>
            </div>
          </div>
          <ol className="steps">
            <li><span className="n">01</span><h3>Design</h3><p>Space planning, 3D renderings and a designer by your side from the first sketch.</p></li>
            <li><span className="n">02</span><h3>Supply</h3><p>Cabinetry, countertops, tile and stone, fixtures and hardware, chosen in person at Heritage Design Center.</p></li>
            <li><span className="n">03</span><h3>Build</h3><p>Residential remodels and commercial construction, managed and built by one team.</p></li>
          </ol>
        </div>
      </section>

      <Why showAboutLink={false} />

      <section className="band bg-paper on-light">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <div className="eyebrow">Explore</div>
              <h2 className="h2">Get to know <em>Heritage.</em></h2>
            </div>
          </div>
          <div className="cards">
            <Link className="wc" href="/about/showroom"><Icon name="store" /><h3>Our showroom</h3><p>See cabinetry, stone, tile and fixtures in person at Heritage Design Center in Lacey.</p><span className="link">Visit the showroom →</span></Link>
            <Link className="wc" href="/about/service-areas"><Icon name="home" /><h3>Service areas</h3><p>Twenty South Sound communities, from Olympia and Lacey to Tacoma, Gig Harbor and Shelton.</p><span className="link">See where we build →</span></Link>
            <Link className="wc" href="/portfolio"><Icon name="grid" /><h3>Our work</h3><p>Kitchens and bathrooms our team has designed and built.</p><span className="link">View the portfolio →</span></Link>
          </div>
        </div>
      </section>

      <Stories />
      <Contact />
    </>
  );
}
