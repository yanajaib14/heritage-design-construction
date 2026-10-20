import Link from "next/link";
import { CITIES, SITE } from "@/lib/site";

const COLS = [
  {
    title: "Remodeling",
    links: [
      ["Kitchen Remodeling", "/services/remodeling-services/kitchen-remodeling"],
      ["10-Day Kitchen Program", "/services/remodeling-services/kitchen-remodeling/10-day-kitchen-program"],
      ["Cabinet Refacing", "/services/remodeling-services/kitchen-remodeling/cabinet-refacing"],
      ["Whole Home Remodeling", "/services/remodeling-services/whole-home-remodeling"],
      ["Bathroom Remodeling", "/services/remodeling-services/bathroom-remodeling"],
      ["Fast Bath", "/services/remodeling-services/bathroom-remodeling/fast-bath-program"],
      ["Bathroom AI Estimator", "/services/remodeling-services/bathroom-remodeling/fast-bath-program/bathroom-ai-estimator"],
      ["Design Services", "/services/design-services"],
    ],
  },
  {
    title: "Construction",
    links: [
      ["Commercial Construction", "/services/construction-services/commercial-construction"],
      ["Tenant Improvements", "/services/construction-services/commercial-construction/tenant-improvements-ti"],
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
