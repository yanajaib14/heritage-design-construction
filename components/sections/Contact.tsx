import Image from "next/image";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

// Closing call to action: one calm, centered panel with a single clear next step.
// Pages can swap the headline and line of copy. With `photo` it becomes a split: photo left, invitation right.
export default function Contact({
  title,
  text = "Book a complimentary consultation, in your home or at our Lacey showroom.",
  photo,
}: {
  title?: ReactNode;
  text?: string;
  photo?: { src: string; alt: string };
}) {
  if (photo) {
    return (
      <section className="cta5 on-light" id="contact">
        <div className="wrap cta5-grid">
          <figure className="cta5-fig">
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
          </figure>
          <div className="cta5-copy">
            <div className="eyebrow">Complimentary consultation</div>
            <h2 className="h2">{title ?? <>Let’s build <em>something exceptional.</em></>}</h2>
            <p>{text}</p>
            <div className="btns">
              <a className="btn btn-ink cta5-main" href="/contact">Book a consultation <i aria-hidden="true">→</i></a>
              <a className="btn" href={SITE.tel}>Call {SITE.phone}</a>
            </div>
            <ul className="cta5-perks">
              <li>No obligation</li>
              <li>Designer-led</li>
              <li>5-year warranty</li>
            </ul>
            <dl className="cta5-info">
              <div><dt>Visit</dt><dd>{SITE.street}, {SITE.city}, {SITE.region} {SITE.zip}</dd></div>
              <div><dt>Hours</dt><dd>Mon–Fri 9:00–5:30 · Saturday by appointment</dd></div>
              <div><dt>Call</dt><dd><a href={SITE.tel}>{SITE.phone}</a></dd></div>
            </dl>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="cta4" id="contact">
      <div className="wrap">
        <div className="cta4-panel">
          <div className="cta4-eyebrow"><span>Complimentary consultation</span></div>
          <h2>{title ?? <>Let’s build <em>something exceptional.</em></>}</h2>
          <p>{text}</p>
          <div className="cta4-btns">
            <a className="btn btn-ink btn-xl cta4-main" href="/contact">Book a consultation <i aria-hidden="true">→</i></a>
            <a className="btn btn-xl" href={SITE.tel}>Call {SITE.phone}</a>
          </div>
          <ul className="cta4-trust">
            <li>No obligation</li>
            <li>Designer-led</li>
            <li>5-year warranty</li>
          </ul>
        </div>
        <div className="cta4-visit">
          <div><small>Visit</small><span>8695 Martin Way E #101<br />Lacey, WA 98516</span></div>
          <div><small>Hours</small><span>Mon–Fri 9:00–5:30<br />Saturday by appointment</span></div>
          <div><small>Call</small><a href={SITE.tel}>{SITE.phone}</a></div>
        </div>
      </div>
    </section>
  );
}
