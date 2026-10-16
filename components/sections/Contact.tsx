import type React from "react";

export default function Contact() {
  return (
    <>
<section className="cta bg-char" id="contact">
  <div className="wrap">
    <div className="cta-card" id="ctaCard">
      <span className="cta-ring" aria-hidden="true"></span>
      <div className="inner">
        <div className="cta-mark"><img src="/brand/heritage-mark.webp" alt="" width="120" height="100" /></div>
        <div className="eyebrow cta-eye">Complimentary consultation</div>
        <h2>Let’s build <em className="chrome-text">something exceptional.</em></h2>
        <p>Book a complimentary consultation, in your home or at our Lacey showroom.</p>
        <div className="btns"><a className="btn btn-chrome btn-xl" href="#contact">Book a Consultation →</a><a className="btn btn-xl" href="tel:+13605573444">Call (360) 557-3444</a></div>
      </div>
    </div>
    <div className="visit">
      <div><small>Visit</small><span>8695 Martin Way E #101<br />Lacey, WA 98516</span></div>
      <div><small>Hours</small><span>Mon–Fri 9:00–5:30<br />Saturday by appointment</span></div>
      <div><small>Call</small><span>(360) 557-3444</span></div>
    </div>
  </div>
</section>
    </>
  );
}
