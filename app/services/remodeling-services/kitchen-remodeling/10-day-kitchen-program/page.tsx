import type React from "react";
import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Faq, Split, Steps } from "@/components/ui/Blocks";
import ConsultCta from "@/components/ui/ConsultCta";
import PageReview from "@/components/ui/PageReview";
import BeforeAfter from "@/components/ui/BeforeAfter";
import { TEN_DAY_TERMS } from "@/lib/ten-day-terms";

export const metadata: Metadata = {
  alternates: { canonical: "/services/remodeling-services/kitchen-remodeling/10-day-kitchen-program" },
  title: "10-Day Kitchen Program",
  description:
    "A faster, lower-disruption kitchen remodel for qualified same-layout kitchens in Lacey, Olympia, Tacoma and the South Sound, installed in 10 business days.",
};

const CUSTOM = "/services/remodeling-services/kitchen-remodeling";

const FIT = [
  { t: "Same footprint", p: "Your kitchen keeps its current layout and overall shape." },
  { t: "Same cabinet plan", p: "The new cabinet configuration matches the existing one." },
  { t: "Utilities stay put", p: "Plumbing, gas, appliances and electrical stay where they are." },
  { t: "No structural work", p: "No load-bearing walls or structural changes are involved." },
  { t: "Decided before day one", p: "Selections are finalized and materials are staged before the install begins." },
];

const BENEFITS = [
  { t: "Faster install", p: "A fixed 10-business-day schedule, planned before the crew arrives." },
  { t: "Pre-planned selections", p: "Approved cabinetry, solid surface counters and backsplash, LVP flooring and finishes." },
  { t: "Your existing layout", p: "Keeping the footprint is what makes the schedule possible." },
  { t: "Less disruption", p: "Fewer days without a kitchen and fewer decisions mid-project." },
];

// Day-by-day copy and photos from the 10 Day Kitchens site (DayByDayTimeline). A day's photo only
// shows once its file is in public/images/timeline.
const DAYS = [
  ["Pack-out & demo", "White-glove packing followed by precision demolition.", "day-01-demo"],
  ["Prep & repairs", "Expert drywall and plumbing adjustments.", "day-02-prep"],
  ["Cabinet base", "Leveling and installation of high-end base cabinetry.", "day-03-base-cabinets"],
  ["Uppers & templates", "Upper mounting and countertop templating.", "day-04-uppers-template"],
  ["Cabinet detail", "Alignment, hardware, and structural securement.", "day-05-cabinet-detail"],
  ["Flooring & trim", "Premium flooring surfaces and custom trim work.", "day-06-flooring-trim"],
  ["Stone & tile", "Countertop placement and backsplash installation.", "day-07-stone-tile"],
  ["Fixtures & flow", "Appliance integration and plumbing/electrical trim-out.", "day-08-fixtures-flow"],
  ["Fine-tuning", "Addressing small details that make a space feel complete.", "day-09-fine-tuning"],
  ["Unveiling", "Final walkthrough and professional cleaning.", "day-10-final-walkthrough"],
].map(([t, p, f]) => {
  const src = `/images/timeline/${f}.webp`;
  return { t, p, img: fs.existsSync(path.join(process.cwd(), "public", src)) ? src : null };
});

const INCLUDED = [
  "New cabinets in the same footprint",
  "Solid surface countertops and backsplash",
  "LVP flooring, if the subfloor qualifies",
  "Sink, faucet and fixtures in their existing locations",
  "Paint for the kitchen walls and ceiling",
  "A coordinated schedule and final walkthrough",
];

const EXCLUDED = [
  "Moving plumbing, gas, appliances or electrical",
  "New circuits or panel upgrades",
  "Layout or structural changes",
  "Specialty tile, hardwood or patterned installs",
  "Custom carpentry and built-ins",
  "Hidden damage, hazardous materials or third-party delays",
];

// Package ranges and copy from the 10 Day Kitchens site (ProgramPricingExplorer). The first photo of each
// size is the one that site used; the others are picked from our own projects.
const TIERS = [
  {
    n: "Small kitchen",
    p: "$45,000–$55,000+",
    d: "Compact layouts and galley kitchens that keep the same footprint.",
    imgs: ["/images/pricing-small.webp", "/images/pf-university.webp", "/images/pf-quartz.webp"],
  },
  {
    n: "Medium kitchen",
    p: "$55,000–$70,000+",
    d: "Standard family kitchens with approved cabinets, counters, flooring and finishes.",
    imgs: ["/images/pricing-medium.webp", "/images/pf-coastal.webp", "/images/pf-midnight.webp"],
  },
  {
    n: "Large kitchen",
    p: "$70,000–$85,000+",
    d: "Larger same-layout kitchens with more cabinetry, surface area and finish scope.",
    imgs: ["/images/pricing-large.webp", "/images/pf-forest.webp", "/images/kitchens.webp"],
  },
];

export default function TenDayPage() {
  return (
    <>
      <PageHero
        eyebrow="10-Day Kitchen Program"
        title={<>A new kitchen <em>in 10 business days.</em></>}
        lede="Same layout, no months of disruption. For qualified same-layout kitchens in Lacey, Olympia, Tacoma and across Thurston and Pierce counties."
        image="/images/pf-midnight.webp"
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Remodeling", href: "/services/remodeling-services" },
          { label: "Kitchens", href: CUSTOM },
          { label: "10-Day Kitchen", href: "/services/remodeling-services/kitchen-remodeling/10-day-kitchen-program" },
        ]}
      >
        <a className="btn btn-chrome" href="#qualify-form">Check if you qualify →</a>
        <Link className="btn" href={CUSTOM}>Need custom instead?</Link>
      </PageHero>

      <div className="td-snap">
        <div className="wrap">
          <div><strong>10</strong><span>Business-day install</span></div>
          <div><strong>$45k</strong><span>Starting point for qualified kitchens</span></div>
          <div><strong>5 yr</strong><span>Warranty</span></div>
        </div>
      </div>

      <section className="band bg-off on-light">
        <div className="wrap td-fit">
          <div className="td-fit-copy">
            <div className="eyebrow">The program</div>
            <h2 className="h2">Keep the layout. <em>Upgrade the experience.</em></h2>
            <p>For kitchens with the right footprint, where you want new cabinets, counters, flooring, fixtures and finishes without a long remodel.</p>
            <p>The speed comes from planning. Everything is designed, selected and staged before day one, and because the layout stays put, there are no layout changes or material delays to slow the crew down.</p>
            <a className="td-link" href="#qualify">See if it fits ↓</a>
          </div>
          <figure className="td-fit-fig">
            <img src="/images/kitchens.webp" alt="A finished kitchen with new cabinetry and countertops" loading="lazy" />
            <div className="td-stat"><strong>10</strong><span>Business-day<br />install</span></div>
          </figure>
        </div>
      </section>

      <section className="band bg-paper on-light" id="qualify">
        <div className="wrap reasons">
          <div className="reasons-lead">
            <div className="eyebrow">Does it qualify?</div>
            <h2 className="h2">This works when the room&apos;s <em>bones stay in place.</em></h2>
            <p className="td-note">If your kitchen needs a new layout, it&apos;s a better fit for a <Link href={CUSTOM}>custom kitchen remodel</Link>.</p>
            <figure className="reasons-fig">
              <div className="fig-clip"><img src="/images/pf-coastal.webp" alt="A same-layout kitchen with new cabinetry" loading="lazy" /></div>
            </figure>
          </div>
          <ol className="reasons-list">
            {FIT.map((f, i) => (
              <li key={f.t}>
                <span className="rn">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.t}</h3>
                <p>{f.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band bg-off on-light">
        <div className="wrap">
          <div className="ed-head td-h">
            <div className="eyebrow">Why homeowners choose it</div>
            <h2 className="h2">A quality kitchen, <em>without the long remodel.</em></h2>
          </div>
          <ul className="td-ben">
            {BENEFITS.map((b) => (
              <li key={b.t}>
                <h3>{b.t}</h3>
                <p>{b.p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Steps
        eyebrow="How it works"
        title={<>Planned <em>before day one.</em></>}
        steps={[
          { title: "Qualification review", text: "We confirm your kitchen fits the program: same footprint, same utilities, no structural work." },
          { title: "Design & selections", text: "You choose cabinetry, counters and finishes from the program selections with our designers." },
          { title: "Material staging", text: "Everything is ordered, received and checked before the install is scheduled." },
          { title: "10-business-day install", text: "A dedicated crew follows a fixed day-by-day plan." },
          { title: "Functional completion", text: "A working kitchen, finished to the agreed scope, with a final walkthrough." },
        ]}
      />

      <section className="band bg-off on-light dbd-band">
        <div className="wrap">
          <div className="dbd-head">
            <div className="eyebrow">The 10-day transformation</div>
            <h2 className="h2">Day by day, <em>plan to done.</em></h2>
          </div>
          {/* Desktop: pinned scroll story, one day at a time. Phones get the plain list below. */}
          <div className="dbd2" id="dbd2" style={{ "--n": DAYS.length } as React.CSSProperties}>
            <div className="dbd2-stick">
              <div className="dbd2-media">
                {DAYS.map((d, i) => (
                  <figure key={d.t} className={`${i ? "" : "on"}${d.img ? "" : " empty"}`}>
                    {d.img ? <img src={d.img} alt={`Day ${i + 1}: ${d.t}`} loading="lazy" /> : <span className="dbd2-ph">[Day {i + 1} photo]</span>}
                    <b className="dbd2-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</b>
                  </figure>
                ))}
              </div>
              <div className="dbd2-rail" aria-hidden="true">
                <small>Day 1</small>
                <span><i></i></span>
                <small>Day {DAYS.length}</small>
              </div>
              <div className="dbd2-copy">
                {DAYS.map((d, i) => (
                  <article key={d.t} className={i ? "" : "on"} aria-hidden={i ? "true" : undefined}>
                    <span className="dbd2-tag">Day {i + 1}</span>
                    <h3>{d.t}</h3>
                    <p>{d.p}</p>
                  </article>
                ))}
                <div className="dbd2-dash" aria-hidden="true">
                  {DAYS.map((d, i) => <b key={d.t} className={i ? "" : "on"}></b>)}
                </div>
              </div>
            </div>
          </div>
          <ol className={`dbd dbd-list${DAYS.some((d) => d.img) ? " dbd-ph" : ""}`}>
            {DAYS.map((d, i) => (
              <li key={d.t} data-rv="" style={{ "--d": `${(i % 5) * 0.06}s` } as React.CSSProperties}>
                <span className="dbd-node" aria-hidden="true">{i + 1}</span>
                <div>
                  {d.img && (
                    <figure className="dbd-fig">
                      <img src={d.img} alt={`Day ${i + 1} of a 10-Day kitchen install: ${d.t.toLowerCase()}`} loading="lazy" />
                    </figure>
                  )}
                  <span className="dbd-tag">Day {i + 1}</span>
                  <h3>{d.t}</h3>
                  <p>{d.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band bg-paper on-light">
        <div className="wrap">
          <div className="ed-head td-h">
            <div className="eyebrow">Scope</div>
            <h2 className="h2">What&apos;s included, <em>and what isn&apos;t.</em></h2>
          </div>
          <div className="td-scope">
            <div>
              <h3>Included</h3>
              <ul className="yes">{INCLUDED.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div>
              <h3>Not included</h3>
              <ul className="no">{EXCLUDED.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band bg-off on-light">
        <div className="wrap">
          <div className="ed-head">
            <div>
              <div className="eyebrow">Program requirements</div>
              <h2 className="h2">The fine print, <em>in plain view.</em></h2>
            </div>
            <p className="ed-aside">What every 10-Day kitchen needs to qualify, and what can extend the schedule.</p>
          </div>
          <div className="terms">
            {TEN_DAY_TERMS.map((sec, i) => (
              <details key={sec.t}>
                <summary>
                  <span className="rn">{String(i + 1).padStart(2, "0")}</span>
                  {sec.t}
                </summary>
                <ul>
                  {sec.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                {sec.note && <p className="terms-note">{sec.note}</p>}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="band bg-off on-light">
        <div className="wrap td-ba">
          <div className="td-ba-copy">
            <div className="eyebrow">Before and after</div>
            <h2 className="h2">Same layout. <em>A whole new kitchen.</em></h2>
            <p className="td-note">Drag the line to compare. The footprint stayed the same; the cabinets, counters, flooring and finishes are all new.</p>
          </div>
          <BeforeAfter before="/images/ba-kitchen-before.webp" after="/images/ba-kitchen-after.webp" beforeAlt="The kitchen before, with dated wood cabinets" afterAlt="The same kitchen after, with white cabinets and dark granite counters" />
        </div>
      </section>

      <section className="band bg-paper on-light">
        <div className="wrap pk" id="pk">
          <div className="pk-lead">
            <div className="eyebrow">Package pricing</div>
            <h2 className="h2">Clear starting ranges <em>for qualified kitchens.</em></h2>
            <p className="td-note">Choose a size to see the kind of kitchen that typically fits the range. Final pricing depends on measurements, selections, site conditions and scope.</p>
            <ol className="pk-list">
              {TIERS.map((t, i) => (
                <li key={t.n}>
                  <button type="button" className={`pk-tier${i ? "" : " on"}`} data-i={i}>
                    <span className="pk-name">{t.n}</span>
                    <strong>{t.p}</strong>
                    <span className="pk-d">{t.d}</span>
                    <i aria-hidden="true">→</i>
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="pk-stage">
            <div className="pk-media">
              {TIERS.map((t, i) =>
                t.imgs.map((src, k) => (
                  <img key={src} src={src} className={i || k ? "" : "on"} data-t={i} data-k={k} alt={`${t.n} remodel example ${k + 1}`} loading="lazy" />
                )),
              )}
              <div className="pk-cap">
                <small>Currently viewing</small>
                <b className="pk-cap-n">{TIERS[0].n}</b>
                <span className="pk-cap-p">{TIERS[0].p}</span>
              </div>
            </div>
            {TIERS.map((t, i) => (
              <div key={t.n} className={`pk-thumbs${i ? "" : " on"}`} data-t={i}>
                {t.imgs.map((src, k) => (
                  <button key={src} type="button" className={k ? "" : "on"} data-k={k} aria-label={`${t.n} example ${k + 1}`}>
                    <img src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Split
        eyebrow="Custom kitchens"
        title={<>When the layout <em>needs to change.</em></>}
        text="Moving walls, plumbing or appliances, or designing something entirely your own, calls for our custom kitchen remodel. Same team, same showroom, designed from the ground up."
        image="/images/svc-remodel.webp"
        imageAlt="A custom kitchen designed by Heritage Design & Construction"
        flip
      >
        <Link className="btn btn-ink" href={CUSTOM}>View custom kitchen remodels →</Link>
      </Split>

      <PageReview tags={["ten-day"]} />

      <Faq
        bg="off"
        title={<>10-Day <em>questions.</em></>}
        items={[
          { q: "How do I know if my kitchen is eligible?", a: "If your kitchen keeps its footprint, cabinet configuration and utility locations, with no structural changes, it's likely a fit. We confirm it during a qualification review in your home." },
          { q: "What does a 10-business-day completion mean?", a: "A functional kitchen, finished to the agreed scope, in 10 business days. Hidden conditions, material issues, inspections or homeowner-requested changes can extend the schedule." },
          { q: "How do I choose materials?", a: "You choose from the approved program selections with our designers. Everything is finalized before the contract, so there are no mid-project changes." },
          { q: "What if I want to change my layout?", a: "Layout changes are a better fit for our custom kitchen remodel, which we also design and build." },
        ]}
      />

      <ConsultCta
        id="qualify-form"
        title={<>Let&apos;s see if your kitchen <em>can move faster.</em></>}
        text="We will review your current layout, photos, selections and timeline so you know whether the 10-Day Kitchen Program or a full custom kitchen remodel is the better fit."
        steps={[
          { t: "Send your details", p: "Takes about a minute, then we call to set a time that suits you." },
          { t: "We come to you", p: "We measure the space, confirm it qualifies and walk you through materials, finishes and options." },
          { t: "Get a clear plan", p: "A written plan and contract before work starts, so there are no surprises." },
        ]}
        trust="Fast turnaround by experts · 5-year warranty · Licensed & insured"
        program="10-Day Kitchen Program"
      />
    </>
  );
}
