import type React from "react";

// Stacked photo deck: the top card slides off to the back every few seconds, or on the arrows.
// Wired up for every `.kdeck` by lib/site-effects.js.
export default function PhotoDeck({ photos, label }: { photos: { src: string; alt: string }[]; label: string }) {
  return (
    <div className="kdeck-col">
      <div className="kdeck" aria-roledescription="carousel" aria-label={label}>
        {photos.map((d, i) => (
          <figure key={d.src} style={{ "--k": i } as React.CSSProperties} aria-hidden={i ? "true" : undefined}>
            <img src={d.src} alt={d.alt} loading={i ? "lazy" : undefined} />
          </figure>
        ))}
      </div>
      <div className="kdeck-bar">
        <button type="button" className="kdeck-prev" aria-label="Previous photo">←</button>
        <p aria-live="polite"><span><span className="kdeck-n">01</span> / {String(photos.length).padStart(2, "0")}</span></p>
        <button type="button" className="kdeck-next" aria-label="Next photo">→</button>
      </div>
    </div>
  );
}
