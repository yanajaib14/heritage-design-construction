export default function Contact() {
  return (
    <section className="cta2" id="contact">
      <div className="wrap">
        <div className="cta2-grid">
          <div className="cta2-body">
            <div className="eyebrow">Complimentary consultation</div>
            <h2>Let’s build <em>something exceptional.</em></h2>
            <p>Book a complimentary consultation, in your home or at our Lacey showroom.</p>
            <div className="btns"><a className="btn btn-ink btn-xl" href="/contact">Book a Consultation →</a><a className="btn btn-xl" href="tel:+13605573444">Call (360) 557-3444</a></div>
          </div>
          <figure className="cta2-fig">
            <div className="fig-clip"><img src="/images/pf-oslo.webp" alt="A finished Heritage kitchen" loading="lazy" /></div>
          </figure>
        </div>
        <div className="cta2-visit">
          <div><small>Visit</small><span>8695 Martin Way E #101<br />Lacey, WA 98516</span></div>
          <div><small>Hours</small><span>Mon–Fri 9:00–5:30<br />Saturday by appointment</span></div>
          <div><small>Call</small><a href="tel:+13605573444">(360) 557-3444</a></div>
        </div>
      </div>
    </section>
  );
}
