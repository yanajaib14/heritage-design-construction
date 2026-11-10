import Image from "next/image";
import { HERO, TRUST, WALK } from "@/lib/home";
import { SITE } from "@/lib/site";

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
        <div className="wrap walk-intro">
          <div className="eyebrow lead">{HERO.eyebrow}</div>
          <h1>
            <span className="one">{HERO.kicker}</span>
            <span className="ln"><span>{HERO.title}</span></span>
            <span className="ln"><em>{HERO.titleEm}</em></span>
          </h1>
          <div className="walk-foot">
            <p className="lede">{HERO.sub}</p>
            <div className="btns">
              <a className="btn btn-chrome" href="/contact">Book a consultation →</a>
              <a className="btn" href={SITE.tel}>Call {SITE.phone}</a>
            </div>
          </div>
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
