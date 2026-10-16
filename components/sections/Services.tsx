import type React from "react";

export default function Services() {
  return (
    <>
<section className="band bg-off on-light" id="services">
  <div className="wrap">
    <div className="sec-head">
      <div className="left"><div className="eyebrow">Our services</div><h2 className="h2">Built with purpose. <em>Designed to endure.</em></h2></div>
      <p>From a single kitchen to a whole home or a commercial build-out, one team carries your project from first sketch to final walkthrough.</p>
    </div>
    <div className="svc-row" id="svcRow">
      <a className="svc2 on" href="/services/remodeling-services"><div className="bgph img" style={{backgroundImage: 'url(/images/svc-remodel.webp)'} as React.CSSProperties}></div>
        <div className="body"><span className="tag">Residential</span><h3>Remodeling</h3>
          <div className="more"><p>Custom kitchens, bathrooms and whole-home remodels, designed and built by one team.</p><ul><li>Custom kitchens</li><li>10-Day Kitchen</li><li>Cabinet refacing</li><li>Bathrooms</li><li>Fast Bath</li><li>Whole home</li></ul><span className="go">Explore remodeling</span></div></div></a>
      <a className="svc2" href="/services/construction-services"><div className="bgph"><span>Photo · commercial / TI</span></div>
        <div className="body"><span className="tag">Commercial</span><h3>Construction</h3>
          <div className="more"><p>Commercial construction and tenant improvements for South Sound businesses.</p><ul><li>Commercial construction</li><li>Tenant improvements</li></ul><span className="go">Explore construction</span></div></div></a>
      <a className="svc2" href="/services/design-services"><div className="bgph img" style={{backgroundImage: 'url(/images/svc-design.webp)'} as React.CSSProperties}></div>
        <div className="body"><span className="tag">Showroom</span><h3>Design</h3>
          <div className="more"><p>Space planning, 3D renderings and every selection made with a designer in our Lacey showroom.</p><ul><li>Space planning</li><li>3D renderings</li><li>Selections</li></ul><span className="go">Explore design</span></div></div></a>
    </div>
    <p className="svc-hint" aria-hidden="true">Hover a service to open it</p>
  </div>
</section>
    </>
  );
}
