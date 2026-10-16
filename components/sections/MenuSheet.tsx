import Link from "next/link";
import { NAV } from "@/lib/site";

export default function MenuSheet() {
  return (
    <div className="sheet" id="sheet" hidden>
      <div className="sheet-top">
        <img src="/brand/heritage-logo.webp" alt="Heritage Design & Construction" />
        <button className="close" id="closeSheet" aria-label="Close menu">×</button>
      </div>
      <ul>
        {NAV.map((item) =>
          item.children ? (
            <li key={item.label}>
              <button type="button" aria-expanded="false">
                {item.label} <i className="caret"></i>
              </button>
              <ul className="sub" hidden>
                {item.children.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ),
        )}
      </ul>
      <Link className="btn btn-chrome" href="/contact">Book a Consultation →</Link>
    </div>
  );
}
