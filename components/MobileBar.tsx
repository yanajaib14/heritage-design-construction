import { SITE } from "@/lib/site";

// Phones only: a slim Call / Book bar fixed to the bottom; lib/site-effects.js hides it while a form is on screen.
export default function MobileBar() {
  return (
    <nav className="mbar" aria-label="Call or book">
      <a href={SITE.tel}>Call</a>
      <a href="/contact" className="mbar-book">Book a consultation</a>
    </nav>
  );
}
