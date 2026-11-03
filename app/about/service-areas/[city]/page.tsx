import type { Metadata } from "next";
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
    description: `Kitchen, bathroom and whole-home remodeling in ${c.name}, WA. Family-owned since 2004, 800+ projects, 5-year warranty, and a design showroom ${c.driveTime} away in Lacey.`,
  };
}

const R = "/services/remodeling-services";
const SERVICES = [
  { t: "Kitchen remodeling", p: "New layouts, custom cabinetry, stone and lighting, designed in our showroom.", href: `${R}/kitchen-remodeling` },
  { t: "Bathroom remodeling", p: "Primary suites, guest baths and walk-in showers.", href: `${R}/bathroom-remodeling` },
  { t: "Whole home remodeling", p: "Several rooms, one plan, one crew and one schedule.", href: `${R}/whole-home-remodeling` },
  { t: "Additions & ADU/DADU", p: "More room, or a separate unit on your lot.", href: `${R}/home-additions-adu` },
  { t: "Design services", p: "Plans, 3D renderings and every selection in one place.", href: "/services/design-services" },
];

export default async function CityPage({ params }: Props) {
  const c = cityPage((await params).city);
  if (!c) notFound();
  const url = `/about/service-areas/${c.slug}`;
  const drive = c.driveTime[0].toUpperCase() + c.driveTime.slice(1);
  const hoods = c.neighborhoods.map((n) => n.name);
  const reasons: [string, string][] = [
    ["A showroom close to home", `Our Lacey showroom is ${c.driveTime} from ${c.name}. See cabinets, stone, tile and fixtures in person and choose them in one visit.`],
    ["One team, design to build", "Your designer, your materials and our own crew, under one roof from the first sketch to the final walkthrough."],
    [`We know ${c.name} homes`, `From ${hoods.slice(0, -1).join(", ")} to ${hoods[hoods.length - 1]}, we plan around the way homes here were built.`],
    ["Permits handled", `We coordinate permits and inspections with the ${c.permits}.`],
  ];
  const directions = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(`${c.name}, WA`)}&destination=${encodeURIComponent(`${SITE.street}, ${SITE.city}, ${SITE.region} ${SITE.zip}`)}`;

  return (
    <>
      <PageHero
        eyebrow={`${c.name}, WA · ${c.county}`}
        title={<>{c.name}&apos;s design-build <em>remodeling team.</em></>}
        image={c.hero}
        lede={c.lede}
        crumbs={[
          { label: "About", href: "/about" },
          { label: "Service Areas", href: "/about/service-areas" },
          { label: c.name, href: url },
        ]}
      >
        <a className="btn btn-chrome" href="#consult">Book a free consultation →</a>
        <a className="btn" href={SITE.tel}>Call {SITE.phone}</a>
      </PageHero>

      <div className="tb2 ct-trust">
        <ul className="wrap tb2-row">
          {[
            ["2004", "Family owned since"],
            ["800+", "Projects completed"],
            ["5-Year", "Warranty on our work"],
            [c.driveTime.replace("about ", ""), `From ${c.name} to our showroom`],
          ].map(([n, b]) => (
            <li key={b}>
              <strong className="chrome-text">{n}</strong>
              <i aria-hidden="true"></i>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <section className="band bg-paper on-light ct-why">
        <div className="wrap ct-why-grid">
          <figure className="ct-why-fig">
            <Image src="/images/showroom.webp" alt="The Heritage Design Center showroom in Lacey" fill sizes="(max-width: 860px) 100vw, 45vw" />
          </figure>
          <div>
            <div className="eyebrow">Why {c.name} chooses Heritage</div>
            <h2 className="h2">Remodeling in {c.name}, <em>done properly.</em></h2>
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

      <section className="band bg-off on-light ct-ba">
        <div className="wrap ct-ba-grid">
          <div className="ct-ba-copy">
            <div className="eyebrow">A recent transformation</div>
            <h2 className="h2">Same home. <em>A new kitchen.</em></h2>
            <p>{c.intro[0]}</p>
            <p className="ct-ba-tag"><Tbd>[Name the {c.name} project shown here, or swap in one from {c.name}.]</Tbd></p>
            <Link className="link" href="/portfolio">See more of our work →</Link>
          </div>
          <BeforeAfter
            className="ct-ba-photo"
            before="/images/ba-kitchen-before.webp"
            after="/images/ba-kitchen-after.webp"
            beforeAlt="The kitchen before the remodel"
            afterAlt="The same kitchen after the remodel"
          />
        </div>
      </section>

      <Steps
        eyebrow={`${c.name} neighborhoods`}
        title={<>Knowing the homes <em>we work on.</em></>}
        steps={c.neighborhoods.map((n) => ({ title: n.name, text: n.note }))}
      />

      <section className="band bg-paper on-light ct-svc">
        <div className="wrap ct-svc-grid">
          <div>
            <div className="eyebrow">Services in {c.name}</div>
            <h2 className="h2">Everything for <em>your {c.name} home.</em></h2>
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
                  <small>{s.p}</small>
                  <i aria-hidden="true">→</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Programs />

      <section className="band bg-graph ct-rev">
        <div className="wrap ct-rev-grid">
          <div>
            <div className="eyebrow">What clients say</div>
            <h2 className="h2">In their <em>own words.</em></h2>
            <p className="ct-rev-note"><Tbd>[Add a review from a {c.name} client.]</Tbd></p>
          </div>
          <Quotes list={reviewsFor().filter((r) => !r.placeholder)} />
        </div>
      </section>

      <section className="ct-visit">
        <div className="wrap ct-visit-grid">
          <div>
            <div className="eyebrow">Visit the showroom</div>
            <h2 className="h2">{drive} <em>from {c.name}.</em></h2>
            <p>Walk through kitchens and baths, hold the samples in your hand, and leave with a plan. Bring your measurements or photos and we will take it from there.</p>
            <dl>
              <div><dt>Address</dt><dd>{SITE.street}, {SITE.city}, {SITE.region} {SITE.zip}</dd></div>
              <div><dt>Hours</dt><dd>{SITE.hours}</dd></div>
              <div><dt>Phone</dt><dd><a href={SITE.tel}>{SITE.phone}</a></dd></div>
            </dl>
            <div className="btns">
              <a className="btn btn-chrome" href={directions} target="_blank" rel="noopener">Directions from {c.name} →</a>
              <Link className="btn" href="/about/showroom">About the showroom</Link>
            </div>
          </div>
          <figure>
            <Image src="/images/sr-consult.webp" alt="A design consultation in the showroom" fill sizes="(max-width: 860px) 100vw, 50vw" />
          </figure>
        </div>
      </section>

      <Faq title={<>{c.name} <em>questions.</em></>} items={c.faq} />

      <section className="band bg-paper on-light city-near">
        <div className="wrap">
          <div className="eyebrow">Also serving nearby</div>
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
        title={<>Start your {c.name} <em>remodel.</em></>}
        text={`Tell us a little about your home and we will set up a free consultation, in your ${c.name} home or at our Lacey showroom.`}
        steps={[
          { t: "Consultation", p: "We visit your home or meet you at the showroom to talk through the project." },
          { t: "Design & selections", p: "Your designer draws the plan and you choose every finish in one place." },
          { t: "Build", p: "Our own crew builds it on a set schedule, backed by a 5-year warranty." },
        ]}
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
    </>
  );
}
