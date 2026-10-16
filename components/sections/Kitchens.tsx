import type React from "react";

export default function Kitchens() {
  return (
    <>
<section className="split bg-off on-light" id="kitchens">
  <div className="sphoto" role="img" aria-label="Modern open kitchen with white cabinetry and a marble island" style={{backgroundImage: 'url(/images/kitchens.webp)'} as React.CSSProperties}></div>
  <div className="copy">
    <div className="eyebrow">Custom kitchens</div>
    <h2 className="h2">The kitchen, <em>elevated.</em></h2>
    <p>Fully custom kitchens designed around how you cook, gather and live, with premium cabinetry, natural stone and craftsmanship built to last for decades.</p>
    <ul className="rows"><li>Custom and semi-custom cabinetry</li><li>Natural stone and quartz surfaces</li><li>Layout, lighting and structural changes</li><li>Every selection made in our Lacey showroom</li></ul>
    <div className="btns"><a className="btn btn-chrome" href="#contact">Kitchen Remodeling →</a><a className="btn" href="#contact">Whole Home Remodeling →</a></div>
  </div>
</section>
    </>
  );
}
