import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

// Closing call to action: one calm, centered panel with a single clear next step.
// Pages can swap the headline and line of copy.
export default function Contact({
  title,
  text = "Book a complimentary consultation, in your home or at our Lacey showroom.",
}: {
  title?: ReactNode;
  text?: string;
}) {
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
