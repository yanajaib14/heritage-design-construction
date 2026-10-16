import Link from "next/link";
import { CITIES, SITE } from "@/lib/site";

const R = "/services/remodeling-services";

const COLS = [
  {
    title: "Remodeling",
    links: [
      ["Kitchen Remodeling", `${R}#kitchens`],
      ["10-Day Kitchen Program", `${R}#ten-day`],
      ["Cabinet Refacing", `${R}#refacing`],
      ["Whole Home Remodeling", `${R}#whole-home`],
      ["Bathroom Remodeling", `${R}#bathrooms`],
      ["Fast Bath", `${R}#fast-bath`],
      ["Bathroom AI Estimator", `${R}#estimator`],
      ["Design Services", "/services/design-services"],
    ],
  },
  {
    title: "Construction",
    links: [
      ["Commercial Construction", "/services/construction-services"],
      ["Tenant Improvements", "/services/construction-services#ti"],
    ],
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
            <p>
              Showroom: {SITE.street}
              <br />
              {SITE.city}, {SITE.region} {SITE.zip}
              <br />
              {SITE.phone} · <span className="tbd">[Email]</span>
            </p>
          </div>
          {COLS.map((c) => (
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
          <div className="areas-col">
            <h4>
              <Link href="/about/service-areas">Service areas</Link>
            </h4>
            <p className="cities">{CITIES.join(" · ")}</p>
          </div>
        </div>
        <div className="legal">
          <span>
            © 2026 Heritage Design &amp; Construction · Family owned since 2004 · WA Contractor Lic. <span className="tbd">[#]</span>
          </span>
          <span>
            Sister company:{" "}
            <a href="https://www.heritagedesignctr.com" target="_blank" rel="noopener">
              <b>Heritage Design Center</b>
            </a>{" "}
            · Privacy · Terms · Accessibility
          </span>
        </div>
      </div>
    </footer>
  );
}
