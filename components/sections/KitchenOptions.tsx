import type React from "react";

const OPTIONS = [
  {
    n: "I", tag: "Full transformation", title: "Custom Kitchen Remodel",
    href: "/services/remodeling-services/kitchen-remodeling",
    text: "A fully custom design: new layout, cabinetry, stone, lighting and structural changes.",
    rows: [["Layout", "Can change"], ["Cabinets", "All new, custom"], ["Starting from", "[to confirm]"]],
    go: "Explore custom",
  },
  {
    n: "II", tag: "Planned program", title: "10-Day Kitchen Program", mark: "Fixed 10-day schedule",
    href: "/services/remodeling-services/kitchen-remodeling/10-day-kitchen-program",
    text: "Same layout, all-new kitchen, installed in 10 business days with everything staged before day one.",
    rows: [["Layout", "Stays the same"], ["Cabinets", "All new"], ["Starting from", "$45,000"]],
    go: "See the 10 days",
  },
  {
    n: "III", tag: "Refresh what you have", title: "Cabinet Refacing",
    href: "/services/remodeling-services/kitchen-remodeling/cabinet-refacing",
    text: "New doors, drawer fronts and finishes on your existing cabinet boxes, for a whole new look without replacing the cabinets.",
    rows: [["Layout", "Stays the same"], ["Cabinets", "Existing boxes, new fronts"], ["Starting from", "[to confirm]"]],
    go: "Ask about refacing",
  },
];

export default function KitchenOptions() {
  return (
    <section className="band bg-paper on-light" id="kitchen-options">
      <div className="wrap">
        <div className="ed-head">
          <div><div className="eyebrow">Kitchen options</div><h2 className="h2">Three ways to a <em>new kitchen.</em></h2></div>
          <p className="ed-aside">Not sure which fits your home? <a href="/contact">Ask a designer →</a></p>
        </div>
        <div className="spec">
          {OPTIONS.map((o, i) => (
            <a className={"spec-col" + (o.mark ? " feat" : "")} href={o.href} key={o.title} data-rv style={{ "--d": `${i * 0.12}s` } as React.CSSProperties}>
              <span className="spec-top"><span className="spec-n">{o.n}</span>{o.mark && <span className="spec-mark">{o.mark}</span>}</span>
              <span className="spec-tag">{o.tag}</span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
              <dl>{o.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd className={v.startsWith("[") ? "tbd" : undefined}>{v}</dd></div>)}</dl>
              <span className="spec-go">{o.go}<i aria-hidden="true">→</i></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
