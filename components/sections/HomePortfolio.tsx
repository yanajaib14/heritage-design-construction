import { BA_PROJECTS, GALLERY } from "@/lib/home";
import BeforeAfter from "@/components/ui/BeforeAfter";
import ProjectGallery from "@/components/ui/ProjectGallery";

// Homepage portfolio: a kitchen and a bathroom before/after side by side, then a filterable
// gallery of finished projects; a photo opens large in a viewer.
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
        <ProjectGallery photos={GALLERY} />
        <div className="hpf3-foot"><a className="btn btn-chrome" href="/portfolio">View the full portfolio →</a></div>
      </div>
    </section>
  );
}
