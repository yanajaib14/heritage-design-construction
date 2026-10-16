import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import Brands from "@/components/sections/Brands";
import Contact from "@/components/sections/Contact";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Showroom in Lacey, WA",
  description:
    "Visit Heritage Design Center at 8695 Martin Way E #101 in Lacey, WA. See cabinetry, countertops, tile and stone, plumbing fixtures and hardware, and make every selection with a designer.",
};

export default function ShowroomPage() {
  return (
    <>
      <PageHero
        eyebrow="Heritage Design Center Showroom"
        title={<>See it. Touch it. <em>Choose it.</em></>}
        lede="Every Heritage project is selected in person at our sister showroom in Lacey. Cabinetry, stone, tile, fixtures and hardware, all on display and all side by side with a designer."
        image="/images/hero-showroom.webp"
        crumbs={[{ label: "About", href: "/about" }, { label: "Showroom", href: "/about/showroom" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Book a showroom visit →</Link>
        <a className="btn" href={SITE.directions} target="_blank" rel="noopener">Get directions ↗</a>
      </PageHero>

      <section className="band bg-off on-light">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <div className="eyebrow">On display</div>
              <h2 className="h2">Everything for your project, <em>under one roof.</em></h2>
            </div>
            <p>Heritage Design Center supplies builders and homeowners. Heritage Design &amp; Construction clients make all of their selections here.</p>
          </div>
          <div className="cards">
            <div className="wc"><Icon name="layers" /><h3>Cabinetry</h3><p>Custom and semi-custom lines in a range of door styles, woods and finishes.</p></div>
            <div className="wc"><Icon name="cube" /><h3>Countertops</h3><p>Natural stone and quartz surfaces you can see at full scale.</p></div>
            <div className="wc"><Icon name="grid" /><h3>Tile &amp; stone</h3><p>Floor, wall and backsplash tile alongside natural stone.</p></div>
            <div className="wc"><Icon name="drop" /><h3>Plumbing fixtures</h3><p>Faucets, sinks, showers and tubs for kitchens and baths.</p></div>
            <div className="wc"><Icon name="key" /><h3>Hardware</h3><p>Pulls, knobs and finishing details to complete the look.</p></div>
            <div className="wc"><Icon name="pencil" /><h3>Design help</h3><p>A designer to pull samples together and keep every choice working as one.</p></div>
          </div>
        </div>
      </section>

      <section className="split bg-off on-light">
        <div className="sphoto" role="img" aria-label="Material selection boards with stone, tile and finish samples" style={{ backgroundImage: "url(/images/showroom.webp)" }}></div>
        <div className="copy">
          <div className="eyebrow">Plan your visit</div>
          <h2 className="h2">Visit us <em>in Lacey.</em></h2>
          <div className="info">
            <div><small>Address</small><span>{SITE.street}, {SITE.city}, {SITE.region} {SITE.zip}</span></div>
            <div><small>Hours</small><span>{SITE.hours}</span></div>
            <div><small>Showroom phone</small><a href="tel:+13605573441">{SITE.showroomPhone}</a></div>
          </div>
          <div className="btns">
            <Link className="btn btn-ink" href="/contact">Book a showroom visit →</Link>
            <a className="btn" href="https://www.heritagedesignctr.com" target="_blank" rel="noopener">heritagedesignctr.com ↗</a>
          </div>
        </div>
      </section>

      <Brands />
      <Contact />
    </>
  );
}
