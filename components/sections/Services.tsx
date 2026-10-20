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
      <div className="svc2 on"><a className="svc-link" href="/services/remodeling-services" aria-label="Explore remodeling"></a><div className="bgph img" style={{backgroundImage: 'url(/images/svc-remodel.webp)'} as React.CSSProperties}></div>
        <div className="body"><span className="tag">Residential</span><h3>Remodeling</h3>
          <div className="more"><p>Custom kitchens, bathrooms and whole-home remodels, designed and built by one team.</p><ul><li><a href="/services/remodeling-services/kitchen-remodeling">Custom kitchens</a></li><li><a href="/services/remodeling-services/kitchen-remodeling/10-day-kitchen-program">10-Day Kitchen</a></li><li><a href="/services/remodeling-services/kitchen-remodeling/cabinet-refacing">Cabinet refacing</a></li><li><a href="/services/remodeling-services/bathroom-remodeling">Bathrooms</a></li><li><a href="/services/remodeling-services/bathroom-remodeling/fast-bath-program">Fast Bath</a></li><li><a href="/services/remodeling-services/whole-home-remodeling">Whole home</a></li></ul><span className="go">Explore remodeling</span></div></div></div>
      <div className="svc2"><a className="svc-link" href="/services/construction-services" aria-label="Explore construction"></a><div className="bgph"><span>Photo · commercial / TI</span></div>
        <div className="body"><span className="tag">Commercial</span><h3>Construction</h3>
          <div className="more"><p>Commercial construction and tenant improvements for South Sound businesses.</p><ul><li><a href="/services/construction-services/commercial-construction">Commercial construction</a></li><li><a href="/services/construction-services/commercial-construction/tenant-improvements-ti">Tenant improvements</a></li></ul><span className="go">Explore construction</span></div></div></div>
      <div className="svc2"><a className="svc-link" href="/services/design-services" aria-label="Explore design"></a><div className="bgph img" style={{backgroundImage: 'url(/images/svc-design.webp)'} as React.CSSProperties}></div>
        <div className="body"><span className="tag">Showroom</span><h3>Design</h3>
          <div className="more"><p>Space planning, 3D renderings and every selection made with a designer in our Lacey showroom.</p><ul><li><a href="/services/design-services">Space planning</a></li><li><a href="/services/design-services">3D renderings</a></li><li><a href="/services/design-services">Selections</a></li></ul><span className="go">Explore design</span></div></div></div>
    </div>
    <p className="svc-hint" aria-hidden="true">Hover a service to open it</p>
  </div>
</section>
    </>
  );
}
