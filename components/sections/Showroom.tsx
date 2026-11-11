import { BRANDS } from "@/components/sections/Brands";
import Link from "next/link";
import { SITE } from "@/lib/site";
import ShowroomPreview from "@/components/ui/ShowroomPreview";
import { TOUR } from "@/lib/city-featured";

// Swap in real showroom photos here when the pro shoot is done.
export const SHOWROOM_PHOTOS = [
  { src: "/images/showroom.webp", alt: "Material selection boards with stone, tile and finish samples" },
  { src: "/images/hero-showroom.webp", alt: "The Heritage Design Center showroom floor with cabinetry, countertop and tile displays" },
  { src: "/images/sr-design-review.webp", alt: "A designer walking a couple through a 3D kitchen rendering" },
  { src: "/images/svc-design.webp", alt: "Planning a kitchen design with a designer" },
  { src: "/images/sr-door-samples.webp", alt: "Cabinet door samples with brass hardware and fabric swatches" },
  { src: "/images/sr-tile.webp", alt: "A blue tile backsplash sample with a brass faucet" },
];

// Showroom split for inner pages. On the homepage (`extras`) it becomes the dark showroom feature with the tour preview.
export default function Showroom({ extras = false }: { extras?: boolean }) {
  // Homepage: a dark, cinematic showroom feature with a live preview of the Lacey tour
  if (extras) {
    return (
      <section className="srx" id="showroom">
        <div className="wrap">
          <header className="srx-head">
            <div>
              <div className="eyebrow">Heritage Design Center Showroom</div>
              <h2 className="h2">Design, materials and showroom, <em>all under one roof.</em></h2>
            </div>
            <p>Visit our showroom in Lacey to see cabinetry, stone, tile, plumbing fixtures and hardware on display, and make every selection side by side with a designer.</p>
          </header>
          <ShowroomPreview stops={TOUR} href="/about/service-areas/lacey#tour" />
          <div className="srx-foot">
            <dl className="srx-visit">
              <div><dt>Address</dt><dd><a href={SITE.directions} target="_blank" rel="noopener">{SITE.street}<br />{SITE.city}, {SITE.region} {SITE.zip}</a></dd></div>
              <div><dt>Hours</dt><dd>Mon–Fri 9:00–5:30<br />Saturday by appointment</dd></div>
              <div><dt>Showroom</dt><dd><a href={SITE.showroomTel}>{SITE.showroomPhone}</a></dd></div>
            </dl>
            <div className="btns">
              <Link className="btn btn-chrome" href="/about/service-areas/lacey#tour">Take the virtual tour →</Link>
              <a className="btn" href="/contact">Book a showroom visit →</a>
              <a className="btn srx-ext" href="https://www.heritagedesignctr.com" target="_blank" rel="noopener">heritagedesignctr.com ↗</a>
            </div>
          </div>
        </div>
        <div className="srx-brands">
          <div className="wrap">
            <p className="srx-brands-k">Brands on display</p>
            <ul className="sr-logos" aria-label="Brands on display in our showroom">
              {BRANDS.map((b) => <li key={b.src}><img src={b.src} alt={b.alt} loading="lazy" /></li>)}
            </ul>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-off on-light" id="showroom">
      <div className="split">
        <div className="sphoto" role="img" aria-label={SHOWROOM_PHOTOS[0].alt} style={{ backgroundImage: `url(${SHOWROOM_PHOTOS[0].src})` }}></div>
        <div className="copy">
          <div className="eyebrow">Heritage Design Center Showroom</div>
          <h2 className="h2">Design, materials and showroom, <em>all under one roof.</em></h2>
          <p>Visit our showroom in Lacey to see cabinetry, stone, tile, plumbing fixtures and hardware on display, and make every selection side by side with a designer.</p>
          <dl className="sr-visit">
            <div><dt>Address</dt><dd><a href={SITE.directions} target="_blank" rel="noopener">{SITE.street}<br />{SITE.city}, {SITE.region} {SITE.zip}</a></dd></div>
            <div><dt>Hours</dt><dd>Mon–Fri 9:00–5:30<br />Saturday by appointment</dd></div>
            <div><dt>Showroom</dt><dd><a href={SITE.showroomTel}>{SITE.showroomPhone}</a></dd></div>
          </dl>
          <div className="btns"><a className="btn btn-ink" href="/contact">Book a showroom visit →</a><a className="btn" href="https://www.heritagedesignctr.com" target="_blank" rel="noopener">heritagedesignctr.com ↗</a></div>
        </div>
      </div>
    </section>
  );
}
