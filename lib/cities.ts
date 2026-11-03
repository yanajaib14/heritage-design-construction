// Content for each city landing page under /about/service-areas/<slug>.
// Add a city by adding an entry here; the page, sitemap entry and links are built from it.
// Copy is adapted from the old 10 Day Kitchens city pages. Anything in [square brackets] is a placeholder.
export type CityPage = {
  slug: string;
  name: string;
  county: string;
  // Drive from the Lacey showroom, as a phrase ("about 10 minutes").
  driveTime: string;
  // Who reviews permits, one line.
  permits: string;
  hero: string;
  // Opening lines under the page title.
  lede: string;
  // Short paragraphs for the "Remodeling in <city>" intro.
  intro: string[];
  // Neighborhoods, each with a note on what its homes usually need.
  neighborhoods: { name: string; note: string }[];
  faq: { q: string; a: string }[];
  // Names of nearby cities (from CITIES in lib/site.ts).
  nearby: string[];
};

export const CITY_PAGES: CityPage[] = [
  {
    slug: "olympia",
    name: "Olympia",
    county: "Thurston County",
    driveTime: "about 10 minutes",
    permits: "City of Olympia, or Thurston County outside city limits",
    hero: "/images/pf-coastal.webp",
    lede: "Kitchen, bathroom and whole-home remodeling for Olympia homes, designed and built by one team from our showroom about 10 minutes away in Lacey.",
    intro: [
      "Olympia homes range from historic South Capitol houses and Downtown condos to Westside ramblers and newer infill around the city core. Homeowners here often want brighter kitchens, more storage, better traffic flow, and bathrooms that feel cleaner without losing the home's original feel.",
      "Older houses may need extra planning around small footprints, dated wiring or hidden plumbing. Mid-century homes often benefit from opening up the room and replacing older cabinets with simpler, more efficient storage.",
      "Our Lacey showroom is about 10 minutes away, so cabinets, counters, fixtures and finishes can usually be chosen in one focused visit before work begins.",
    ],
    neighborhoods: [
      {
        name: "South Capitol",
        note: "Historic houses near the Capitol often bring smaller kitchens, original trim and aging systems, so remodels focus on better storage, brighter finishes and careful updates that respect the home's character.",
      },
      {
        name: "Westside",
        note: "Many Westside homes are mid-century ramblers or later infill with straightforward footprints, which makes them good candidates for cleaner cabinet layouts, bigger work zones and more practical storage.",
      },
      {
        name: "Downtown",
        note: "Downtown condos, townhomes and compact older properties need space-efficient kitchens and baths, so owners usually ask for smarter storage, lighter materials and easy-to-maintain surfaces.",
      },
    ],
    faq: [
      {
        q: "Do you handle permits in Olympia?",
        a: "Yes. Projects inside Olympia city limits go through the City of Olympia, while homes outside the city are typically reviewed by Thurston County. We help coordinate permits when plumbing, electrical or structural work is involved.",
      },
      {
        q: "How long does a kitchen remodel take in Olympia?",
        a: "It depends on the scope. Qualified kitchens in our 10-Day Kitchen program are installed in 10 business days when the layout stays put and selections are finalized first. Projects with layout or structural changes get a custom timeline.",
      },
      {
        q: "What does a kitchen remodel cost in Olympia?",
        a: "10-Day Kitchen projects start at around $45,000 and rise with layout changes, cabinet count, materials and scope. Larger custom remodels are priced after we measure the space and define the work.",
      },
      {
        q: "Which Olympia neighborhoods do you serve?",
        a: "All of them, including South Capitol, Westside and Downtown Olympia, along with homes outside city limits in Thurston County.",
      },
      {
        q: "Where do selections happen for Olympia projects?",
        a: "At our Lacey showroom, about 10 minutes from Olympia. Most homeowners can narrow down cabinets, counters, fixtures and finishes in one visit before the schedule is set.",
      },
    ],
    nearby: ["Lacey", "Tumwater", "Yelm"],
  },
];

export const cityPage = (slug: string) => CITY_PAGES.find((c) => c.slug === slug);
export const cityHref = (name: string) => {
  const c = CITY_PAGES.find((p) => p.name === name);
  return c ? `/about/service-areas/${c.slug}` : undefined;
};
