import Image from "next/image";
import { KINDS, PROJECTS, type ProjectKind } from "@/lib/portfolio";

// Portfolio in three categories; the tabs switch between them (lib/site-effects.js).
// Each project is named for its type and city, with the name under the photo rather than over it.
export default function Portfolio({ start = "kitchen" }: { start?: ProjectKind }) {
  return (
    <section className="band bg-graph" id="portfolio">
      <div className="wrap">
        <div className="sec-head">
          <div className="left"><div className="eyebrow">Portfolio</div><h2 className="h2">Projects we’re <em>proud of.</em></h2></div>
        </div>
        <div className="filters pf3-tabs" role="group" aria-label="Project category">
          {KINDS.map((c) => (
            <button key={c.k} type="button" data-f={c.k} aria-pressed={c.k === start}>
              {c.label} <small>{PROJECTS.filter((p) => p.kind === c.k).length}</small>
            </button>
          ))}
        </div>
        <div className="pf3-grid" id="pgrid">
          {PROJECTS.map((p) => {
            const name = KINDS.find((c) => c.k === p.kind)!.name;
            return (
              <figure className="pf3" data-k={p.kind} key={p.img} hidden={p.kind !== start}>
                <div className="pf3-img"><Image src={p.img} alt={p.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div>
                <figcaption>
                  {name} – {p.city || <span className="tbd">[City]</span>}
                </figcaption>
              </figure>
            );
          })}
        </div>
        <div className="pf-foot"><a className="btn" href="/portfolio">View full portfolio →</a></div>
      </div>
    </section>
  );
}
