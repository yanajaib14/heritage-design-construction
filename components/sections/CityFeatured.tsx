import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import JsonLd from "@/components/ui/JsonLd";
import type { Featured } from "@/lib/city-featured";
import { BASE_URL } from "@/lib/site";

// Openings and signature sections for the three cities with their own design:
// Tacoma (dark, split), Olympia (full-height, centered), University Place (panoramic, minimal).

type HeroProps = {
  design: "tacoma" | "olympia" | "up";
  eyebrow: string;
  title: ReactNode;
  lede: string;
  image: string;
  alt: string;
  url: string;
  name: string;
  children: ReactNode;
};

export function CityHero({ design, eyebrow, title, lede, image, alt, url, name, children }: HeroProps) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Service Areas", href: "/about/service-areas" },
    { label: name, href: url },
  ];
  const copy = (
    <div className="ch-copy">
      <div className="eyebrow lead">{eyebrow}</div>
      <h1>{title}</h1>
      <p className="lede">{lede}</p>
      <div className="btns">{children}</div>
    </div>
  );
  return (
    <section className={`ch ch-${design}`}>
      {design === "tacoma" && (
        <div className="ch-split">
          {copy}
          <figure>
            <Image src={image} alt={alt} fill priority sizes="(max-width: 860px) 100vw, 55vw" />
          </figure>
        </div>
      )}
      {design === "olympia" && (
        <>
          <figure className="ch-bg">
            <Image src={image} alt={alt} fill priority sizes="100vw" />
          </figure>
          <div className="wrap">{copy}</div>
        </>
      )}
      {design === "up" && (
        <>
          <div className="wrap">{copy}</div>
          <figure className="ch-pano">
            <Image src={image} alt={alt} fill priority sizes="100vw" />
          </figure>
        </>
      )}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: BASE_URL + c.href })),
        }}
      />
    </section>
  );
}

// Tacoma: statement on charcoal over a filmstrip, then numbered rows beside a tall photo.
export function TacomaFeature({ f, name }: { f: Featured; name: string }) {
  return (
    <>
      <section className="band bg-char tf-state" key="tf-state">
        <div className="wrap">
          <div className="tf-state-grid">
            <div className="eyebrow">High-end remodeling in {name}</div>
            <div>
              <h2 className="tf-h">{f.statement[0]} <em>{f.statement[1]}</em></h2>
              <p>{f.statementText}</p>
              <Link className="link" href="/portfolio">See our finished work →</Link>
            </div>
          </div>
          <div className="tf-film">
            {f.gallery.map((g) => (
              <figure key={g.src}>
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 860px) 50vw, 30vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="band bg-paper on-light tf-asks" key="tf-asks">
        <div className="wrap tf-asks-grid">
          <figure>
            <Image src={f.gallery[1].src} alt={f.gallery[1].alt} fill sizes="(max-width: 860px) 100vw, 40vw" />
          </figure>
          <div>
            <div className="eyebrow">{name} projects</div>
            <h2 className="h2">{f.asksTitle[0]} <em>{f.asksTitle[1]}</em></h2>
            <ol>
              {f.asks.map((a, n) => (
                <li key={a.t}>
                  <div>
                    <h3>{a.t}</h3>
                    <p>{a.p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

// Olympia: centered statement with a two-by-two gallery, then alternating photo and text rows.
export function OlympiaFeature({ f, name }: { f: Featured; name: string }) {
  return (
    <>
      <section className="band bg-paper on-light of-state" key="of-state">
        <div className="wrap">
          <div className="eyebrow">Remodeling in {name}</div>
          <h2 className="of-h">{f.statement[0]} <em>{f.statement[1]}</em></h2>
          <p>{f.statementText}</p>
          <Link className="link" href="/portfolio">See our finished work →</Link>
        </div>
      </section>
      <section className="band bg-off on-light of-rows" key="of-rows">
        <div className="wrap">
          <div className="of-rows-head">
            <div className="eyebrow">{name} projects</div>
            <h2 className="h2">{f.asksTitle[0]} <em>{f.asksTitle[1]}</em></h2>
          </div>
          <ol>
            {f.asks.map((a, n) => (
              <li key={a.t}>
                <figure>
                  <Image src={f.gallery[n % f.gallery.length].src} alt={f.gallery[n % f.gallery.length].alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
                </figure>
                <div>
                  <h3>{a.t}</h3>
                  <p>{a.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

// University Place: one large statement, a two-by-two grid of asks, and a scrolling gallery.
export function UpFeature({ f, name }: { f: Featured; name: string }) {
  return (
    <>
      <section className="band bg-paper on-light uf-state" key="uf-state">
        <div className="wrap">
          <h2 className="uf-h">{f.statement[0]} <em>{f.statement[1]}</em></h2>
          <div className="uf-row">
            <div className="eyebrow">High-end remodeling in {name}</div>
            <p>{f.statementText}</p>
          </div>
        </div>
      </section>
      <section className="band bg-sand on-light uf-asks" key="uf-asks">
        <div className="wrap">
          <div className="eyebrow">{name} projects</div>
          <h2 className="h2">{f.asksTitle[0]} <em>{f.asksTitle[1]}</em></h2>
          <ol>
            {f.asks.map((a, n) => (
              <li key={a.t}>
                <h3>{a.t}</h3>
                <p>{a.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="uf-strip" key="uf-strip" aria-label="Recent projects">
        <ul>
          {f.gallery.map((g) => (
            <li key={g.src}>
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 860px) 80vw, 40vw" />
            </li>
          ))}
        </ul>
        <div className="wrap"><Link className="link" href="/portfolio">See our finished work →</Link></div>
      </section>
    </>
  );
}
