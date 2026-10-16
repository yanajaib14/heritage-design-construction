import type React from "react";

export default function Hero() {
  return (
    <>
<section className="hero" id="hero">
  <div className="hero-sticky">
  <div className="hero-lines" aria-hidden="true"><i></i><i></i><i></i></div>
  <div className="hero-photo" aria-hidden="true" style={{backgroundImage: 'url(/images/hero-showroom.webp)'} as React.CSSProperties}></div>
  <div className="wrap hero-content">
    <div className="hero-grid">
      <div className="hero-inner">
        <div className="eyebrow lead">Design · Supply · Build · Based in Lacey, WA</div>
        <h1 aria-label="One company. Start to finish. Exceptional spaces, built to last."><span className="one" aria-hidden="true">One company. Start to finish.</span><span aria-hidden="true"><span className="w"><span style={{'--i': '0'} as React.CSSProperties}>Exceptional</span></span> <span className="w"><span style={{'--i': '1'} as React.CSSProperties}>spaces,</span></span> <em><span className="w"><span style={{'--i': '2'} as React.CSSProperties}>built</span></span> <span className="w"><span style={{'--i': '3'} as React.CSSProperties}>to</span></span> <span className="w"><span style={{'--i': '4'} as React.CSSProperties}>last.</span></span></em></span></h1>
        <p className="lede">We design your project, supply every material from our own Lacey showroom, and build it with our own team. Kitchens, bathrooms, whole homes and commercial spaces across the South Sound, all under one roof.</p>
        <div className="btns"><a className="btn btn-chrome" href="/contact">Book a Consultation →</a><a className="btn" href="tel:+13605573444">Call (360) 557-3444</a></div>
      </div>
      <div className="pillars"><div className="cap">Your one-stop shop</div>
        <ol style={{listStyle: 'none', margin: '0', padding: '0'} as React.CSSProperties} aria-label="Our one-stop process">
        <li><span className="n chrome-text">01</span><h3>Design</h3><p>Space planning, 3D renderings and a designer by your side from the first sketch.</p></li>
        <li><span className="n chrome-text">02</span><h3>Supply</h3><p>Cabinetry, countertops, tile and stone, fixtures and hardware, chosen in person at Heritage Design Center.</p></li>
        <li><span className="n chrome-text">03</span><h3>Build</h3><p>Residential remodels and commercial construction, managed and built by one team.</p></li>
      </ol></div>
    </div>
    <div className="stats">
      <span className="sweep" aria-hidden="true"></span>
      <div className="stat" style={{'--i': '0'} as React.CSSProperties}><strong className="chrome-text"><span data-count="800" data-from="0">800</span>+</strong><i></i><small>Projects completed</small></div>
      <div className="stat" style={{'--i': '1'} as React.CSSProperties}><strong className="chrome-text"><span data-count="5" data-from="0">5</span>-Year</strong><i></i><small>Warranty on our work</small></div>
      <div className="stat" style={{'--i': '2'} as React.CSSProperties}><strong className="chrome-text"><span data-count="2004" data-from="1980">2004</span></strong><i></i><small>Family owned since</small></div>
      <div className="stat" style={{'--i': '3'} as React.CSSProperties}><strong className="chrome-text"><em>Licensed</em></strong><i></i><small>&amp; fully insured</small></div>
    </div>
  </div>
  <div className="stat-show" aria-hidden="true">
    <div className="ss" data-to="800" data-from="0" data-suf="+"><strong className="chrome-text">800+</strong><small>Projects completed</small></div>
    <div className="ss" data-to="5" data-from="0" data-suf="-Year"><strong className="chrome-text">5-Year</strong><small>Warranty on our work</small></div>
    <div className="ss" data-to="2004" data-from="1980"><strong className="chrome-text">2004</strong><small>Family owned since</small></div>
    <div className="ss"><strong className="chrome-text"><em>Licensed</em></strong><small>&amp; fully insured</small></div>
  </div>
  <div className="hero-cap" aria-hidden="true"><b>Heritage Design Center Showroom</b><span>8695 Martin Way E, Lacey, WA</span></div>
  <div className="scroll-cue" aria-hidden="true"><span>Scroll</span><i></i></div>
  </div>
</section>
    </>
  );
}
