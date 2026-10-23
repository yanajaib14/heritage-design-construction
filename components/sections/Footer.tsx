import Link from "next/link";
import { CITIES, SITE } from "@/lib/site";

// Construction and Design share a column, each with its own heading.
const COLS = [
  {
    title: "Remodeling",
    links: [
      ["Kitchen Remodeling", "/services/remodeling-services/kitchen-remodeling"],
      ["Bathroom Remodeling", "/services/remodeling-services/bathroom-remodeling"],
      ["Whole Home Remodeling", "/services/remodeling-services/whole-home-remodeling"],
      ["Home Additions & ADU/DADU", "/services/remodeling-services/home-additions-adu"],
      ["Remodeling Packages", "/services/remodeling-services/remodeling-packages"],
    ],
  },
  {
    title: "Construction",
    links: [
      ["New Construction", "/services/construction-services/new-construction"],
      ["Commercial Construction", "/services/construction-services/commercial-construction"],
      ["Tenant Improvements", "/services/construction-services/commercial-construction/tenant-improvements-ti"],
    ],
  },
  {
    title: "Design",
    links: [["Design Services", "/services/design-services"]],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Showroom", "/about/showroom"],
      ["Portfolio", "/portfolio"],
      ["FAQs", "/resources/faqs"],
      ["Financing", "/resources/financing"],
      ["Advice / Blog", "/resources/advice-blog"],
      ["Contact", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div className="brand">
            <img src="/brand/heritage-logo.webp" alt="Heritage Design & Construction" />
            <dl className="foot-visit">
              <div>
                <dt>Visit</dt>
                <dd>
                  <a href={SITE.directions} target="_blank" rel="noopener">
                    {SITE.street}
                    <br />
                    {SITE.city}, {SITE.region} {SITE.zip}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>Mon–Fri 9:00–5:30<br />Saturday by appointment</dd>
              </div>
              <div>
                <dt>Call</dt>
                <dd><a href={SITE.tel}>{SITE.phone}</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{SITE.email ? <a href={`mailto:${SITE.email}`}>{SITE.email}</a> : <span className="tbd">[Email]</span>}</dd>
              </div>
            </dl>
          </div>
          {[[COLS[0]], [COLS[1], COLS[2]], [COLS[3]]].map((col) => (
            <div key={col[0].title} className="foot-col">
              {col.map((c) => (
                <div key={c.title}>
                  <h4>{c.title}</h4>
                  <ul>
                    {c.links.map(([label, href]) => (
                      <li key={label}>
                        <Link href={href}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          <div className="areas-col">
            <h4>
              <Link href="/about/service-areas">Service areas</Link>
            </h4>
            <p className="cities">{CITIES.join(" · ")}</p>
          </div>
          {/* phones: the same links folded into tap-to-open groups */}
          <div className="foot-acc">
            <details>
              <summary>Services</summary>
              <ul>
                {[...COLS[0].links, ...COLS[1].links, ...COLS[2].links].map(([label, href]) => (
                  <li key={label}><Link href={href}>{label}</Link></li>
                ))}
              </ul>
            </details>
            <details>
              <summary>Company</summary>
              <ul>
                {COLS[3].links.map(([label, href]) => (
                  <li key={label}><Link href={href}>{label}</Link></li>
                ))}
              </ul>
            </details>
            <details>
              <summary>Service areas</summary>
              <p className="cities">{CITIES.join(" · ")}</p>
              <Link className="foot-acc-more" href="/about/service-areas">See all service areas →</Link>
            </details>
          </div>
        </div>
        <div className="legal">
          <span className="legal-full">
            © 2026 Heritage Design &amp; Construction · Family owned since 2004 · WA Contractor Lic. <span className="tbd">[#]</span> · Insured <span className="tbd">[carrier]</span> · <span className="tbd">[BBB / NKBA]</span>
          </span>
          <span>
            Sister company:{" "}
            <a href="https://www.heritagedesignctr.com" target="_blank" rel="noopener">
              <b>Heritage Design Center</b>
            </a>{" "}
            · Privacy · Terms · Accessibility
          </span>
          <span className="legal-short">© 2026 Heritage Design &amp; Construction · WA Lic. <span className="tbd">[#]</span></span>
        </div>
      </div>
    </footer>
  );
}
