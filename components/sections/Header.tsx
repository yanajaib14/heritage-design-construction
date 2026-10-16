import type React from "react";

export default function Header() {
  return (
    <>
<header className="site" id="hdr">
  <div className="wrap nav">
    <a className="logo" href="#top" aria-label="Heritage Design and Construction home"><img src="/brand/heritage-logo.webp" alt="Heritage Design & Construction" /></a>
    <ul className="menu" id="menu">
      <li><a className="current" href="#top">Home</a></li>
      <li><button type="button" aria-expanded="false" aria-controls="d-about">About <i className="caret"></i></button>
        <ul className="drop" id="d-about" hidden><li><a href="#why">About Us</a></li><li><a href="#showroom">Showroom</a></li><li><a href="#areas">Service Areas</a></li></ul></li>
      <li><button type="button" aria-expanded="false" aria-controls="d-services">Services <i className="caret"></i></button>
        <ul className="drop" id="d-services" hidden><li><a href="#services">Remodeling</a></li><li><a href="#services">Construction</a></li><li><a href="#services">Design</a></li></ul></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><button type="button" aria-expanded="false" aria-controls="d-res">Resources <i className="caret"></i></button>
        <ul className="drop" id="d-res" hidden><li><a href="#resources">FAQs</a></li><li><a href="#resources">Financing</a></li><li><a href="#journal">Advice / Blog</a></li></ul></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a className="btn btn-chrome nav-cta" href="#contact">Book a Consultation</a>
    <button className="burger" id="burger" aria-label="Open menu" aria-controls="sheet" aria-expanded="false"><span></span><span></span></button>
  </div>
</header>
    </>
  );
}
