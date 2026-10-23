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

// the trust bar sits in its own band just below the hero: four big chrome figures, each with a short label
export function TrustBand() {
  return (
    <div className="tb2">
      <ul className="wrap tb2-row">
        {TRUST.map((t) => (
          <li key={t.b}>
            <strong className="chrome-text">{t.em ? <em>{t.n}</em> : t.n}</strong>
            <i aria-hidden="true"></i>
            <span>{t.b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
