import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Faq, Steps, Split } from "@/components/ui/Blocks";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Custom Bathroom Remodeling | Lacey, Olympia & the South Sound",
  description:
    "Full custom bathroom remodels from Heritage Design & Construction: new layouts, custom showers, tubs, vanities, tile and stone, with every selection made in our Lacey showroom.",
};

const B = "/services/remodeling-services/bathroom-remodeling";

const ROOMS = [
  { t: "Primary suites", p: "Spa-style retreats with custom showers, soaking tubs, double vanities and room to breathe." },
  { t: "Hall & guest baths", p: "Durable, good-looking baths built for everyday family use and visiting guests." },
  { t: "Powder rooms", p: "Small rooms with big personality: statement vanities, wallcovering, tile and lighting." },
  { t: "Accessible baths", p: "Curbless showers, grab bars, seating and comfort-height fixtures, designed to look anything but clinical." },
];

const CHANGES = [
  { t: "A new layout", p: "Move the shower, tub, toilet or vanity to make the room work the way you live." },
  { t: "Plumbing & electrical", p: "Relocate drains and supply lines, add circuits, lighting, outlets and heated floors." },
  { t: "Walls & space", p: "Open up a cramped bath, borrow space from a closet or rework a doorway." },
  { t: "Tub to shower, or both", p: "Replace a tub with a walk-in shower, or add a freestanding tub alongside a separate shower." },
  { t: "Waterproofing done right", p: "A properly built shower system behind every tile, so the finish lasts." },
];

// Brands and links from heritagedesignctr.com/collections; generic rows have no brand on that page.
const SELECTIONS: { t: string; p: string; items: { n: string; d: string; url?: string }[] }[] = [
  {
    t: "Showers",
    p: "The centrepiece of most custom baths.",
    items: [
      { n: "Walk-in & curbless showers", d: "Low or zero threshold, linear drains" },
      { n: "Shower systems", d: "Rain heads, handhelds, body sprays" },
      { n: "Frameless glass", d: "Panels, doors and enclosures" },
      { n: "Niches & benches", d: "Built-in storage and seating" },
    ],
  },
  {
    t: "Tubs",
    p: "From a quiet soak to a sculptural statement.",
    items: [
      { n: "Freestanding tubs", d: "A focal point for primary suites" },
      { n: "Soaking & alcove tubs", d: "Deep soakers and tub-shower combinations" },
    ],
  },
  {
    t: "Vanities & cabinetry",
    p: "Custom and semi-custom lines from the showroom.",
    items: [
      { n: "KCD Cabinetry", d: "Stock to semi-custom", url: "https://www.kcdus.com/" },
      { n: "Lectus Cabinetry", d: "Semi-custom, fast lead times", url: "https://www.lectuscabinets.com/" },
      { n: "Merit Cabinetry", d: "Custom and fully custom", url: "https://www.merit-kitchens.com/custom-kitchen-cabinetry/" },
      { n: "Showplace Cabinetry", d: "Premium custom", url: "https://showplacecabinetry.com/" },
    ],
  },
  {
    t: "Counters",
    p: "Quartz and natural stone for vanity tops and shower curbs.",
    items: [
      { n: "MSI Surfaces", d: "Quartz, marble, quartzite and granite", url: "https://www.msisurfaces.com/" },
      { n: "Cambria", d: "American-made quartz", url: "https://www.cambriausa.com/" },
      { n: "Caesarstone", d: "Premium quartz, 40+ colors", url: "https://www.caesarstoneus.com" },
      { n: "Vicostone", d: "Engineered quartz with a natural look", url: "https://us.vicostone.com/" },
    ],
  },
  {
    t: "Tile & stone",
    p: "Floors, shower walls, accent walls and mosaics.",
    items: [
      { n: "MSI Surfaces", d: "Ceramic, porcelain, natural stone and mosaic", url: "https://www.msisurfaces.com/" },
      { n: "Heated floors", d: "Radiant heat under tile" },
    ],
  },
  {
    t: "Hardware & finishing",
    p: "The details you touch every day.",
    items: [
      { n: "Top Knobs", d: "3,000+ styles in 15+ finishes", url: "https://www.topknobs.com/" },
      { n: "Jeffrey Alexander", d: "Decorative hardware and bath accessories", url: "https://jeffrey-alexander-hardware.com/" },
      { n: "Faucets & plumbing fixtures", d: "[Plumbing fixture brands]" },
      { n: "Lighting, mirrors & ventilation", d: "Vanity lights, mirrors and quiet exhaust fans" },
    ],
  },
];

export default function BathroomPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom bathroom remodeling"
        title={<>Baths designed <em>to unwind.</em></>}
        lede="Full custom bathroom remodels, from primary suites to powder rooms. New layouts, custom showers, tile, stone, vanities and fixtures, all selected in our showroom and built by our own team."
        image="/images/pf-bathview.webp"
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Remodeling", href: "/services/remodeling-services" },
          { label: "Bathroom Remodeling", href: B },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">Plan your bathroom →</Link>
        <a className="btn" href="#selections">See the selections</a>
      </PageHero>

      <section className="band bg-off on-light">
        <div className="wrap">
          <div className="ed-head td-h">
            <div className="eyebrow">Every kind of bath</div>
            <h2 className="h2">Made to measure, <em>room by room.</em></h2>
          </div>
          <ul className="td-ben">
            {ROOMS.map((r) => (
              <li key={r.t}>
                <h3>{r.t}</h3>
                <p>{r.p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band bg-paper on-light">
        <div className="wrap reasons">
          <div className="reasons-lead">
            <div className="eyebrow">Fully custom</div>
            <h2 className="h2">Nothing has to <em>stay where it is.</em></h2>
            <p className="td-note">A custom remodel starts from how you want the room to work, not from what&apos;s there today.</p>
            <figure className="reasons-fig">
              <div className="fig-clip"><img src="/images/pf-oslo.webp" alt="A custom wet room bathroom with a walk-in shower" loading="lazy" /></div>
            </figure>
          </div>
          <ol className="reasons-list">
            {CHANGES.map((c, i) => (
              <li key={c.t}>
                <span className="rn">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.t}</h3>
                <p>{c.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band bg-off on-light" id="selections">
        <div className="wrap">
          <div className="ed-head">
            <div>
              <div className="eyebrow">Selections</div>
              <h2 className="h2">Choose every finish, <em>in person.</em></h2>
            </div>
            <p className="ed-aside">Everything below is on display at <Link href="/about/showroom">Heritage Design Center</Link> in Lacey, where you make each choice side by side with your designer. Tap a brand to browse its full line.</p>
          </div>
          <ol className="cat">
            {SELECTIONS.map((c, i) => (
              <li key={c.t}>
                <div className="cat-head">
                  <span className="rn">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{c.t}</h3>
                  <p>{c.p}</p>
                </div>
                <ul className="cat-brands">
                  {c.items.map((b) => (
                    <li key={b.n}>
                      {b.url ? (
                        <a href={b.url} target="_blank" rel="noopener">
                          <strong>{b.n}</strong>
                          <span>{b.d}</span>
                          <i aria-hidden="true">↗</i>
                        </a>
                      ) : (
                        <div className="cat-item">
                          <strong>{b.n}</strong>
                          <span>{b.d}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Steps
        eyebrow="How it works"
        title={<>From first visit <em>to final walkthrough.</em></>}
        steps={[
          { title: "Consultation", text: "We talk through your goals, style and must-haves, in your home or at the showroom." },
          { title: "Design", text: "Your designer plans the layout and shows you the room before anything is built." },
          { title: "Selections", text: "Tile, stone, vanities, fixtures and hardware, chosen in person at Heritage Design Center." },
          { title: "Written plan", text: "A clear contract and design plan, so you know exactly what to expect." },
          { title: "Build", text: "Our own crew builds the bathroom you approved." },
          { title: "Walkthrough", text: "We go over every detail with you before the project is closed out." },
        ]}
      />

      <Split
        eyebrow="Fast Bath Program"
        title={<>Keeping your layout? <em>Go faster.</em></>}
        text="When you love your layout but not your bathroom, Fast Bath delivers a quality upgrade in about three days: tub-to-shower conversions, shower and tub replacements and vanity upgrades."
        image="/images/fb-after.webp"
        imageAlt="Finished bathroom after a Fast Bath upgrade"
        flip
      >
        <Link className="btn btn-ink" href={`${B}/fast-bath-program`}>Explore Fast Bath →</Link>
        <Link className="btn" href={`${B}/fast-bath-program/bathroom-ai-estimator`}>Get an estimate</Link>
      </Split>

      <Portfolio />

      <section className="band bg-paper on-light">
        <div className="wrap">
          <div className="ed-head td-h">
            <div className="eyebrow">Investment</div>
            <h2 className="h2">What a custom bathroom <em>costs.</em></h2>
          </div>
          <p className="td-fine">[Typical custom bathroom price range, or a note that every quote is tailored to the room, layout and selections.]</p>
        </div>
      </section>

      <Faq
        title={<>Bathroom <em>questions.</em></>}
        items={[
          { q: "Should I choose a custom remodel or Fast Bath?", a: "Choose a custom remodel if you want to change the layout, move plumbing or create a fully custom space. Choose Fast Bath if you are keeping the layout and want a quality upgrade in about three days." },
          { q: "Can you move the plumbing or change the layout?", a: "Yes. A custom remodel can move the shower, tub, toilet and vanity, and can include electrical, lighting and wall changes, all planned before construction starts." },
          { q: "Can I replace my tub with a walk-in shower?", a: "Yes. Tub-to-shower conversions are one of our most common projects, from simple swaps to fully custom curbless showers." },
          { q: "Where do I choose my tile, vanity and fixtures?", a: "Every selection is made in person at Heritage Design Center, our sister showroom at 8695 Martin Way E #101 in Lacey." },
          { q: "Do you build accessible bathrooms?", a: "Yes. Curbless showers, grab bars, shower seats and comfort-height fixtures can be designed into any custom bath." },
          { q: "How long does a custom bathroom remodel take?", a: "[Typical timeline to confirm.]" },
          { q: "Is financing available?", a: "Yes. Financing is available for qualified homeowners through GreenSky, our preferred lender. See our financing page for details." },
        ]}
      />
      <Contact image="/images/pf-essential.webp" title={<>Your custom bathroom <em>starts here.</em></>} />
    </>
  );
}
