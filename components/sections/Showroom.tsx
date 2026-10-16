import type React from "react";

export default function Showroom() {
  return (
    <>
<section className="split bg-off on-light" id="showroom">
  <div className="sphoto" role="img" aria-label="Material selection boards with stone, tile and finish samples" style={{backgroundImage: 'url(/images/showroom.webp)'} as React.CSSProperties}></div>
  <div className="copy">
    <div className="eyebrow">Heritage Design Center Showroom</div>
    <h2 className="h2">Design, materials and showroom, <em>all under one roof.</em></h2>
    <p>Visit our showroom in Lacey to see cabinetry, stone, tile, plumbing fixtures and hardware on display, and make every selection side by side with a designer.</p>
    <div><p style={{color: 'var(--ink)', fontWeight: '500', fontSize: '15.5px'} as React.CSSProperties}>8695 Martin Way E #101, Lacey, WA 98516</p><p style={{fontSize: '15px'} as React.CSSProperties}>Mon–Fri 9:00–5:30 · Sat by appointment · (360) 557-3441</p></div>
    <div className="btns"><a className="btn btn-ink" href="#contact">Book a showroom visit →</a><a className="btn" href="https://www.heritagedesignctr.com" target="_blank" rel="noopener">heritagedesignctr.com ↗</a></div>
  </div>
</section>
    </>
  );
}
