import type React from "react";

// The 10 days at a glance, grouped into phases. The full day-by-day plan is on the program page.
const PHASES = [
  { d: "Day 1", t: "Pack-out & demo" },
  { d: "Days 2–3", t: "Prep & cabinet base" },
  { d: "Days 4–5", t: "Uppers & cabinet detail" },
  { d: "Days 6–7", t: "Flooring, stone & tile" },
  { d: "Days 8–9", t: "Fixtures & fine-tuning" },
  { d: "Day 10", t: "The unveiling" },
];

export default function TenDay() {
  return (
    <>
<section className="band bg-graph" id="ten-day">
  <div className="wrap tenday">
    <div className="intro">
      <div className="eyebrow">10-Day Kitchen Program</div>
      <h2 className="h2">Same layout. New kitchen. <em>In 10 business days.</em></h2>
      <p>For kitchens that keep their footprint: every cabinet, counter and finish is designed, selected and staged before day one, then a dedicated crew installs on a fixed 10-day schedule.</p>
      <div className="figs" id="figs"><div style={{'--d': '0s'} as React.CSSProperties}><strong className="chrome-text" data-to="10">10</strong><small>Business days</small></div><div style={{'--d': '.15s'} as React.CSSProperties}><strong className="chrome-text" data-to="45000" data-pre="$">$45,000</strong><small>Starting from</small></div><div style={{'--d': '.3s'} as React.CSSProperties}><strong className="chrome-text" data-to="5">5</strong><small>Year warranty</small></div></div>
      <div className="btns"><a className="btn btn-chrome" href="/contact">See if your kitchen qualifies →</a><a className="btn" href="/services/remodeling-services/kitchen-remodeling/10-day-kitchen-program">See the full day-by-day plan</a></div>
    </div>
  </div>
  <div className="wrap">
    <ol className="tl2" id="tl2" aria-label="The 10-day schedule at a glance">
      {PHASES.map((p, i) => (
        <li key={p.d} style={{ "--i": i } as React.CSSProperties}>
          <span className="tl2-node" aria-hidden="true"></span>
          <div className="tl2-card">
            <small>{p.d}</small>
            <h3>{p.t}</h3>
          </div>
        </li>
      ))}
    </ol>
  </div>
</section>
    </>
  );
}
