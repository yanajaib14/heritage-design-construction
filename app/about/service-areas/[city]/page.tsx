import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import BeforeAfter from "@/components/ui/BeforeAfter";
import ConsultCta from "@/components/ui/ConsultCta";
import { Faq, Steps, Tbd } from "@/components/ui/Blocks";
import Programs from "@/components/sections/Programs";
import { Quotes } from "@/components/sections/Stories";
import { CITY_PAGES, cityHref, cityPage } from "@/lib/cities";
import { FEATURED, TOUR } from "@/lib/city-featured";
import Brands from "@/components/sections/Brands";
import ShowroomTour from "@/components/ui/ShowroomTour";
import { CityHero, OlympiaFeature, TacomaFeature, UpFeature } from "@/components/sections/CityFeatured";
import { reviewsFor } from "@/lib/reviews";
import { BASE_URL, SITE } from "@/lib/site";

type Props = { params: Promise<{ city: string }> };

// Only the cities in lib/cities.ts get a page; any other slug is a 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return CITY_PAGES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = cityPage((await params).city);
  if (!c) return {};
  return {
    alternates: { canonical: `/about/service-areas/${c.slug}` },
    title: `${c.name} Kitchen & Bath Remodeling | Design-Build Contractor, ${c.name} WA`,
    description: c.lede,
  };
}

const R = "/services/remodeling-services";
const BA = {
  kitchen: { t: "Same home.", em: "A new kitchen.", before: "/images/ba-kitchen-before.webp", after: "/images/ba-kitchen-after.webp", beforeAlt: "The kitchen before the remodel", afterAlt: "The same kitchen after the remodel" },
  bath: { t: "Same room.", em: "A new bathroom.", before: "/images/ba-bath-before.webp", after: "/images/ba-bath-after.webp", beforeAlt: "The bathroom before the remodel", afterAlt: "The same bathroom after the remodel" },
  refacing: { t: "Same cabinets.", em: "A whole new look.", before: "/images/rf-before.webp", after: "/images/rf-after.webp", beforeAlt: "Kitchen cabinets before refacing", afterAlt: "The same cabinets after refacing" },
  fastbath: { t: "A new bathroom,", em: "without the long remodel.", before: "/images/fb-before.webp", after: "/images/fb-after.webp", beforeAlt: "The bathroom before a Fast Bath upgrade", afterAlt: "The same bathroom after a Fast Bath upgrade" },
};
// Each service has three wordings; a city page takes one, so the list does not repeat word for word.
const SERVICES: { t: string; href: string; p: [string, string, string] }[] = [
  { t: "Kitchen remodeling", href: `${R}/kitchen-remodeling`, p: [
    "New layouts, custom cabinetry, stone and lighting, designed in our showroom.",
    "From a fresh look on the same footprint to a full open-plan rebuild.",
    "Cabinets, counters, flooring and lighting, planned and built by one team.",
  ] },
  { t: "Bathroom remodeling", href: `${R}/bathroom-remodeling`, p: [
    "Primary suites, guest baths and walk-in showers.",
    "Tile showers, freestanding tubs, new vanities and better storage.",
    "From a quick hall-bath refresh to a full primary suite.",
  ] },
  { t: "Whole home remodeling", href: `${R}/whole-home-remodeling`, p: [
    "Several rooms, one plan, one crew and one schedule.",
    "Kitchen, baths and living spaces updated together, in one project.",
    "One design for the whole house, built in a planned sequence.",
  ] },
  { t: "Additions & ADU/DADU", href: `${R}/home-additions-adu`, p: [
    "More room, or a separate unit on your lot.",
    "A bigger kitchen, a new suite, or a backyard cottage.",
    "Space for family, guests or rental income, designed to fit your lot.",
  ] },
  { t: "Design services", href: "/services/design-services", p: [
    "Plans, 3D renderings and every selection in one place.",
    "See your remodel in 3D before any work begins.",
    "Measured plans, renderings and a full selections list.",
  ] },
];
const STEPS = [
  [
    { t: "Consultation", p: "We visit your home or meet you at the showroom to talk through the project." },
    { t: "Design & selections", p: "Your designer draws the plan and you choose every finish in one place." },
    { t: "Build", p: "Our own crew builds it on a set schedule, backed by a 5-year warranty." },
  ],
  [
    { t: "First meeting", p: "We listen, measure and talk budget, at your home or in the showroom." },
    { t: "Plan & finishes", p: "You see the design and pick cabinets, stone and tile in one visit." },
    { t: "Construction", p: "Our crew works to a written schedule, and the work carries a 5-year warranty." },
  ],
  [
    { t: "Talk it through", p: "Tell us what is not working in the room and what you want instead." },
    { t: "Design it", p: "We draw the space and help you choose every material before work starts." },
    { t: "Build it", p: "Our own team does the work on a set timeline, covered by a 5-year warranty." },
  ],
];
const WHY_IMG = [
  ["/images/showroom.webp", "The Heritage Design Center showroom in Lacey"],
  ["/images/sr-design-review.webp", "A designer reviewing plans in the showroom"],
  ["/images/sr-door-samples.webp", "Cabinet door samples in the showroom"],
  ["/images/sr-tile.webp", "Tile samples on display in the showroom"],
  ["/images/svc-design.webp", "Design drawings and material samples"],
];
const VISIT_IMG = [
  ["/images/sr-consult.webp", "A design consultation in the showroom"],
  ["/images/hero-showroom.webp", "Inside the Heritage showroom"],
  ["/images/sr-tile.webp", "Tile and stone samples in the showroom"],
];

export default async function CityPage({ params }: Props) {
  const c = cityPage((await params).city);
  if (!c) notFound();
  const url = `/about/service-areas/${c.slug}`;
  const home = c.slug === "lacey";
  // small rotations so the shared parts of the page do not read word for word the same on every city
  const v = CITY_PAGES.indexOf(c);
  const pick = <T,>(list: T[]) => list[v % list.length];
  const drive = c.driveTime[0].toUpperCase() + c.driveTime.slice(1);
  const ba = BA[c.ba];
  const hoodNames = c.neighborhoods.map((n) => n.name);
  const reasons: [string, string][] = [
    home
      ? ["A showroom in your own town", "Our showroom is right here on Martin Way. See cabinets, stone, tile and fixtures in person and choose them in one visit."]
      : ["A showroom close to home", `Our Lacey showroom is ${c.driveTime} from ${c.name}. See cabinets, stone, tile and fixtures in person and choose them in one visit.`],
    pick([
      ["One team, design to build", "Your designer, your materials and our own crew, under one roof from the first sketch to the final walkthrough."],
      ["Our own crew on site", `The people who design your ${c.name} remodel hand it to our own crew, not a chain of subcontractors you have never met.`],
      ["Design and build together", "The same team plans the space, orders the materials and builds it, so nothing gets lost between the drawing and the job site."],
    ] as [string, string][]),
    [`We know ${c.name} homes`, `From ${hoodNames.slice(0, -1).join(", ")} to ${hoodNames[hoodNames.length - 1]}, we plan around the way homes here were built.`],
    pick([
      ["Permits handled", `We coordinate permits and inspections with the ${c.permits}.`],
      ["Permits and inspections, covered", `When the work needs a permit, we prepare it and work with the ${c.permits} through final inspection.`],
      ["Local permits, managed for you", `Plumbing, electrical or structural work in ${c.name} usually needs a permit. We handle it with the ${c.permits}.`],
    ] as [string, string][]),
  ];
  const directions = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(`${c.name}, WA`)}&destination=${encodeURIComponent(`${SITE.street}, ${SITE.city}, ${SITE.region} ${SITE.zip}`)}`;

  // Four layouts rotate across the city pages: the sections come in a different order,
  // and photos, sides and the neighborhood treatment change with them.
  const L = v % 4;
  const f = FEATURED[c.slug];
  const c3 = Math.floor(v / 4) % 3; // second rotation so copy and layout do not move in lockstep
  const p3 = <T,>(list: T[]) => list[(v + c3) % list.length];
  const [whyImg, whyAlt] = WHY_IMG[v % WHY_IMG.length];
  const [visitImg, visitAlt] = VISIT_IMG[(v + 1) % VISIT_IMG.length];

  const why = (
    <section key="why" className={`band ${L === 2 ? "bg-off" : "bg-paper"} on-light ct-why${L % 2 ? " ct-flip" : ""}`}>
      <div className="wrap ct-why-grid">
        <figure className="ct-why-fig">
          <Image src={whyImg} alt={whyAlt} fill sizes="(max-width: 860px) 100vw, 45vw" />
        </figure>
        <div>
          <div className="eyebrow">{p3([`Why ${c.name} chooses Heritage`, `Why homeowners in ${c.name} call us`, `What sets us apart in ${c.name}`])}</div>
          <h2 className="h2">{c.why[0]} <em>{c.why[1]}</em></h2>
          <ol className="ct-list">
            {reasons.map(([t, p], i) => (
              <li key={t}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );

  const baBlock = (
    <section key="ba" className={`band ${L === 1 ? "bg-paper" : "bg-off"} on-light ct-ba${L >= 2 ? " ct-flip" : ""}`}>
      <div className="wrap ct-ba-grid">
        <div className="ct-ba-copy">
          <div className="eyebrow">{pick(["A recent transformation", "Before and after", "Drag to compare", "One of our remodels"])}</div>
          <h2 className="h2">{ba.t} <em>{ba.em}</em></h2>
          <p>{c.intro[0]}</p>
          <p className="ct-ba-tag"><Tbd>[Name the {c.name} project shown here, or swap in one from {c.name}.]</Tbd></p>
          <Link className="link" href="/portfolio">{p3(["See more of our work →", "Browse the portfolio →", "More finished projects →"])}</Link>
        </div>
        <BeforeAfter
          className="ct-ba-photo"
          before={ba.before}
          after={ba.after}
          beforeAlt={ba.beforeAlt}
          afterAlt={ba.afterAlt}
        />
      </div>
    </section>
  );

  const hoodsTitle = pick([
    <>Knowing the homes <em>we work on.</em></>,
    <>Where we work <em>in {c.name}.</em></>,
    <>Neighborhood by <em>neighborhood.</em></>,
    <>The {c.name} homes <em>we know best.</em></>,
  ]);
  // Layouts 0 and 2 show neighborhoods as a numbered timeline; 1 and 3 as a ruled index beside a photo.
  const hoods = L % 2 === 0 ? (
    <Steps key="hoods" eyebrow={`${c.name} neighborhoods`} title={hoodsTitle} bg={L === 2 ? "paper" : "off"}
      steps={c.neighborhoods.map((n) => ({ title: n.name, text: n.note }))} />
  ) : (
    <section key="hoods" className="band bg-paper on-light ct-hoods">
      <div className="wrap ct-hoods-grid">
        <div className="ct-hoods-head">
          <div className="eyebrow">{c.name} neighborhoods</div>
          <h2 className="h2">{hoodsTitle}</h2>
          <p>{p3([
            `Every part of ${c.name} has its own kind of house. These are the areas we are asked about most.`,
            `A few of the ${c.name} areas we work in, and what we usually find when we get there.`,
            `What we have learned about the homes in ${c.name}, area by area.`,
          ])}</p>
        </div>
        <ul className="ct-hoods-list">
          {c.neighborhoods.map((n) => (
            <li key={n.name}>
              <h3>{n.name}</h3>
              <p>{n.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  const svc = (
    <section key="svc" className={`band ${L === 3 ? "bg-off" : "bg-paper"} on-light ct-svc${L === 2 ? " ct-flip" : ""}`}>
      <div className="wrap ct-svc-grid">
        <div>
          <div className="eyebrow">{p3([`Services in ${c.name}`, `What we do in ${c.name}`, `Remodeling for ${c.name} homes`])}</div>
          <h2 className="h2">{pick([<>Everything for <em>your {c.name} home.</em></>, <>Remodeling services <em>in {c.name}.</em></>, <>What we build <em>in {c.name}.</em></>])}</h2>
          {c.intro.slice(1).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="ct-svc-list">
          {SERVICES.map((s, i) => (
            <li key={s.t}>
              <Link href={s.href}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{s.t}</b>
                <small>{s.p[(v + i) % 3]}</small>
                <i aria-hidden="true">→</i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  const programs = (
    <Programs key="programs"
      eyebrow={pick(["Signature programs", "Two faster options", "When time matters"])}
      title={pick([<>Fast, <em>without cutting corners.</em></>, <>A set schedule, <em>start to finish.</em></>, <>Quick, <em>and still done right.</em></>, <>Less time <em>without a kitchen.</em></>])}
    />
  );

  const rev = (
    <section key="rev" className="band bg-sand on-light ct-rev">
      <div className="wrap ct-rev-grid">
        <div>
          <div className="eyebrow">{p3(["What clients say", "Reviews", "From our clients"])}</div>
          <h2 className="h2">{pick([<>In their <em>own words.</em></>, <>What homeowners <em>tell us.</em></>, <>After the <em>final walkthrough.</em></>, <>Straight from <em>our clients.</em></>])}</h2>
          <p className="ct-rev-note"><Tbd>[Add a review from a client in {c.name}.]</Tbd></p>
        </div>
        <Quotes list={reviewsFor().filter((r) => !r.placeholder)} />
      </div>
    </section>
  );

  const visit = (
    <section key="visit" className={`ct-visit${L % 2 ? " ct-flip" : ""}`}>
      <div className="wrap ct-visit-grid">
        <div>
          <div className="eyebrow">{p3(["Visit the showroom", "See it in person", "Our Lacey showroom"])}</div>
          <h2 className="h2">{home ? <>Right here <em>in Lacey.</em></> : <>{drive} <em>from {c.name}.</em></>}</h2>
          <p>{pick([
            "Walk through kitchens and baths, hold the samples in your hand, and leave with a plan. Bring your measurements or photos and we will take it from there.",
            `Cabinet lines, slab and quartz samples, tile and fixtures, all in one room. ${c.name} homeowners usually make every selection in a single visit.`,
            "See the materials in real light before you commit. Book a time and a designer will walk you through the options for your home.",
            `Bring photos of your ${c.name} kitchen or bath. We will lay out door styles, counters and tile side by side so you can compare them.`,
          ])}</p>
          <dl>
            <div><dt>Address</dt><dd>{SITE.street}, {SITE.city}, {SITE.region} {SITE.zip}</dd></div>
            <div><dt>Hours</dt><dd>{SITE.hours}</dd></div>
            <div><dt>Phone</dt><dd><a href={SITE.tel}>{SITE.phone}</a></dd></div>
          </dl>
          <div className="btns">
            <a className="btn btn-chrome" href={home ? SITE.directions : directions} target="_blank" rel="noopener">{home ? "Get directions →" : `Directions from ${c.name} →`}</a>
            <Link className="btn" href="/about/showroom">About the showroom</Link>
          </div>
        </div>
        <figure>
          <Image src={visitImg} alt={visitAlt} fill sizes="(max-width: 860px) 100vw, 50vw" />
        </figure>
      </div>
    </section>
  );

  const faq = (
    <Faq key="faq"
      eyebrow={p3(["Questions", "FAQ", "Common questions"])}
      title={pick([<>{c.name} <em>questions.</em></>, <>Asked by {c.name} <em>homeowners.</em></>, <>Before you start <em>in {c.name}.</em></>])}
      items={f ? [...c.faq, ...f.extraFaq] : c.faq} bg={L === 3 ? "off" : "paper"} />
  );

  const brands = (
    <section className="ct-brands" key="brands">
      <Brands />
    </section>
  );
  const D = f?.design;
  const featured = !D && f && (
    <>
      <section className="band bg-paper on-light ct-state">
        <div className="wrap">
          <div className="eyebrow">{home ? "Our hometown" : `High-end remodeling in ${c.name}`}</div>
          <h2 className="ct-state-h">{f.statement[0]} <em>{f.statement[1]}</em></h2>
          <div className="ct-state-row">
            <p>{f.statementText}</p>
            <Link className="link" href="/portfolio">See our finished work →</Link>
          </div>
        </div>
        <div className="ct-mosaic">
          {f.gallery.map((g) => (
            <figure key={g.src}>
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 860px) 50vw, 25vw" />
            </figure>
          ))}
        </div>
      </section>

      {home && (
        <section className="band bg-sand on-light ct-tour" id="tour">
          <div className="wrap">
            <div className="ct-tour-head">
              <div>
                <div className="eyebrow">Walk through the showroom</div>
                <h2 className="h2">Walk the showroom <em>from home.</em></h2>
              </div>
              <p>Step through the showroom in 3D, watch the video tour, or click through the five stops from first conversation to final selections. This is where every Heritage remodel is planned.</p>
            </div>
            <ShowroomTour stops={TOUR} tourUrl={SITE.tourUrl || undefined} tourVideo={SITE.tourVideo || undefined} />
          </div>
        </section>
      )}

      <section className="band bg-off on-light ct-asks">
        <div className="wrap">
          <div className="ct-asks-head">
            <div className="eyebrow">{c.name} projects</div>
            <h2 className="h2">{f.asksTitle[0]} <em>{f.asksTitle[1]}</em></h2>
          </div>
          <ol className="ct-asks-list">
            {f.asks.map((a, n) => (
              <li key={a.t}>
                <span>{String(n + 1).padStart(2, "0")}</span>
                <h3>{a.t}</h3>
                <p>{a.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ct-brands">
        <Brands />
      </section>
    </>
  );

  // Tacoma, Olympia and University Place have their own designs and section order.
  const DESIGN_ORDER: Record<string, ReactNode[]> = f && D ? {
    tacoma: [<TacomaFeature key="tf" f={f} name={c.name} />, why, baBlock, rev, hoods, svc, brands, faq, visit, programs],
    olympia: [<OlympiaFeature key="of" f={f} name={c.name} />, hoods, baBlock, why, brands, svc, visit, rev, faq, programs],
    up: [<UpFeature key="uf" f={f} name={c.name} />, baBlock, brands, why, svc, rev, hoods, faq, visit],
  } : {};

  const ORDER: Record<number, ReactNode[]> = {
    0: [why, baBlock, hoods, svc, programs, rev, visit, faq],
    1: [baBlock, why, svc, hoods, rev, programs, faq, visit],
    2: [hoods, svc, why, baBlock, visit, rev, faq, programs],
    3: [why, rev, baBlock, hoods, svc, faq, programs, visit],
  };

  const trust = [
    ["2004", p3(["Family owned since", "Serving the South Sound since", "In business since"])],
    ["800+", p3(["Projects completed", "Remodels finished", "Homes remodeled"])],
    ["5-Year", p3(["Warranty on our work", "Workmanship warranty", "Warranty, in writing"])],
    home ? ["Lacey", "Home of our showroom"] : [c.driveTime.replace("about ", ""), `From ${c.name} to our showroom`],
  ];
  if (L === 1 || L === 3) trust.unshift(trust.pop()!);

  return (
    <div className="city-pop">
      {D && f?.heroImg ? (
        <CityHero design={D} eyebrow={`${c.name}, WA · ${c.county}`} title={<>{c.title[0]} <em>{c.title[1]}</em></>}
          lede={c.lede} image={f.heroImg.src} alt={f.heroImg.alt} url={url} name={c.name}>
        <a className="btn btn-chrome" href="#consult">{p3(["Book a free consultation →", "Schedule a free consultation →", "Get a free consultation →"])}</a>
        {home ? <a className="btn" href="#tour">Tour the showroom</a> : <a className="btn" href={SITE.tel}>Call {SITE.phone}</a>}
        </CityHero>
      ) : (
      <PageHero
        eyebrow={`${c.name}, WA · ${c.county}`}
        title={<>{c.title[0]} <em>{c.title[1]}</em></>}
        image={c.hero}
        lede={c.lede}
        crumbs={[
          { label: "About", href: "/about" },
          { label: "Service Areas", href: "/about/service-areas" },
          { label: c.name, href: url },
        ]}
      >
        <a className="btn btn-chrome" href="#consult">{p3(["Book a free consultation →", "Schedule a free consultation →", "Get a free consultation →"])}</a>
        {home ? <a className="btn" href="#tour">Tour the showroom</a> : <a className="btn" href={SITE.tel}>Call {SITE.phone}</a>}
      </PageHero>
      )}

      <div className={`tb2 ct-trust${D ? ` ct-trust-${D}` : ""}`}>
        <ul className="wrap tb2-row">
          {trust.map(([n, b]) => (
            <li key={b}>
              <strong className="chrome-text">{n}</strong>
              <i aria-hidden="true"></i>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {featured}

      {D ? DESIGN_ORDER[D] : ORDER[L]}

      <section className="band bg-paper on-light city-near">
        <div className="wrap">
          <div className="eyebrow">{p3(["Also serving nearby", `Near ${c.name}`, "Other towns we serve"])}</div>
          <ul>
            {c.nearby.map((n) => (
              <li key={n}>
                <Link href={cityHref(n) ?? "/about/service-areas"}>{n}</Link>
              </li>
            ))}
            <li>
              <Link href="/about/service-areas">All service areas →</Link>
            </li>
          </ul>
        </div>
      </section>

      <ConsultCta
        id="consult"
        title={pick([<>Start your {c.name} <em>remodel.</em></>, <>Plan your {c.name} <em>project.</em></>, <>Let&apos;s talk about <em>your {c.name} home.</em></>, <>Ready when <em>you are, {c.name}.</em></>])}
        text={pick([
          `Tell us a little about your home and we will set up a free consultation, in your ${c.name} home or at our Lacey showroom.`,
          `Share a few details and we will call to book a free consultation at your ${c.name} home or in the showroom.`,
          `A free, no-pressure first meeting: we come to your ${c.name} home, or you visit us in Lacey.`,
        ])}
        steps={STEPS[(v + c3) % STEPS.length]}
        trust="Family owned since 2004 · 800+ projects · Licensed and insured"
        program={`${c.name} remodel`}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Home remodeling in ${c.name}, WA`,
          serviceType: "Home remodeling",
          url: BASE_URL + url,
          provider: { "@id": `${BASE_URL}/#business`, "@type": "GeneralContractor", name: SITE.name },
          areaServed: { "@type": "City", name: `${c.name}, WA`, containedInPlace: { "@type": "AdministrativeArea", name: `${c.county}, WA` } },
        }}
      />
    </div>
  );
}
