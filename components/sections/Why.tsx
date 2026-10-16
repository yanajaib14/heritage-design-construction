import type React from "react";

export default function Why({ showAboutLink = true }: { showAboutLink?: boolean }) {
  return (
    <>
<section className="band bg-off on-light why-band" id="why">
  <img className="why-mark" src="/brand/heritage-mark.webp" alt="" aria-hidden="true" />
  <div className="wrap">
    <div className="sec-head">
      <div className="left"><div className="eyebrow">Why Heritage</div><h2 className="h2">Not just a contractor. <em>A design-build house.</em></h2></div>
      {showAboutLink && <div style={{justifySelf: 'end'} as React.CSSProperties}><a className="btn" href="/about">About Us →</a></div>}
    </div>
    <div className="why">
      <div className="wc" data-rv style={{'--d': '0.00s'} as React.CSSProperties}><span className="ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 21l3.5-1 11-11-2.5-2.5-11 11L3 21z" /><path d="M14 6l2.5 2.5" /><path d="M13 21h8" /></svg></span><h3>Design + build, together</h3><p>Designers and builders on one team, so the plan you approve is the project you get.</p></div>
      <div className="wc" data-rv style={{'--d': '0.12s'} as React.CSSProperties}><span className="ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 4h18l-1 5H4z" /><path d="M8 4l-1 5M12 4v5M16 4l1 5" /><path d="M5 9v11h14V9" /><path d="M10 20v-6h4v6" /></svg></span><h3>Our own showroom</h3><p>Every finish chosen in person at Heritage Design Center: cabinetry, stone, tile and fixtures.</p></div>
      <div className="wc" data-rv style={{'--d': '0.24s'} as React.CSSProperties}><span className="ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-5h4v5" /></svg></span><h3>800+ projects since 2004</h3><p>A family-owned team that has been remodeling South Sound homes for two decades.</p></div>
      <div className="wc" data-rv style={{'--d': '0.36s'} as React.CSSProperties}><span className="ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg></span><h3>5-year warranty</h3><p>Our work is backed long after the final walkthrough.</p></div>
    </div>
    <div className="why-foot" data-rv style={{'--d': '.5s'} as React.CSSProperties}><span>Design</span><i></i><span>Supply</span><i></i><span>Build</span><i></i><span>Warranty</span></div>
  </div>
</section>
    </>
  );
}
