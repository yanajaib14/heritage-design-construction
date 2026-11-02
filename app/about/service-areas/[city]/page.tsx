import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { Cards, Faq, Intro, Steps, Tbd } from "@/components/ui/Blocks";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Contact from "@/components/sections/Contact";
import { CITY_PAGES, cityPage } from "@/lib/cities";
import { PROJECTS } from "@/lib/portfolio";
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
    title: `Remodeling in ${c.name}, WA | Kitchens, Baths & Whole Homes`,
    description: `Kitchen, bathroom and whole-home remodeling in ${c.name}, WA from a family-owned design-build team based in Lacey. Visit our showroom or book a consultation.`,
  };
}

const R = "/services/remodeling-services";

export default async function CityPage({ params }: Props) {
  const c = cityPage((await params).city);
  if (!c) notFound();
  const url = `/about/service-areas/${c.slug}`;
  const work = PROJECTS.filter((p) => p.kind === "kitchen").slice(0, 2).concat(PROJECTS.filter((p) => p.kind === "bath").slice(0, 1));

  return (
    <>
      <PageHero
        eyebrow={`${c.name}, WA`}
        title={<>Remodeling in {c.name}, <em>designed and built by one team.</em></>}
        image={c.hero}
        lede={c.lede}
        crumbs={[
          { label: "About", href: "/about" },
          { label: "Service Areas", href: "/about/service-areas" },
          { label: c.name, href: url },
        ]}
      >
        <Link className="btn btn-chrome" href="/contact">Book a Consultation →</Link>
        <Link className="btn" href="/about/showroom">Visit the showroom</Link>
      </PageHero>

      <Intro eyebrow={`Remodeling in ${c.name}`} title={<>Close to home, <em>under one roof.</em></>}>
        {c.intro.map((p) => (
          <p key={p}>{p.includes("[") ? <Tbd>{p}</Tbd> : p}</p>
        ))}
        <ul className="city-areas" aria-label={`Parts of ${c.name} we work in`}>
          {c.areas.map((a) => (
            <li key={a}>{a.startsWith("[") ? <Tbd>{a}</Tbd> : a}</li>
          ))}
        </ul>
      </Intro>

      <Cards
        eyebrow={`Services in ${c.name}`}
        title={<>What we do <em>in {c.name}.</em></>}
        bg="paper"
        cards={[
          { icon: "grid", title: "Kitchen remodeling", text: "Design-led kitchens, from new layouts to finishes.", href: `${R}/kitchen-remodeling`, cta: "Kitchens" },
          { icon: "drop", title: "Bathroom remodeling", text: "Primary suites, guest baths and walk-in showers.", href: `${R}/bathroom-remodeling`, cta: "Bathrooms" },
          { icon: "home", title: "Whole home remodeling", text: "Several rooms, one plan and one crew.", href: `${R}/whole-home-remodeling`, cta: "Whole home" },
          { icon: "layers", title: "Additions & ADU/DADU", text: "More room, or a separate unit on your lot.", href: `${R}/home-additions-adu`, cta: "Additions" },
          { icon: "clock", title: "Remodeling packages", text: "10-Day Kitchen, Cabinet Refacing and Fast Bath.", href: `${R}/remodeling-packages`, cta: "Packages" },
          { icon: "pencil", title: "Design services", text: "Plans and selections made in our showroom.", href: "/services/design-services", cta: "Design" },
        ]}
      />

      <Steps
        eyebrow={`${c.name} homes`}
        title={<>Knowing the homes <em>we work on.</em></>}
        steps={c.homes.map((h) => ({ title: h.title, text: h.text.startsWith("[") ? <Tbd>{h.text}</Tbd> : h.text }))}
      />

      <section className="band bg-off on-light">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <div className="eyebrow">Our work</div>
              <h2 className="h2">Recent <em>projects.</em></h2>
            </div>
            <Link className="link" href="/portfolio">See the full portfolio →</Link>
          </div>
          <div className="cards city-work">
            {work.map((p) => (
              <figure key={p.img}>
                <div className="sphoto gal-ph" role="img" aria-label={p.alt} style={{ backgroundImage: `url(${p.img})` }} />
              </figure>
            ))}
          </div>
          <p className="city-note"><Tbd>[Swap in projects built in {c.name} once confirmed.]</Tbd></p>
        </div>
      </section>

      <ServiceAreas city={c.name} />

      <Faq title={<>{c.name} <em>questions.</em></>} items={c.faq} />

      <Contact title={<>Let’s talk about <em>your {c.name} home.</em></>} />

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
