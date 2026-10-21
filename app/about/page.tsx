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
        image="/images/about-team.webp"
        lede="A design-build house in Lacey, Washington. We design your project, supply the materials from our own showroom and build it with our own team, for homes and businesses across the South Sound."
       
        crumbs={[{ label: "About", href: "/about" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Book a Consultation →</Link>
        <Link className="btn" href="/about/showroom">Visit the showroom</Link>
      </PageHero>

      <section className="band bg-off on-light" id="our-story">
        <div className="wrap story">
          <figure className="story-fig">
            <img src="/images/about-team.webp" alt="A Heritage project lead walking a finished kitchen with a homeowner" loading="lazy" />
          </figure>
          <div className="story-copy">
            <div className="eyebrow">Our story</div>
            <h2 className="h2">Two decades of <em>South Sound homes.</em></h2>
            <p className="story-lead">
              Since 2004, our family has been remodeling homes across the South Sound. More than 800 projects later, the way we work
              hasn&rsquo;t changed: one team, start to finish.
            </p>
            <p>
              Many of our clients first knew us as 10 Day Kitchens. As they asked for more, from fully custom kitchens to whole-home
              remodels and commercial build-outs, we grew into Heritage Design &amp; Construction.
            </p>
            <p>
              Our sister company, Heritage Design Center, is our showroom in Lacey. It&rsquo;s where you see and choose your cabinetry,
              stone, tile, fixtures and hardware with a designer beside you, before our own crew builds it.
            </p>
            <dl className="story-facts">
              <div><dt>2004</dt><dd>Family owned since</dd></div>
              <div><dt>800+</dt><dd>Projects completed</dd></div>
              <div><dt>Lacey</dt><dd>Showroom &amp; design center</dd></div>
            </dl>
            <p className="story-sign"><span className="tbd">[Founder name]</span>, Founder</p>
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
