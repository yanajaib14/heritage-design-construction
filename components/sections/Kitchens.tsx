import type React from "react";

// Kitchen photos shown as a stacked deck: the top card rotates to the back every few seconds,
// or on the arrows. Names match the portfolio grid.
const DECK = [
  { src: "/images/kitchens.webp", n: "Open White Kitchen" },
  { src: "/images/pf-university.webp", n: "Transitional White Kitchen" },
  { src: "/images/pf-midnight.webp", n: "Craftsman Transitional" },
  { src: "/images/pf-quartz.webp", n: "Slab Backsplash Kitchen" },
  { src: "/images/pf-forest.webp", n: "Contemporary Island" },
  { src: "/images/pf-coastal.webp", n: "Transitional Chef Kitchen" },
];

export default function Kitchens() {
  return (
    <section className="split bg-off on-light" id="kitchens">
      <div className="kdeck-col">
        <div className="kdeck" id="kdeck" aria-roledescription="carousel" aria-label="Kitchen projects">
          {DECK.map((d, i) => (
            <figure key={d.src} style={{ "--k": i } as React.CSSProperties} aria-hidden={i ? "true" : undefined}>
              <img src={d.src} alt={d.n} loading={i ? "lazy" : undefined} />
            </figure>
          ))}
        </div>
        <div className="kdeck-bar">
          <button type="button" className="kdeck-prev" aria-label="Previous kitchen">←</button>
          <p aria-live="polite"><span><span className="kdeck-n">01</span> / {String(DECK.length).padStart(2, "0")}</span><b className="kdeck-t">{DECK[0].n}</b></p>
          <button type="button" className="kdeck-next" aria-label="Next kitchen">→</button>
        </div>
      </div>
      <div className="copy">
        <div className="eyebrow">Custom kitchens</div>
        <h2 className="h2">The kitchen, <em>elevated.</em></h2>
        <p>Fully custom kitchens designed around how you cook, gather and live, with premium cabinetry, natural stone and craftsmanship built to last for decades.</p>
        <ul className="rows"><li>Custom and semi-custom cabinetry</li><li>Natural stone and quartz surfaces</li><li>Layout, lighting and structural changes</li><li>Every selection made in our Lacey showroom</li></ul>
        <div className="btns"><a className="btn btn-chrome" href="/services/remodeling-services/kitchen-remodeling">Kitchen Remodeling →</a><a className="btn" href="/services/remodeling-services/whole-home-remodeling">Whole Home Remodeling →</a></div>
      </div>
    </section>
  );
}
