import Image from "next/image";
import { PROJECTS } from "@/lib/home";
import BeforeAfter from "@/components/ui/BeforeAfter";

// Homepage: a few projects shown large; ones with a "before" photo become drag-to-compare sliders.
export default function HomePortfolio() {
  return (
    <section className="band bg-off on-light hpf" id="portfolio">
      <div className="wrap">
        <div className="hpf-head">
          <h2 className="h2">Before, <em>and after.</em></h2>
          <a className="link" href="/portfolio">View the full portfolio →</a>
        </div>
        <div className="hpf-grid">
          {PROJECTS.map((p, i) =>
            p.before ? (
              <BeforeAfter key={p.img} className={`hpf-item hpf-${i}`} before={p.before} after={p.img} beforeAlt={p.beforeAlt ?? ""} afterAlt={p.alt} />
            ) : (
              <a key={p.img} className={`hpf-item hpf-${i}`} href={p.href}><Image src={p.img} alt={p.alt} fill sizes="(max-width: 860px) 100vw, 50vw" /></a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
