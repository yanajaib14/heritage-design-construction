import Image from "next/image";
import { BA_PROJECTS, GALLERY } from "@/lib/home";
import BeforeAfter from "@/components/ui/BeforeAfter";

// Homepage portfolio: pick a project on the left to load it into the large before/after slider,
// with a strip of finished projects underneath. lib/site-effects.js switches the tabs.
export default function HomePortfolio() {
  return (
    <section className="band bg-graph hpf2" id="portfolio">
      <div className="wrap">
        <div className="hpf2-main" id="hpf2">
          <div className="hpf2-copy">
            <div className="eyebrow">Recent transformations</div>
            <h2 className="h2">Before, <em>and after.</em></h2>
            <p>Drag the line to see what changed.</p>
            <ol className="hpf2-tabs" role="tablist" aria-label="Projects">
              {BA_PROJECTS.map((p, i) => (
                <li key={p.t}>
                  <button type="button" role="tab" aria-selected={i === 0} data-i={i} className={i === 0 ? "on" : undefined}>
                    <span className="hpf2-n">{String(i + 1).padStart(2, "0")}</span>
                    <span className="hpf2-t"><b>{p.t}</b><small>{p.p}</small></span>
                  </button>
                </li>
              ))}
            </ol>
            <a className="btn btn-chrome" href="/portfolio">View the full portfolio →</a>
          </div>
          <div className="hpf2-stage">
            {BA_PROJECTS.map((p, i) => (
              <div key={p.t} className={`hpf2-slide${i === 0 ? " on" : ""}`} role="tabpanel" aria-hidden={i ? "true" : undefined}>
                <BeforeAfter before={p.before} after={p.after} beforeAlt={p.beforeAlt} afterAlt={p.afterAlt} sizes="(max-width: 860px) 100vw, 60vw" />
              </div>
            ))}
          </div>
        </div>
        <ul className="hpf2-strip">
          {GALLERY.map((g) => (
            <li key={g.img}>
              <a href="/portfolio"><Image src={g.img} alt={g.alt} fill sizes="(max-width: 860px) 50vw, 25vw" /></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
