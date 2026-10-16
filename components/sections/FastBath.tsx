import type React from "react";

export default function FastBath() {
  return (
    <>
<section className="band bg-lime on-light" id="fast-bath">
  <div className="wrap fb">
    <div className="copy">
      <div className="eyebrow">Fast Bath</div>
      <h2 className="h2">A new bathroom in <em>as little as 3 days.</em></h2>
      <p className="lede">Fast, affordable, high-quality bathroom upgrades. No months-long remodel, and no living in a construction zone.</p>
      <div className="fb3">
        <div><h3>Tub-to-shower conversions</h3><p>Swap a dated tub for a low-threshold walk-in shower.</p></div>
        <div><h3>Tub &amp; shower replacements</h3><p>New surround, fixtures and glass, without a full gut.</p></div>
        <div><h3>Vanity &amp; fixture upgrades</h3><p>Fresh vanity, faucets and lighting to finish the room.</p></div>
      </div>
      <div className="chips"><span>Starting at <span className="tbd">[$X,XXX]</span></span><span>5-year warranty</span><span>Financing available</span></div>
      <div className="btns"><a className="btn btn-ink" href="#estimator">Get my AI estimate →</a><a className="btn" href="/services/remodeling-services/bathroom-remodeling/fast-bath-program">Explore Fast Bath</a></div>
    </div>
    <div>
      <div className="ba" id="ba" style={{'--p': '50%'} as React.CSSProperties}>
        <img src="/images/fb-after.webp" alt="Bathroom after the remodel" loading="lazy" />
        <div className="ba-before"><img src="/images/fb-before.webp" alt="Bathroom before the remodel" loading="lazy" /></div>
        <i className="ba-line" aria-hidden="true"><b></b></i>
        <span className="ba-tag l" aria-hidden="true">Before</span><span className="ba-tag r" aria-hidden="true">After</span>
        <input type="range" min="0" max="100" defaultValue="50" aria-label="Drag to compare before and after" />
      </div>
      <div className="est" id="estimator">
        <div className="est-top"><b id="estStep">Step 1 of 4</b><span id="estLabel">Bathroom size</span></div>
        <div className="bar"><i id="estBar"></i></div>
        <div id="estBody"></div>
        <button className="btn btn-ink" id="estNext" type="button">Continue →</button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
