import { BRANDS } from "@/components/sections/Brands";
import { CITIES, SITE } from "@/lib/site";

// Showroom split. On the homepage `extras` adds the brand logo strip and the cities we serve.
export default function Showroom({ extras = false }: { extras?: boolean }) {
  return (
    <section className={`bg-off on-light${extras ? " sr-home" : ""}`} id="showroom">
      <div className="split">
        <div className="sphoto" role="img" aria-label="Material selection boards with stone, tile and finish samples" style={{ backgroundImage: "url(/images/showroom.webp)" }}></div>
        <div className="copy">
          <div className="eyebrow">Heritage Design Center Showroom</div>
          <h2 className="h2">Design, materials and showroom, <em>all under one roof.</em></h2>
          <p>Visit our showroom in Lacey to see cabinetry, stone, tile, plumbing fixtures and hardware on display, and make every selection side by side with a designer.</p>
          <div className="sr-facts">
            <p>{SITE.street}, {SITE.city}, {SITE.region} {SITE.zip}</p>
            <p>{SITE.hours} · {SITE.showroomPhone}</p>
          </div>
          <div className="btns"><a className="btn btn-ink" href="/contact">Book a showroom visit →</a><a className="btn" href="https://www.heritagedesignctr.com" target="_blank" rel="noopener">heritagedesignctr.com ↗</a></div>
        </div>
      </div>
      {extras && (
        <div className="wrap sr-extra">
          <ul className="sr-logos" aria-label="Brands on display in our showroom">
            {BRANDS.map((b) => <li key={b.src}><img src={b.src} alt={b.alt} loading="lazy" /></li>)}
          </ul>
          <p className="sr-cities"><span>Serving</span> {CITIES.slice(0, 12).join(" · ")} <a href="/about/service-areas">and more →</a></p>
        </div>
      )}
    </section>
  );
}
