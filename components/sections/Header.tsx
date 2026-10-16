"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";

function isCurrent(path: string, href: string) {
  return href === "/" ? path === "/" : path === href || path.startsWith(href + "/");
}

export default function Header() {
  const path = usePathname();
  return (
    <header className="site" id="hdr">
      <div className="wrap nav">
        <Link className="logo" href="/" aria-label="Heritage Design and Construction home">
          <img src="/brand/heritage-logo.webp" alt="Heritage Design & Construction" />
        </Link>
        <ul className="menu" id="menu">
          {NAV.map((item) => {
            const current = item.children
              ? item.children.some((c) => isCurrent(path, c.href))
              : isCurrent(path, item.href);
            if (!item.children)
              return (
                <li key={item.label}>
                  <Link className={current ? "current" : undefined} href={item.href} aria-current={current ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            const id = "d-" + item.label.toLowerCase();
            return (
              <li key={item.label}>
                <button type="button" className={current ? "current" : undefined} aria-expanded="false" aria-controls={id}>
                  {item.label} <i className="caret"></i>
                </button>
                <ul className="drop" id={id} hidden>
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <Link className="btn btn-chrome nav-cta" href="/contact">Book a Consultation</Link>
        <button className="burger" id="burger" aria-label="Open menu" aria-controls="sheet" aria-expanded="false">
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
