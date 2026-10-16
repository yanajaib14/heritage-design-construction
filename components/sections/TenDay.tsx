import type React from "react";

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
      <div className="btns"><a className="btn btn-chrome" href="#contact">See if your kitchen qualifies →</a><a className="btn" href="#kitchens">Compare with custom</a></div>
    </div>
    <div className="tl" id="tl">
      <div className="tl-now" aria-live="polite">
        <div className="big"><small>Day</small><strong id="tlNum">01</strong><span>/ 10</span></div>
        <h3 id="tlTitle">Pack-out &amp; demo</h3>
        <p id="tlDesc">We protect your home, pack out the kitchen and remove the old cabinets and counters.</p>
      </div>
      <ol className="tl-list" aria-label="Ten-day schedule"><span className="tl-fill" aria-hidden="true"></span><li><button type="button" data-i="0" data-d="1" aria-label="Day 1: Pack-out & demo"><span className="node"></span>Day 1</button></li><li><button type="button" data-i="1" data-d="2" aria-label="Day 2: Prep & repairs"><span className="node"></span>Day 2</button></li><li><button type="button" data-i="2" data-d="3" aria-label="Day 3: Cabinet base"><span className="node"></span>Day 3</button></li><li><button type="button" data-i="3" data-d="4" aria-label="Day 4: Uppers & templates"><span className="node"></span>Day 4</button></li><li><button type="button" data-i="4" data-d="5" aria-label="Day 5: Cabinet detail"><span className="node"></span>Day 5</button></li><li><button type="button" data-i="5" data-d="6" aria-label="Day 6: Flooring & trim"><span className="node"></span>Day 6</button></li><li><button type="button" data-i="6" data-d="7" aria-label="Day 7: Stone & tile"><span className="node"></span>Day 7</button></li><li><button type="button" data-i="7" data-d="8" aria-label="Day 8: Fixtures & flow"><span className="node"></span>Day 8</button></li><li><button type="button" data-i="8" data-d="9" aria-label="Day 9: Fine-tuning"><span className="node"></span>Day 9</button></li><li><button type="button" data-i="9" data-d="10" aria-label="Day 10: Unveiling"><span className="node"></span>Day 10</button></li></ol>
      <div className="tl-ctrl"><button type="button" id="tlPlay">Pause</button><span>Tap any day to jump</span></div>
    </div>
  </div>
</section>
    </>
  );
}
