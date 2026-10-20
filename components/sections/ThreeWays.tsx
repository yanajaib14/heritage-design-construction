import Image from "next/image";
import { PATHS, STEPS } from "@/lib/home";

// Homepage: how we work (design, supply, build) and the three routes to a new kitchen, led by photos.
export default function ThreeWays() {
  return (
    <section className="band bg-paper on-light tw" id="kitchen-options">
      <div className="wrap">
        <div className="tw-head">
          <div className="eyebrow">One team, start to finish</div>
          <h2 className="h2">Three ways to a <em>new kitchen.</em></h2>
        </div>
        <ol className="tw-steps">
          {STEPS.map((s, i) => (
            <li key={s.t}>
              <span className="rn">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
            </li>
          ))}
        </ol>
        <div className="tw-cols">
          {PATHS.map((p) => (
            <a key={p.t} className="tw-col" href={p.href}>
              <span className="tw-img"><Image src={p.img} alt={p.alt} fill sizes="(max-width: 860px) 100vw, 33vw" /></span>
              <h3>{p.t}</h3>
              <p>{p.p}</p>
              <span className="link">{p.link} →</span>
            </a>
          ))}
        </div>
        <p className="tw-more">
          We also remodel <a href="/services/remodeling-services/bathroom-remodeling">bathrooms</a> and <a href="/services/remodeling-services/whole-home-remodeling">whole homes</a>, and build for <a href="/services/construction-services/commercial-construction">businesses</a>.
        </p>
      </div>
    </section>
  );
}
