"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initChrome, initPage } from "@/lib/site-effects";

// Header and menu are wired once; page interactions (walk-in hero, reveals, map, sliders...) re-run on every page.
export default function SiteEffects() {
  const path = usePathname();
  useEffect(() => {
    initChrome();
  }, []);
  useEffect(() => {
    // a new page always opens at the top, unless the link points at a section (#id)
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const cleanup = initPage();
    return cleanup;
  }, [path]);
  return null;
}
