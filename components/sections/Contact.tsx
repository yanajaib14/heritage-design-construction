import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

// Closing call to action. Two looks so the end of every page doesn't feel the same:
// "photo" is a full-bleed image with a moving headline strip; "ink" is a dark band with
// oversized outlined type and an offset photo.
const PERKS = ["In your home or at our showroom", "A designer-led plan", "5-year warranty on our work"];
const TICKER = ["Book your free consultation", "Design", "Supply", "Build", "Family owned since 2004"];

export default function Contact({
  variant = "photo",
  title,
  text = "Book a complimentary, no-obligation consultation, in your home or at our Lacey showroom.",
  image = "/images/pf-oslo.webp",
}: {
  variant?: "photo" | "ink";
  title?: ReactNode;
  text?: string;
  image?: string;
}) {
  const head = title ?? <>Let’s build <em>something exceptional.</em></>;
  const btns = (
    <div className="btns">
      <a className="btn btn-chrome btn-xl cta-go" href="/contact">Book my free consultation <i aria-hidden="true">→</i></a>
      <a className="cta-call" href={SITE.tel}><small>Or call us</small>{SITE.phone}</a>
    </div>
  );
  const visit = (
    <div className="cta2-visit">
      <div><small>Visit</small><span>8695 Martin Way E #101<br />Lacey, WA 98516</span></div>
      <div><small>Hours</small><span>Mon–Fri 9:00–5:30<br />Saturday by appointment</span></div>
      <div><small>Call</small><a href={SITE.tel}>{SITE.phone}</a></div>
    </div>
  );

  if (variant === "ink") {
    return (
      <section className="cta3 cta3-ink" id="contact">
        <span className="cta3-word" aria-hidden="true">Let’s talk.</span>
        <div className="wrap">
          <div className="cta3-grid">
            <div className="cta3-body">
              <span className="cta3-pill"><b></b>Free consultation · No obligation</span>
              <h2>{head}</h2>
              <p>{text}</p>
              {btns}
            </div>
            <figure className="cta3-fig">
              <div className="fig-clip"><img src={image} alt="A finished Heritage remodel" loading="lazy" /></div>
              <ul className="cta3-perks">{PERKS.map((p) => <li key={p}>{p}</li>)}</ul>
            </figure>
          </div>
          {visit}
        </div>
      </section>
    );
  }

  return (
    <section className="cta3 cta3-photo" id="contact">
      <div className="cta3-ticker" aria-hidden="true">
        <div className="cta3-track">
          {[0, 1].map((k) => (
            <span key={k}>{TICKER.map((t) => <span key={t}>{t}<i>✦</i></span>)}</span>
          ))}
        </div>
      </div>
      <div className="cta3-hero">
        <img className="cta3-bg" src={image} alt="" loading="lazy" />
        <div className="wrap cta3-grid">
          <div className="cta3-body">
            <span className="cta3-pill"><b></b>Free consultation · No obligation</span>
            <h2>{head}</h2>
            <p>{text}</p>
            {btns}
          </div>
          <ul className="cta3-perks">{PERKS.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
      <div className="cta3-foot"><div className="wrap">{visit}</div></div>
    </section>
  );
}
