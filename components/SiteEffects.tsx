"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initChrome, initPage } from "@/lib/site-effects";

// Header and menu are wired once; page interactions (scroll story, reveals, count-ups, map, slider...) re-run on every page.
export default function SiteEffects() {
  const path = usePathname();
  useEffect(() => {
    initChrome();
  }, []);
  useEffect(() => {
    const cleanup = initPage();
    return cleanup;
  }, [path]);
  return null;
}
