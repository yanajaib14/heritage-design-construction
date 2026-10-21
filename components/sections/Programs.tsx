import Image from "next/image";

// Homepage overview of the two fixed-schedule programs. The full detail lives on each program page.
const PROGRAMS = [
  {
    href: "/services/remodeling-services/kitchen-remodeling/10-day-kitchen-program",
    n: "10",
    unit: "business days",
    eyebrow: "10-Day Kitchen Program",
    t: "A new kitchen, same layout.",
    p: "Everything designed and staged before day one, then installed on a fixed schedule.",
    facts: ["From $45,000", "5-year warranty"],
    img: "/images/timeline/day-10-final-walkthrough.webp",
    alt: "A finished kitchen on day 10 of the program",
    dark: true,
  },
  {
    href: "/services/remodeling-services/bathroom-remodeling/fast-bath-program",
    n: "3",
    unit: "days",
    eyebrow: "Fast Bath",
    t: "A new bathroom, no long remodel.",
    p: "In as little as 3 days: tub-to-shower conversions, new surrounds and vanity upgrades, done right.",
    facts: ["From [$X,XXX]", "5-year warranty"],
    img: "/images/fb-room.webp",
    alt: "A finished Fast Bath bathroom",
    dark: false,
  },
];

export default function Programs() {
  return (
    <section className="band bg-off on-light progs" id="programs">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <div className="eyebrow">Signature programs</div>
            <h2 className="h2">Fast, <em>without cutting corners.</em></h2>
          </div>
        </div>
        <div className="progs-grid">
          {PROGRAMS.map((g) => (
            <a key={g.href} className={`prog${g.dark ? " prog-dark" : ""}`} href={g.href}>
              <figure>
                <Image src={g.img} alt={g.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
              </figure>
              <div className="prog-body">
                <div className="prog-num">
                  <strong className={g.dark ? "chrome-text" : undefined}>{g.n}</strong>
                  <span>{g.unit}</span>
                </div>
                <div className="prog-copy">
                  <span className="prog-eyebrow">{g.eyebrow}</span>
                  <h3>{g.t}</h3>
                  <p>{g.p}</p>
                  <ul>{g.facts.map((f) => <li key={f}>{f}</li>)}</ul>
                  <span className="prog-go">Explore the program</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
