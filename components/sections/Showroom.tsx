import { BRANDS } from "@/components/sections/Brands";
import { SITE } from "@/lib/site";
import PhotoDeck from "@/components/ui/PhotoDeck";

// Swap in real showroom photos here when the pro shoot is done.
export const SHOWROOM_PHOTOS = [
  { src: "/images/showroom.webp", alt: "Material selection boards with stone, tile and finish samples" },
  { src: "/images/hero-showroom.webp", alt: "The Heritage Design Center showroom floor with cabinetry, countertop and tile displays" },
  { src: "/images/sr-design-review.webp", alt: "A designer walking a couple through a 3D kitchen rendering" },
  { src: "/images/svc-design.webp", alt: "Planning a kitchen design with a designer" },
  { src: "/images/sr-door-samples.webp", alt: "Cabinet door samples with brass hardware and fabric swatches" },
  { src: "/images/sr-tile.webp", alt: "A blue tile backsplash sample with a brass faucet" },
];

// Showroom split. On the homepage `extras` adds the photo deck and the brand logo strip.
export default function Showroom({ extras = false }: { extras?: boolean }) {
  return (
    <section className={`bg-off on-light${extras ? " sr-home" : ""}`} id="showroom">
      <div className="split">
        {extras ? (
          <PhotoDeck photos={SHOWROOM_PHOTOS} label="Showroom photos" />
        ) : (
          <div className="sphoto" role="img" aria-label={SHOWROOM_PHOTOS[0].alt} style={{ backgroundImage: `url(${SHOWROOM_PHOTOS[0].src})` }}></div>
        )}
        <div className="copy">
          <div className="eyebrow">Heritage Design Center Showroom</div>
          <h2 className="h2">Design, materials and showroom, <em>all under one roof.</em></h2>
          <p>Visit our showroom in Lacey to see cabinetry, stone, tile, plumbing fixtures and hardware on display, and make every selection side by side with a designer.</p>
          <div className="sr-facts">
            <p><a href={SITE.directions} target="_blank" rel="noopener">{SITE.street}, {SITE.city}, {SITE.region} {SITE.zip}</a></p>
            <p>{SITE.hours} · <a href={SITE.showroomTel}>{SITE.showroomPhone}</a></p>
          </div>
          <div className="btns"><a className="btn btn-ink" href="/contact">Book a showroom visit →</a><a className="btn" href="https://www.heritagedesignctr.com" target="_blank" rel="noopener">heritagedesignctr.com ↗</a></div>
        </div>
      </div>
      {extras && (
        <div className="wrap sr-extra">
          <ul className="sr-logos" aria-label="Brands on display in our showroom">
            {BRANDS.map((b) => <li key={b.src}><img src={b.src} alt={b.alt} loading="lazy" /></li>)}
          </ul>
        </div>
      )}
    </section>
  );
}
