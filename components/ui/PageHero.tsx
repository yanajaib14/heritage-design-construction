import type { ReactNode } from "react";
import JsonLd from "@/components/ui/JsonLd";
import { BASE_URL, CITIES, SITE } from "@/lib/site";

type Crumb = { label: string; href: string };

// Dark opening hero used by every inner page. Breadcrumbs are not shown, but stay in the BreadcrumbList schema.
export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  crumbs,
  children,
  compact = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  image?: string;
  crumbs: Crumb[];
  children?: ReactNode;
  compact?: boolean;
}) {
  const trail = [{ label: "Home", href: "/" }, ...crumbs];
  return (
    <section className={`phero${compact ? " phero-compact" : ""}`}>
      {image && <div className="bgimg" aria-hidden="true" style={{ backgroundImage: `url(${image})` }} />}
      <div className="wrap">
        <div className="eyebrow lead">{eyebrow}</div>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children && <div className="btns">{children}</div>}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: BASE_URL + c.href,
          })),
        }}
      />
      {crumbs.length > 1 && crumbs[0].href === "/services" && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: crumbs[crumbs.length - 1].label,
            serviceType: eyebrow,
            url: BASE_URL + crumbs[crumbs.length - 1].href,
            provider: { "@id": `${BASE_URL}/#business`, "@type": "GeneralContractor", name: SITE.name },
            areaServed: CITIES.map((c) => ({ "@type": "City", name: `${c}, WA` })),
          }}
        />
      )}
    </section>
  );
}
