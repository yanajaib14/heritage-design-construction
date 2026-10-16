"use client";

import { useEffect } from "react";
import { initSite } from "@/lib/site-effects";

// Wires up the scroll story, reveals, count-ups, map, slider and menu once the page is in the browser.
export default function SiteEffects() {
  useEffect(() => {
    initSite();
  }, []);
  return null;
}
