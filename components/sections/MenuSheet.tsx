import type React from "react";

export default function MenuSheet() {
  return (
    <>
<div className="sheet" id="sheet" hidden>
  <div className="sheet-top"><img src="/brand/heritage-logo.webp" alt="Heritage Design & Construction" /><button className="close" id="closeSheet" aria-label="Close menu">×</button></div>
  <ul>
    <li><a href="#top">Home</a></li>
    <li><button type="button" aria-expanded="false">About <i className="caret"></i></button><ul className="sub" hidden><li><a href="#why">About Us</a></li><li><a href="#showroom">Showroom</a></li><li><a href="#areas">Service Areas</a></li></ul></li>
    <li><button type="button" aria-expanded="false">Services <i className="caret"></i></button><ul className="sub" hidden><li><a href="#services">Remodeling</a></li><li><a href="#services">Construction</a></li><li><a href="#services">Design</a></li></ul></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><button type="button" aria-expanded="false">Resources <i className="caret"></i></button><ul className="sub" hidden><li><a href="#resources">FAQs</a></li><li><a href="#resources">Financing</a></li><li><a href="#journal">Advice / Blog</a></li></ul></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a className="btn btn-chrome" href="#contact">Book a Consultation →</a>
</div>
    </>
  );
}
