import Image from "next/image";
import { HERO, TRUST, WALK } from "@/lib/home";
import { SITE } from "@/lib/site";

// Project picker in the hero: each tile opens the consultation form with that project chosen.
const PICKS = [
  { id: "kitchen", t: "Kitchen", s: "Custom or 10-Day", icon: <path d="M4 20h16M5 20V9h14v11M5 13h14M9 9V5h6v4M9 16.5h1.5M13.5 16.5H15" /> },
  { id: "bathroom", t: "Bathroom", s: "Remodel or Fast Bath", icon: <path d="M4 12h16v2.5a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 14.5V12ZM6 12V6.5A2.5 2.5 0 0 1 8.5 4 2.5 2.5 0 0 1 11 6.5M8 19l-1 2M16 19l1 2" /> },
  { id: "whole-home", t: "Whole home", s: "Remodels & additions", icon: <path d="M3.5 11 12 4l8.5 7M6 9.5V20h12V9.5M10 20v-5h4v5" /> },
  { id: "commercial", t: "Commercial", s: "Builds & tenant improvements", icon: <path d="M4 20V6l8-2v16M12 8h8v12M4 20h16M7 8h2M7 11.5h2M7 15h2M15 11.5h2M15 15h2" /> },
];

// Homepage hero: a full-screen showroom photo with the headline; the page scrolls straight on into the next section.
export default function Hero() {
  return (
    <section className="walk" id="hero">
      <div className="walk-stick">
        <div className="walk-media" aria-hidden="true">
          <Image className="walk-poster" src={WALK.poster} alt="" fill preload sizes="100vw" />
        </div>
        <div className="walk-shade" aria-hidden="true"></div>
        {WALK.doors && (
          <div className="walk-doors" aria-hidden="true">
            <i className="l"><b></b></i>
            <i className="r"><b></b></i>
          </div>
        )}
        <div className="wrap walk-intro hx">
          <div className="hx-copy">
            <div className="eyebrow lead">{HERO.eyebrow}</div>
            <h1>
              <span className="one">{HERO.kicker}</span>
              <span className="ln"><span>{HERO.title}</span></span>
              <span className="ln"><em>{HERO.titleEm}</em></span>
            </h1>
            <p className="lede">{HERO.sub}</p>
            <div className="btns">
              <a className="btn btn-chrome" href="/contact">Book a consultation →</a>
              <a className="btn" href={SITE.tel}>Call {SITE.phone}</a>
            </div>
          </div>
          <nav className="hx-pick" aria-label="Start with your project">
            <p className="hx-pick-k">What are you planning?</p>
            <ul>
              {PICKS.map((p) => (
                <li key={p.id}>
                  <a href={`/contact?project=${p.id}#consultation-request`}>
                    <span className="hx-ico" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">{p.icon}</svg>
                    </span>
                    <b>{p.t}</b>
                    <small>{p.s}</small>
                    <i aria-hidden="true">→</i>
                  </a>
                </li>
              ))}
            </ul>
            <p className="hx-pick-foot">Kitchens in as little as <b>10 business days</b> · <a href="/services/remodeling-services/kitchen-remodeling/10-day-kitchen-program">See the 10-Day Kitchen</a></p>
          </nav>
        </div>
      </div>
    </section>
  );
}

// Homepage trust bar: one raised graphite panel with a chrome edge. Each fact has a line icon in a chrome ring,
// a large chrome figure and its label; a soft light sweeps across the panel as it comes into view.
const TRUST_ICONS = [
  // house: projects completed
  <path key="h" d="M4 11.5 12 5l8 6.5M6.5 10v9h11v-9M10 19v-5h4v5" />,
  // shield with check: warranty
  <path key="s" d="M12 3.5 19 6v5.5c0 4.2-3 7.4-7 9-4-1.6-7-4.8-7-9V6l7-2.5ZM8.8 12l2.2 2.2 4.4-4.4" />,
  // calendar: family owned since
  <path key="c" d="M5 6.5h14v13H5zM5 10.5h14M9 4v4M15 4v4M9 14h2M13 14h2M9 17h2" />,
  // seal with check: licensed and insured
  <path key="b" d="M12 3.5l2.1 1.6 2.6-.2.8 2.5 2.2 1.4-.9 2.5.9 2.5-2.2 1.4-.8 2.5-2.6-.2L12 19.5l-2.1-1.6-2.6.2-.8-2.5-2.2-1.4.9-2.5-.9-2.5 2.2-1.4.8-2.5 2.6.2ZM9 11.6l2 2 4-4" />,
];

export function TrustBand() {
  return (
    <div className="tb3">
      <div className="wrap">
        <ul className="tb3-panel">
          {TRUST.map((t, n) => (
            <li key={t.b}>
              <span className="tb3-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">{TRUST_ICONS[n]}</svg>
              </span>
              <span className="tb3-txt">
                <strong className="tb3-n">{t.em ? <em>{t.n}</em> : t.n}</strong>
                <span className="tb3-b">{t.b}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
