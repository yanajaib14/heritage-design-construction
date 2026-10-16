import type React from "react";

export default function Stories() {
  return (
    <>
<section className="band bg-paper on-light" id="stories">
  <div className="wrap stories">
    <div className="left">
      <div className="eyebrow">Client stories</div>
      <h2 className="h2">Trusted by <em>our clients.</em></h2>
      <div className="pager"><button type="button" id="qPrev" aria-label="Previous review">←</button><span id="qCount">01 / 03</span><button type="button" id="qNext" aria-label="Next review">→</button></div>
    </div>
    <div className="quote" aria-live="polite"><div className="mk">“</div><blockquote id="qText"></blockquote><cite id="qWho"></cite></div>
  </div>
</section>
    </>
  );
}
