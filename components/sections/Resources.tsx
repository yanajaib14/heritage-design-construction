import type React from "react";

export default function Resources() {
  return (
    <>
<section className="band bg-paper on-light" id="resources">
  <div className="wrap">
    <div className="res2">
      <a href="/resources/financing"><span className="num">Financing</span><h3>Flexible ways to invest.</h3><p className="tbd" style={{justifySelf: 'start'} as React.CSSProperties}>[Financing partner, terms overview.]</p><span className="link">Explore financing →</span></a>
      <a href="/resources/faqs"><span className="num">FAQs</span><h3>Questions, answered.</h3><p className="tbd" style={{justifySelf: 'start'} as React.CSSProperties}>[Timelines, permits, living at home during a remodel.]</p><span className="link">Read FAQs →</span></a>
    </div>
    <div className="sec-head" id="journal">
      <div className="left"><div className="eyebrow">Journal</div><h2 className="h2">Planning <em>resources.</em></h2></div>
      <div style={{justifySelf: 'end'} as React.CSSProperties}><a className="link" href="/resources/advice-blog">All articles →</a></div>
    </div>
    <div className="art3">
      <a href="/resources/advice-blog"><div className="ph">Article image</div><span className="num">Kitchens · [X] min</span><h3>[Article title]</h3></a>
      <a href="/resources/advice-blog"><div className="ph">Article image</div><span className="num">Bathrooms · [X] min</span><h3>[Article title]</h3></a>
      <a href="/resources/advice-blog"><div className="ph">Article image</div><span className="num">Commercial · [X] min</span><h3>[Article title]</h3></a>
    </div>
  </div>
</section>
    </>
  );
}
