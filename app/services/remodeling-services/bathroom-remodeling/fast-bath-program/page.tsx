import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Faq, Split, Steps } from "@/components/ui/Blocks";
import ConsultCta from "@/components/ui/ConsultCta";
import PageReview from "@/components/ui/PageReview";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fast Bath Program | Bathroom Upgrades in Lacey, WA",
  description:
    "Fast, quality bathroom upgrades that keep your layout: tub-to-shower conversions, shower and tub replacements, vanities, fixtures and accessible bathrooms, planned and installed by a local South Sound team.",
};

const F = "/services/remodeling-services/bathroom-remodeling/fast-bath-program";
const EST = `${F}/bathroom-ai-estimator`;
const BATH = "/services/remodeling-services/bathroom-remodeling";

const VALUES = [
  { t: "Fast turnaround", p: "Focused upgrades with less disruption to your home." },
  { t: "Quality materials", p: "Waterproof systems and durable finishes, built to last." },
  { t: "Professional install", p: "Local installers who respect your home." },
  { t: "Workmanship warranty", p: "Licensed, insured, and backed by a 5-year warranty." },
];

const ROWS = [
  {
    t: "Tub and shower updates",
    img: "/images/fb-shower.webp",
    alt: "A new walk-in shower with black frame glass and white tile",
    items: ["Tub-to-shower conversions", "Shower replacements", "Bathtub replacements", "Shower wall systems"],
  },
  {
    t: "A complete room refresh",
    img: "/images/fb-vanity.webp",
    alt: "A walnut vanity with a white counter and wall mirror",
    items: ["Vanity upgrades", "Counters and sinks", "Fixtures and hardware", "Mirrors, lighting and accessories"],
  },
];

const LOCAL = [
  "Fast options for qualified projects",
  "Premium, durable products",
  "Experienced installers",
  "A Lacey-based team",
  "Licensed and insured",
  "Clear communication from start to finish",
];

const MONEY = [
  { t: "Monthly payment plans", p: "Available for qualified homeowners through GreenSky, our preferred lender." },
  { t: "0% promotional options", p: "Promotional financing for qualifying projects." },
  { t: "No surprises", p: "Scope and pricing are explained before any work begins." },
];

export default function FastBathPage() {
  return (
    <>
      <PageHero
        eyebrow="Fast Bath · Lacey, WA"
        title={<>A better bathroom, <em>made easy.</em></>}
        lede="Focused bathroom upgrades that keep your layout, planned and installed by our local South Sound remodeling team."
        image="/images/fb-after.webp"
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "Remodeling", href: "/services/remodeling-services" },
          { label: "Bathrooms", href: BATH },
          { label: "Fast Bath", href: F },
        ]}
      >
        <Link className="btn btn-chrome" href={EST}>Free instant estimate →</Link>
        <a className="btn" href={SITE.tel}>Call {SITE.phone}</a>
      </PageHero>

      <div className="td-snap fb-est">
        <div className="wrap">
          <div className="fb-est-head">
            <strong>Start your free bathroom estimate</strong>
            <span>Your final quote follows an in-home measurement and material review.</span>
          </div>
          <ul>
            <li>About two minutes</li>
            <li>Visual project choices</li>
            <li>An instant planning range</li>
            <li>No obligation</li>
          </ul>
          <Link className="btn btn-chrome" href={EST}>Get my estimate →</Link>
        </div>
      </div>

      <section className="band bg-off on-light">
        <div className="wrap">
          <div className="ed-head td-h">
            <div className="eyebrow">Why Fast Bath</div>
            <h2 className="h2">A quality bathroom, <em>without the long remodel.</em></h2>
          </div>
          <ul className="td-ben">
            {VALUES.map((b) => (
              <li key={b.t}>
                <h3>{b.t}</h3>
                <p>{b.p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band bg-paper on-light" id="services">
        <div className="wrap">
          <div className="ed-head">
            <div>
              <div className="eyebrow">What we upgrade</div>
              <h2 className="h2">Update <em>what matters most.</em></h2>
            </div>
            <p className="ed-aside">Your layout can stay, so your budget goes to the features you use every day.</p>
          </div>
          <div className="fb-rows">
            {ROWS.map((r, i) => (
              <div className={`fb-row${i % 2 ? " flip" : ""}`} key={r.t}>
                <figure>
                  <img src={r.img} alt={r.alt} loading="lazy" />
                </figure>
                <div className="fb-row-copy">
                  <span className="rn">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{r.t}</h3>
                  <ul>
                    {r.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Split
        eyebrow="Accessible bathrooms"
        title={<>Safer, <em>easier bathing.</em></>}
        text="Accessible bathroom upgrades planned to ADA guidelines, designed to feel safe without looking clinical."
        rows={[
          "Low-threshold walk-in showers",
          "Grab bars and shower seats",
          "Comfort-height toilets",
          "Slip-resistant flooring",
          "Handheld showerheads",
          "Lever-style faucets",
        ]}
        image="/images/fb-walkin.webp"
        imageAlt="A low-threshold walk-in shower with a glass panel"
        flip
      >
        <Link className="btn btn-ink" href="/contact">Plan an accessible bathroom →</Link>
      </Split>

      <Steps
        eyebrow="How it works"
        title={<>One team, <em>one simple process.</em></>}
        steps={[
          { title: "Build your estimate", text: "Get an instant planning range online in about two minutes." },
          { title: "Free in-home consultation", text: "We measure, review materials and confirm your scope." },
          { title: "Design & selections", text: "Choose your shower, vanity, fixtures and finishes with our team." },
          { title: "Professional installation", text: "Our crew installs your upgrade and walks you through the finished room." },
        ]}
      />

      <section className="band bg-off on-light" id="before-after">
        <div className="wrap fb-ba">
          <div className="fb-ba-copy">
            <div className="eyebrow">Before &amp; after</div>
            <h2 className="h2">See the change <em>for yourself.</em></h2>
            <p>Drag the handle to compare. Big impact, focused scope.</p>
            <Link className="td-link" href="/portfolio">View more projects →</Link>
          </div>
          <div className="ba" id="ba" style={{ "--p": "50%" } as React.CSSProperties}>
            <img src="/images/fb-after.webp" alt="Bathroom after the Fast Bath upgrade" loading="lazy" />
            <div className="ba-before">
              <img src="/images/fb-before.webp" alt="Bathroom before the Fast Bath upgrade" loading="lazy" />
            </div>
            <i className="ba-line" aria-hidden="true"><b></b></i>
            <span className="ba-tag l" aria-hidden="true">Before</span>
            <span className="ba-tag r" aria-hidden="true">After</span>
            <input type="range" min="0" max="100" defaultValue="50" aria-label="Drag to compare before and after" />
          </div>
        </div>
      </section>

      <section className="band bg-paper on-light">
        <div className="wrap reasons">
          <div className="reasons-lead">
            <div className="eyebrow">Local work</div>
            <h2 className="h2">Handled <em>with care.</em></h2>
            <figure className="reasons-fig">
              <div className="fig-clip"><img src="/images/fb-room.webp" alt="A finished bathroom with a gray vanity and glass shower" loading="lazy" /></div>
            </figure>
          </div>
          <div>
            <ol className="reasons-list fb-local">
              {LOCAL.map((x, i) => (
                <li key={x}>
                  <span className="rn">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{x}</h3>
                </li>
              ))}
            </ol>
            <div className="fb-aside">
              <h3>Need layout, tile or plumbing changes?</h3>
              <p>Moving plumbing, walls or the layout calls for a full bathroom remodel, which we also design and build.</p>
              <Link className="td-link" href={BATH}>Explore bathroom remodeling →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="band bg-off on-light" id="financing">
        <div className="wrap">
          <div className="ed-head">
            <div>
              <div className="eyebrow">Financing</div>
              <h2 className="h2">A plan that fits <em>your home and budget.</em></h2>
            </div>
            <p className="ed-aside">Financing is available for qualified homeowners. <Link href="/resources/financing">Explore financing</Link></p>
          </div>
          <ul className="td-ben fb-money">
            {MONEY.map((m) => (
              <li key={m.t}>
                <h3>{m.t}</h3>
                <p>{m.p}</p>
              </li>
            ))}
          </ul>
          <p className="td-fine">Financing is subject to credit approval. This is general information, not financial advice.</p>
        </div>
      </section>

      <PageReview tags={["fast-bath"]} />

      <Faq
        bg="off"
        title={<>Answers <em>before you start.</em></>}
        items={[
          { q: "How long does installation take?", a: "It depends on your scope and site conditions. Because Fast Bath keeps your layout, most upgrades are completed in about 3 days." },
          { q: "Can my existing layout stay?", a: "Usually, yes. If you want to move plumbing, electrical or walls, a full bathroom remodel is the better fit." },
          { q: "Do you offer accessibility options?", a: "Yes. Low-threshold showers, grab bars, shower seats, comfort-height toilets and more, planned to ADA guidelines." },
          { q: "What's included in Fast Bath?", a: "Tub-to-shower conversions, shower and tub replacements, shower wall systems, vanities, counters, fixtures, lighting and accessories." },
          { q: "Is financing available?", a: "Yes. Monthly payment plans and promotional options are available for qualified homeowners." },
          { q: "Do I need a permit?", a: "We review permit needs during your consultation, based on the work you choose." },
        ]}
      />

      <ConsultCta
        title={<>Ready for a cleaner, <em>brighter bathroom?</em></>}
        steps={[
          "Send us your details and pick a time.",
          "We visit your home to measure.",
          "You get a written plan and contract before work starts.",
        ]}
        trust="Fast turnaround · 5-year warranty · Licensed and insured"
      />
    </>
  );
}
