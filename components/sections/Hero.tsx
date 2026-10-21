import Image from "next/image";
import { HERO, TRUST, WALK } from "@/lib/home";
import { SITE } from "@/lib/site";

// Scroll walk-in: the page pins while scrolling walks you through the showroom doors.
// lib/site-effects.js drives it from scroll progress; with reduced motion it is a still hero.
export default function Hero() {
  return (
    <section className="walk" id="hero" data-frames={WALK.frames} data-dir={WALK.dir} data-phone-dir={WALK.phoneDir}>
      <div className="walk-stick">
        <div className="walk-media" aria-hidden="true">
          <Image className="walk-poster" src={WALK.poster} alt="" fill preload sizes="100vw" />
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
        <div className="walk-cue" aria-hidden="true"><span>Scroll to step inside</span><i></i></div>
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
