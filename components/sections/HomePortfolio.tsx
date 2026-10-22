import Image from "next/image";
import { BA_PROJECTS, GALLERY } from "@/lib/home";
import BeforeAfter from "@/components/ui/BeforeAfter";

// Homepage portfolio: a kitchen and a bathroom before/after side by side, then a carousel of
// finished projects. Arrows step through the carousel; a photo opens large in a viewer.
export default function HomePortfolio() {
  return (
    <section className="band bg-graph hpf3" id="portfolio">
      <div className="wrap">
        <header className="hpf3-head">
          <div className="eyebrow">Recent transformations</div>
          <h2 className="h2">Before, <em>and after.</em></h2>
          <p><span className="ba-hint-fine">Move across each photo to see what changed.</span><span className="ba-hint-touch">Drag the line on each photo to see what changed.</span></p>
        </header>
        <div className="hpf3-pair">
          {BA_PROJECTS.map((p, i) => (
            <figure key={p.t}>
              <BeforeAfter before={p.before} after={p.after} beforeAlt={p.beforeAlt} afterAlt={p.afterAlt} sizes="(max-width: 860px) 100vw, 50vw" />
              <figcaption>
                <span className="hpf3-n">{String(i + 1).padStart(2, "0")}</span>
                <span><b>{p.t}</b><small>{p.p}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="hpf3-gal" id="hpfGal">
          <div className="hpf3-bar">
            <h3>More finished projects</h3>
            <div className="hpf3-arrows">
              <button type="button" className="hpf3-prev" aria-label="Previous projects">←</button>
              <button type="button" className="hpf3-next" aria-label="Next projects">→</button>
            </div>
          </div>
          <ul className="hpf3-track">
            {GALLERY.map((g, i) => (
              <li key={g.img}>
                <button type="button" data-i={i} aria-label={`View larger: ${g.alt}`}>
                  <Image src={g.img} alt={g.alt} fill sizes="(max-width: 860px) 80vw, 33vw" />
                </button>
              </li>
            ))}
          </ul>
          <dialog className="hpf3-view" aria-label="Project photo">
            <img alt="" />
            <button type="button" className="hpf3-x" aria-label="Close">×</button>
            <button type="button" className="hpf3-vp" aria-label="Previous photo">←</button>
            <button type="button" className="hpf3-vn" aria-label="Next photo">→</button>
            <p className="hpf3-count" aria-live="polite"></p>
          </dialog>
        </div>
        <div className="hpf3-foot"><a className="btn btn-chrome" href="/portfolio">View the full portfolio →</a></div>
      </div>
    </section>
  );
}
