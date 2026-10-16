import Link from "next/link";
import type { ReactNode } from "react";
import JsonLd from "@/components/ui/JsonLd";
import { SITE } from "@/lib/site";

type Crumb = { label: string; href: string };

// Dark opening hero used by every inner page, with breadcrumbs (and BreadcrumbList schema).
export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  image?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  const trail = [{ label: "Home", href: "/" }, ...crumbs];
  return (
    <section className="phero">
      {image && <div className="bgimg" aria-hidden="true" style={{ backgroundImage: `url(${image})` }} />}
      <div className="wrap">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            {trail.map((c, i) => (
              <li key={c.href}>
                {i === trail.length - 1 ? <span aria-current="page">{c.label}</span> : <Link href={c.href}>{c.label}</Link>}
              </li>
            ))}
          </ol>
        </nav>
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
            item: SITE.url + c.href,
          })),
        }}
      />
    </section>
  );
}
