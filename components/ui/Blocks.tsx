import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/ui/JsonLd";

// Building blocks for the inner pages, so each page is a short list of sections.
// Anything in [square brackets] is a placeholder for the owner to fill in.

type Bg = "off" | "paper" | "graph" | "lime";
const bgClass = (bg: Bg = "off") => (bg === "graph" ? "band bg-graph" : `band bg-${bg} on-light`);

export function Head({ eyebrow, title, aside }: { eyebrow: string; title: ReactNode; aside?: ReactNode }) {
  return (
    <div className="sec-head">
      <div className="left">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="h2">{title}</h2>
      </div>
      {aside && (typeof aside === "string" ? <p>{aside}</p> : <div style={{ justifySelf: "end" }}>{aside}</div>)}
    </div>
  );
}

export function Tbd({ children }: { children: ReactNode }) {
  return (
    <span className="tbd" style={{ whiteSpace: "normal" }}>
      {children}
    </span>
  );
}

export function Intro({
  eyebrow,
  title,
  children,
  bg,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  bg?: Bg;
  id?: string;
}) {
  return (
    <section className={bgClass(bg)} id={id}>
      <div className="wrap pintro">
        <div className="left" style={{ display: "grid", gap: 22 }}>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="h2">{title}</h2>
        </div>
        <div className="prose">{children}</div>
      </div>
    </section>
  );
}

export type Card = { icon?: string; title: string; text: ReactNode; href?: string; cta?: string };

export function Cards({
  eyebrow,
  title,
  aside,
  cards,
  cols = 3,
  bg,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  cards: Card[];
  cols?: 2 | 3 | 4;
  bg?: Bg;
  id?: string;
}) {
  return (
    <section className={bgClass(bg)} id={id}>
      <div className="wrap">
        <Head eyebrow={eyebrow} title={title} aside={aside} />
        <div className={`cards${cols === 3 ? "" : " c" + cols}`}>
          {cards.map((c) => {
            const body = (
              <>
                {c.icon && <Icon name={c.icon} />}
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                {c.href && <span className="link">{c.cta ?? "Learn more"} →</span>}
              </>
            );
            return c.href ? (
              <Link className="wc" href={c.href} key={c.title}>
                {body}
              </Link>
            ) : (
              <div className="wc" key={c.title}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Steps({
  eyebrow,
  title,
  steps,
  bg = "graph",
}: {
  eyebrow: string;
  title: ReactNode;
  steps: { title: string; text: ReactNode }[];
  bg?: Bg;
}) {
  return (
    <section className={bgClass(bg)}>
      <div className="wrap">
        <Head eyebrow={eyebrow} title={title} />
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Split({
  eyebrow,
  title,
  text,
  rows,
  image,
  imageAlt,
  placeholder,
  flip,
  children,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
  rows?: ReactNode[];
  image?: string;
  imageAlt?: string;
  placeholder?: string;
  flip?: boolean;
  children?: ReactNode;
  id?: string;
}) {
  const media = image ? (
    <div className="sphoto" role="img" aria-label={imageAlt} style={{ backgroundImage: `url(${image})` }} />
  ) : (
    <div className="ph">{placeholder ?? "Photo"}</div>
  );
  const copy = (
    <div className="copy">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="h2">{title}</h2>
      <p>{text}</p>
      {rows && (
        <ul className="rows">
          {rows.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}
      {children && <div className="btns">{children}</div>}
    </div>
  );
  return (
    <section className="split bg-off on-light" id={id}>
      {flip ? (
        <>
          {copy}
          {media}
        </>
      ) : (
        <>
          {media}
          {copy}
        </>
      )}
    </section>
  );
}

export type QA = { q: string; a: string };

export function Faq({ eyebrow = "Questions", title, items, bg = "paper" }: { eyebrow?: string; title: ReactNode; items: QA[]; bg?: Bg }) {
  return (
    <section className={bgClass(bg)}>
      <div className="wrap faq-group" style={{ marginBottom: 0 }}>
        <div style={{ display: "grid", gap: 22, alignContent: "start" }}>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="h2" style={{ fontSize: "clamp(30px,3.4vw,44px)" }}>{title}</h2>
        </div>
        <div className="faq">
          {items.map((it) => (
            <details key={it.q}>
              <summary>{it.q}</summary>
              <div className="ans">
                <p>{it.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items
            .filter((it) => !it.a.startsWith("["))
            .map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })),
        }}
      />
    </section>
  );
}

export function Gallery({
  eyebrow,
  title,
  labels,
  photos,
  bg = "paper",
}: {
  eyebrow: string;
  title: ReactNode;
  labels?: string[];
  photos?: { src: string; alt: string }[];
  bg?: Bg;
}) {
  return (
    <section className={bgClass(bg)}>
      <div className="wrap">
        <Head eyebrow={eyebrow} title={title} />
        <div className="cards">
          {photos
            ? photos.map((p) => (
                <div className="sphoto gal-ph" role="img" aria-label={p.alt} key={p.src} style={{ backgroundImage: `url(${p.src})` }} />
              ))
            : (labels ?? []).map((l, i) => (
                <div className="ph shot" style={{ aspectRatio: "4/3" }} key={i}>
                  <small>Photo to come</small>
                  {l}
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
