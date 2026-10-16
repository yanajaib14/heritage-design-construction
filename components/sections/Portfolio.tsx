import type React from "react";

export default function Portfolio() {
  return (
    <>
<section className="band bg-graph" id="portfolio">
  <div className="wrap">
    <div className="sec-head">
      <div className="left"><div className="eyebrow">Portfolio</div><h2 className="h2">Projects we’re <em>proud of.</em></h2></div>
      <div className="filters" role="group" aria-label="Filter projects">
        <button type="button" data-f="all" aria-pressed="true">All <sup>8</sup></button><button type="button" data-f="kitchen" aria-pressed="false">Kitchens <sup>5</sup></button><button type="button" data-f="bath" aria-pressed="false">Bathrooms <sup>3</sup></button>
      </div>
    </div>
    <div className="pgrid2" id="pgrid">
      <a className="pf feat" data-k="kitchen" href="#portfolio"><div className="bgph img" role="img" aria-label="Transitional White Kitchen" style={{backgroundImage: 'url(/images/pf-university.webp)'} as React.CSSProperties}></div><div className="cap"><span className="tag">Kitchen</span><h3>Transitional White Kitchen</h3></div><span className="view">View project</span></a>
      <a className="pf " data-k="bath" href="#portfolio"><div className="bgph img" role="img" aria-label="Wet Room Suite" style={{backgroundImage: 'url(/images/pf-oslo.webp)'} as React.CSSProperties}></div><div className="cap"><span className="tag">Bathroom</span><h3>Wet Room Suite</h3></div><span className="view">View project</span></a>
      <a className="pf" data-k="kitchen" href="#portfolio"><div className="bgph img" role="img" aria-label="Craftsman Transitional" style={{backgroundImage: 'url(/images/pf-midnight.webp)'} as React.CSSProperties}></div><div className="cap"><span className="tag">Kitchen</span><h3>Craftsman Transitional</h3></div><span className="view">View project</span></a>
      <a className="pf " data-k="kitchen" href="#portfolio"><div className="bgph img" role="img" aria-label="Slab Backsplash Kitchen" style={{backgroundImage: 'url(/images/pf-quartz.webp)'} as React.CSSProperties}></div><div className="cap"><span className="tag">Kitchen</span><h3>Slab Backsplash Kitchen</h3></div><span className="view">View project</span></a>
      <a className="pf wide" data-k="bath" href="#portfolio"><div className="bgph img" role="img" aria-label="Spa Master Bath" style={{backgroundImage: 'url(/images/pf-essential.webp)'} as React.CSSProperties}></div><div className="cap"><span className="tag">Bathroom</span><h3>Spa Master Bath</h3></div><span className="view">View project</span></a>
      <a className="pf " data-k="kitchen" href="#portfolio"><div className="bgph img" role="img" aria-label="Contemporary Island" style={{backgroundImage: 'url(/images/pf-forest.webp)'} as React.CSSProperties}></div><div className="cap"><span className="tag">Kitchen</span><h3>Contemporary Island</h3></div><span className="view">View project</span></a>
      <a className="pf " data-k="kitchen" href="#portfolio"><div className="bgph img" role="img" aria-label="Transitional Chef Kitchen" style={{backgroundImage: 'url(/images/pf-coastal.webp)'} as React.CSSProperties}></div><div className="cap"><span className="tag">Kitchen</span><h3>Transitional Chef Kitchen</h3></div><span className="view">View project</span></a>
      <a className="pf " data-k="bath" href="#portfolio"><div className="bgph img" role="img" aria-label="Clawfoot Tub Bath" style={{backgroundImage: 'url(/images/pf-bathview.webp)'} as React.CSSProperties}></div><div className="cap"><span className="tag">Bathroom</span><h3>Clawfoot Tub Bath</h3></div><span className="view">View project</span></a>
    </div>
    <div className="pf-foot"><span>Kitchen and bath projects from Heritage Design Center.</span><a className="btn" href="/portfolio">View full portfolio →</a></div>
  </div>
</section>
    </>
  );
}
