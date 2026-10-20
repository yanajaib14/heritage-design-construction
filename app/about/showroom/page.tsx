import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Brands from "@/components/sections/Brands";
import Contact from "@/components/sections/Contact";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Showroom in Lacey, WA",
  description:
    "Visit Heritage Design Center at 8695 Martin Way E #101 in Lacey, WA. See cabinetry, countertops, tile and stone, plumbing fixtures and hardware, and make every selection with a designer.",
};

// Brands and links from heritagedesignctr.com/collections.
const CATALOG: { t: string; p: string; brands: { n: string; d: string; url: string }[]; note?: string }[] = [
  {
    t: "Cabinetry",
    p: "Four cabinet lines, each at a different price point and lead time.",
    brands: [
      { n: "KCD Cabinetry", d: "Stock to semi-custom", url: "https://www.kcdus.com/" },
      { n: "Lectus Cabinetry", d: "Semi-custom, fast lead times", url: "https://www.lectuscabinets.com/" },
      { n: "Merit Cabinetry", d: "Custom and fully custom", url: "https://www.merit-kitchens.com/custom-kitchen-cabinetry/" },
      { n: "Showplace Cabinetry", d: "Premium custom", url: "https://showplacecabinetry.com/" },
    ],
  },
  {
    t: "Countertops",
    p: "Engineered quartz, natural stone and wood, all at full scale.",
    brands: [
      { n: "MSI Surfaces", d: "Quartz, marble, quartzite and granite", url: "https://www.msisurfaces.com/" },
      { n: "Cambria", d: "American-made quartz", url: "https://www.cambriausa.com/" },
      { n: "Caesarstone", d: "Premium quartz, 40+ colors", url: "https://www.caesarstoneus.com" },
      { n: "Vicostone", d: "Engineered quartz with a natural look", url: "https://us.vicostone.com/" },
      { n: "J. Aaron Wood Countertops", d: "Custom butcher block and hardwood", url: "https://www.jaaronwoodcountertops.com/" },
    ],
  },
  {
    t: "Tile & stone",
    p: "Floor, wall and backsplash tile alongside natural stone.",
    brands: [
      { n: "MSI Surfaces", d: "Ceramic, porcelain, natural stone and mosaic", url: "https://www.msisurfaces.com/" },
    ],
  },
  {
    t: "Flooring",
    p: "[Flooring description]",
    brands: [],
    note: "[Flooring brands and links]",
  },
  {
    t: "Fixtures & hardware",
    p: "Pulls, knobs and finishing details to complete the look.",
    brands: [
      { n: "Top Knobs", d: "3,000+ styles in 15+ finishes", url: "https://www.topknobs.com/" },
      { n: "Jeffrey Alexander", d: "Decorative hardware and bath accessories", url: "https://jeffrey-alexander-hardware.com/" },
    ],
  },
  {
    t: "Shower & bath",
    p: "Shower systems, freestanding tubs, vanities, surround tile, heated floors and frameless glass.",
    brands: [],
    note: "Ask a designer to walk you through the shower and bath options on display.",
  },
];

export default function ShowroomPage() {
  return (
    <>
      <PageHero
        eyebrow="Heritage Design Center Showroom"
        title={<>See it. Touch it. <em>Choose it.</em></>}
        lede="Every Heritage project is selected in person at our sister showroom in Lacey. Cabinetry, stone, tile, fixtures and hardware, all on display and all side by side with a designer."
       
        crumbs={[{ label: "About", href: "/about" }, { label: "Showroom", href: "/about/showroom" }]}
      >
        <Link className="btn btn-chrome" href="/contact">Book a showroom visit →</Link>
        <a className="btn" href={SITE.directions} target="_blank" rel="noopener">Get directions ↗</a>
      </PageHero>

      <section className="band bg-off on-light">
        <div className="wrap">
          <div className="ed-head">
            <div>
              <div className="eyebrow">On display</div>
              <h2 className="h2">The brands <em>we carry.</em></h2>
            </div>
            <p className="ed-aside">Heritage Design &amp; Construction clients make every selection here. Tap a brand to browse its full line, then see it in person at the showroom.</p>
          </div>
          <ol className="cat">
            {CATALOG.map((c, i) => (
              <li key={c.t}>
                <div className="cat-head">
                  <span className="rn">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{c.t}</h3>
                  <p>{c.p}</p>
                </div>
                {c.brands.length ? (
                  <ul className="cat-brands">
                    {c.brands.map((b) => (
                      <li key={b.n}>
                        <a href={b.url} target="_blank" rel="noopener">
                          <strong>{b.n}</strong>
                          <span>{b.d}</span>
                          <i aria-hidden="true">↗</i>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="cat-note">{c.note}</p>
                )}
              </li>
            ))}
          </ol>
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
      <Contact title={<>Come see it <em>in person.</em></>} text="Book a complimentary showroom visit and walk through every finish with a designer." />
    </>
  );
}
