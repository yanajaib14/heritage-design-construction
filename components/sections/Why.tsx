import type React from "react";

const REASONS = [
  ["Design and build, together", "Designers and builders on one team, so the plan you approve is the project you get."],
  ["Our own showroom", "Every finish chosen in person at Heritage Design Center: cabinetry, stone, tile and fixtures."],
  ["800+ projects since 2004", "A family-owned team that has been remodeling South Sound homes for two decades."],
  ["5-year warranty", "Our work is backed long after the final walkthrough."],
];

export default function Why({ showAboutLink = true }: { showAboutLink?: boolean }) {
  return (
    <section className="band bg-off on-light" id="why">
      <div className="wrap reasons">
        <div className="reasons-lead">
          <div className="eyebrow">Why Heritage</div>
          <h2 className="h2">Not just a contractor. <em>A design-build house.</em></h2>
          {showAboutLink && <a className="link" href="/about">About us →</a>}
          <figure className="reasons-fig"><img src="/images/svc-design.webp" alt="A Heritage designer reviewing plans with a client" loading="lazy" /><figcaption>Design meeting, Heritage Design Center, Lacey</figcaption></figure>
        </div>
        <ol className="reasons-list">
          {REASONS.map(([t, p], i) => (
            <li key={t} data-rv style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}>
              <span className="rn">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
