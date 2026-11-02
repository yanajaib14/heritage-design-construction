// Content for each city landing page under /about/service-areas/<slug>.
// Add a city by adding an entry here; the page, sitemap entry and links are built from it.
// Anything in [square brackets] is a placeholder for the owner to fill in.
export type CityPage = {
  slug: string;
  name: string;
  county: string;
  hero: string;
  // Opening lines under the page title.
  lede: string;
  // Short paragraphs for the "Remodeling in <city>" intro.
  intro: string[];
  // Parts of town we work in, shown as a list.
  areas: string[];
  // What homes in the city tend to need, one line each.
  homes: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

export const CITY_PAGES: CityPage[] = [
  {
    slug: "olympia",
    name: "Olympia",
    county: "Thurston County",
    hero: "/images/pf-coastal.webp",
    lede: "Kitchen, bathroom and whole-home remodeling for Olympia homes, designed and built by one team from our showroom next door in Lacey.",
    intro: [
      "Olympia sits right beside Lacey, so our showroom on Martin Way is a short drive from most Olympia homes. You make every selection in one place, and our own crew builds it.",
      "We have been remodeling homes across Thurston County since 2004. [Add a sentence about Olympia work: how long, how many projects, or a favorite project here.]",
    ],
    areas: ["Downtown", "Eastside", "Westside", "South Capitol", "Northeast", "Southeast", "[Other neighborhoods you work in]"],
    homes: [
      { title: "Older homes", text: "[What you see in Olympia's older homes, and how you approach updating them.]" },
      { title: "Newer homes", text: "[What owners of newer Olympia homes usually ask for.]" },
      { title: "Permits", text: "[How you handle permits and inspections with the City of Olympia.]" },
    ],
    faq: [
      { q: "Do you work in Olympia?", a: "Yes. Olympia is one of our core service areas, and our showroom is next door in Lacey at 8695 Martin Way E #101." },
      { q: "How far is your showroom from Olympia?", a: "[About X minutes from downtown Olympia. Confirm the drive time.]" },
      { q: "Do you pull permits with the City of Olympia?", a: "[Answer to confirm.]" },
      { q: "How long does a kitchen remodel in Olympia take?", a: "[Answer to confirm.]" },
    ],
  },
];

export const cityPage = (slug: string) => CITY_PAGES.find((c) => c.slug === slug);
export const cityHref = (name: string) => {
  const c = CITY_PAGES.find((p) => p.name === name);
  return c ? `/about/service-areas/${c.slug}` : undefined;
};
