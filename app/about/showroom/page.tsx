import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/ui/JsonLd";
import { SHOWROOM_PHOTOS } from "@/components/sections/Showroom";
import Brands from "@/components/sections/Brands";
import Contact from "@/components/sections/Contact";
import { BASE_URL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about/showroom" },
  title: "Showroom in Lacey, WA",
  description:
    "Visit Heritage Design Center at 8695 Martin Way E #101 in Lacey, WA. See cabinetry, countertops, tile and stone, plumbing fixtures and hardware, and make every selection with a designer.",
};

// What a visit gets you, and how a visit runs. Kept as data so marketing can tweak the wording.
const WHY = [
  { t: "See it at full scale", p: "Cabinet doors, slabs and tile on display at real size, under real light, not on a phone screen." },
  { t: "Compare side by side", p: "Hold a door against a countertop, lay tile next to stone, and see how the finishes work together." },
  { t: "Design with a designer", p: "Sit down with a designer to plan your space, with 3D renderings so you can see it before it is built." },
  { t: "One team after the visit", p: "The same company that helps you choose also supplies and builds it. Nothing gets lost between vendors." },
];

const VISIT = [
  { t: "Book a time", p: "Pick a time that suits you. Weekdays, or Saturday by appointment." },
  { t: "Walk the showroom", p: "A designer walks you through cabinetry, stone, tile, fixtures and hardware for your project." },
  { t: "Leave with a plan", p: "Go home with your selections started and a clear next step for your remodel." },
];

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
      <section className="srh" aria-label="Heritage Design Center showroom">
        <div className="srh-media" aria-hidden="true">
          <Image src="/images/hero-showroom.webp" alt="" fill preload sizes="100vw" />
        </div>
        <div className="srh-shade" aria-hidden="true"></div>
        <div className="wrap srh-inner">
          <div className="eyebrow lead">Heritage Design Center · Lacey, WA</div>
          <h1>See it. Touch it. <em>Choose it.</em></h1>
          <p className="lede">
            Our showroom in Lacey puts cabinetry, stone, tile, fixtures and hardware in one room, with a designer beside you to bring
            it all together.
          </p>
          <div className="btns">
            <Link className="btn btn-chrome" href="/contact">Book a showroom visit →</Link>
            <a className="btn" href={SITE.directions} target="_blank" rel="noopener">Get directions ↗</a>
          </div>
        </div>
        <dl className="srh-bar wrap">
          <div><dt>Visit</dt><dd><a href={SITE.directions} target="_blank" rel="noopener">{SITE.street}, {SITE.city}</a></dd></div>
          <div><dt>Hours</dt><dd>{SITE.hours}</dd></div>
          <div><dt>Showroom</dt><dd><a href={SITE.showroomTel}>{SITE.showroomPhone}</a></dd></div>
        </dl>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL + "/" },
              { "@type": "ListItem", position: 2, name: "About", item: BASE_URL + "/about" },
              { "@type": "ListItem", position: 3, name: "Showroom", item: BASE_URL + "/about/showroom" },
            ],
          }}
        />
      </section>

      <section className="band bg-off on-light">
        <div className="wrap srw">
          <div className="srw-head">
            <div className="eyebrow">Why visit</div>
            <h2 className="h2">One visit. <em>Every decision.</em></h2>
            <p>Most remodels stall on choices. At the showroom you make them in an afternoon, with everything in front of you.</p>
          </div>
          <ol className="srw-list">
            {WHY.map((w, i) => (
              <li key={w.t}>
                <span className="srw-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{w.t}</h3>
                <p>{w.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band bg-graph srg" aria-label="Inside the showroom">
        <div className="wrap">
          <div className="srg-head">
            <div className="eyebrow">Inside the showroom</div>
            <h2 className="h2">Walk through <em>the floor.</em></h2>
          </div>
          <div className="srg-grid">
            {SHOWROOM_PHOTOS.map((p, i) => (
              <figure key={p.src} className={`srg-${i}`}>
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 860px) 100vw, 40vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>

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

      <section className="band bg-lime on-light srv">
        <div className="wrap">
          <div className="srv-head">
            <div className="eyebrow">How a visit works</div>
            <h2 className="h2">Complimentary, <em>and unhurried.</em></h2>
          </div>
          <ol className="srv-steps">
            {VISIT.map((v, i) => (
              <li key={v.t}>
                <span className="srv-n">{i + 1}</span>
                <h3>{v.t}</h3>
                <p>{v.p}</p>
              </li>
            ))}
          </ol>
          <div className="srv-cta"><Link className="btn btn-ink" href="/contact">Book a showroom visit →</Link></div>
        </div>
      </section>

      <section className="split bg-off on-light">
        <div className="sphoto" role="img" aria-label="The Heritage Design Center showroom floor" style={{ backgroundImage: "url(/images/sr-design-review.webp)" }}></div>
        <div className="copy">
          <div className="eyebrow">Plan your visit</div>
          <h2 className="h2">Visit us <em>in Lacey.</em></h2>
          <div className="info">
            <div><small>Address</small><a href={SITE.directions} target="_blank" rel="noopener">{SITE.street}, {SITE.city}, {SITE.region} {SITE.zip}</a></div>
            <div><small>Hours</small><span>{SITE.hours}</span></div>
            <div><small>Showroom phone</small><a href={SITE.showroomTel}>{SITE.showroomPhone}</a></div>
          </div>
          <div className="btns">
            <Link className="btn btn-ink" href="/contact">Book a showroom visit →</Link>
            <a className="btn" href="https://www.heritagedesignctr.com" target="_blank" rel="noopener">heritagedesignctr.com ↗</a>
          </div>
        </div>
      </section>

      <Brands />
      <Contact title={<>Come see it <em>in person.</em></>} text="Book a complimentary showroom visit and walk through every finish with a designer." photo={{ src: "/images/sr-consult.webp", alt: "Designers going over a material board with a client" }} />
    </>
  );
}
