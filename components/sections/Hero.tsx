import { HERO, TRUST, WALK } from "@/lib/home";
import { SITE } from "@/lib/site";

// Scroll walk-in: the page pins while scrolling walks you through the showroom doors.
// lib/site-effects.js drives it from scroll progress; with reduced motion it is a still hero.
export default function Hero() {
  return (
    <section className="walk" id="hero" data-frames={WALK.frames} data-dir={WALK.dir} data-phone-dir={WALK.phoneDir}>
      <div className="walk-stick">
        <div className="walk-media" aria-hidden="true">
          <img className="walk-poster" src={WALK.poster} alt="" fetchPriority="high" />
          <canvas className="walk-canvas"></canvas>
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
          <h1>{HERO.title}</h1>
          <p className="lede">{HERO.sub}</p>
          <div className="btns">
            <a className="btn btn-chrome" href="/contact">Book a consultation →</a>
            <a className="btn" href={SITE.tel}>Call {SITE.phone}</a>
          </div>
          <Trust />
        </div>
        <div className="walk-end">
          <div className="eyebrow">Heritage Design Center · Lacey</div>
          <h2 className="h2">Step inside <em>the showroom.</em></h2>
          <div className="btns">
            <a className="btn btn-chrome" href="/contact">Book a showroom visit →</a>
            <a className="btn" href="/contact">Book a consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// on phones the trust bar sits just below the hero instead of inside it
export function TrustPhone() {
  return (
    <div className="walk trust-phone">
      <div className="wrap"><Trust /></div>
    </div>
  );
}

function Trust() {
  return (
    <div className="stats">
      {TRUST.map((t) => (
        <div className="stat" key={t.b}>
          <strong className="chrome-text">{t.em ? <em>{t.n}</em> : t.n}</strong>
          <span className="st-l"><b>{t.b}</b>{t.s}</span>
        </div>
      ))}
    </div>
  );
}
