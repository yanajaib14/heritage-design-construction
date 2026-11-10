// Extra content for the city pages Ben wants strongest: the areas most clients come from
// (Tacoma, Olympia, University Place) and Lacey, home of the showroom.
// Anything we do not know yet stays a [placeholder].

export type Featured = {
  // Tacoma, Olympia and University Place each get their own page design; Lacey keeps the shared one plus the tour.
  design?: "tacoma" | "olympia" | "up";
  heroImg?: { src: string; alt: string };
  // Large editorial statement near the top of the page.
  statement: [string, string];
  statementText: string;
  gallery: { src: string; alt: string; label?: string }[];
  // What homeowners in this city ask us for most.
  asksTitle: [string, string];
  asks: { t: string; p: string }[];
  extraFaq: { q: string; a: string }[];
};

const GALLERY = {
  forest: { src: "/images/pf-forest.webp", alt: "A finished custom kitchen with wood cabinetry", label: "Kitchen" },
  midnight: { src: "/images/pf-midnight.webp", alt: "A dark-cabinet kitchen with stone counters", label: "Kitchen" },
  oslo: { src: "/images/pf-oslo.webp", alt: "A bathroom vanity with green tile and an arched mirror", label: "Bathroom" },
  quartz: { src: "/images/pf-quartz.webp", alt: "A kitchen with quartz counters and an island", label: "Kitchen" },
  bathview: { src: "/images/pf-bathview.webp", alt: "A remodeled bathroom with a large window", label: "Bathroom" },
  coastal: { src: "/images/pf-coastal.webp", alt: "A bright coastal-style kitchen", label: "Kitchen" },
  essential: { src: "/images/pf-essential.webp", alt: "A clean, simple kitchen remodel", label: "Kitchen" },
  university: { src: "/images/pf-university.webp", alt: "A remodeled kitchen with an open layout", label: "Kitchen" },
  zen: { src: "/images/bath-zen.webp", alt: "A calm, spa-style bathroom", label: "Bathroom" },
  open: { src: "/images/wh-open-plan.webp", alt: "An open-plan kitchen and living space", label: "Whole home" },
};

const DESIGN_FAQ = {
  q: "Can I see my remodel before work starts?",
  a: "Yes. Your designer plans the space and shows it to you in 3D renderings, and you choose every finish in person at our Lacey showroom before construction begins.",
};

export const FEATURED: Record<string, Featured> = {
  tacoma: {
    design: "tacoma",
    heroImg: { src: "/images/pf-midnight.webp", alt: "A dark-cabinet kitchen with stone counters" },
    statement: ["Tacoma's best homes", "deserve a finished, considered remodel."],
    statementText:
      "From North End Craftsman homes to view properties above Ruston Way and Browns Point, Tacoma homeowners ask for more than new cabinets. They want custom storage, real stone, lighting that is planned, and details that respect the age and character of the house. We design all of it with you, show it to you in 3D, and build it with our own crew.",
    gallery: [GALLERY.forest, GALLERY.quartz, GALLERY.bathview, GALLERY.open],
    asksTitle: ["What Tacoma homeowners", "ask us for."],
    asks: [
      { t: "Period character, updated", p: "Craftsman and Tudor homes get kitchens with modern function and trim, millwork and cabinet doors that suit the house." },
      { t: "Open, view-facing layouts", p: "Walls removed or reworked so the kitchen opens to the dining room or the view, with structural review planned from the start." },
      { t: "Primary suites", p: "Walk-in tiled showers, freestanding tubs and double vanities in place of a dated primary bath." },
      { t: "Whole-floor remodels", p: "Kitchen, living and dining planned together so the finishes run through the whole main floor." },
    ],
    extraFaq: [
      DESIGN_FAQ,
      { q: "Do you take on high-end, custom kitchens in Tacoma?", a: "Yes. Beyond our 10-Day Kitchen program, we design and build custom kitchens with layout changes, custom cabinetry, natural stone and planned lighting. Pricing follows a site visit and a defined scope." },
      { q: "Can I see a finished project near me in Tacoma?", a: "[Add how Tacoma clients can see finished work, such as a portfolio project or a referral to a past client.]" },
    ],
  },
  olympia: {
    design: "olympia",
    heroImg: { src: "/images/pf-coastal.webp", alt: "A bright coastal-style kitchen" },
    statement: ["Olympia remodels,", "designed around the house you love."],
    statementText:
      "Olympia has some of the South Sound's most distinctive homes: historic South Capitol houses, wooded lots on Cooper Point, waterfront homes toward Boston Harbor, and Eastside bungalows full of character. Our showroom is 10 minutes away, so you can meet your designer, see the materials in person and come back as often as the project needs.",
    gallery: [GALLERY.oslo, GALLERY.zen, GALLERY.essential, GALLERY.forest],
    asksTitle: ["What Olympia homeowners", "ask us for."],
    asks: [
      { t: "Historic homes, handled with care", p: "Kitchens and baths updated in older houses while keeping original trim, proportions and the feel of the home." },
      { t: "Kitchens that open to the outdoors", p: "Better light, bigger windows and layouts that connect to the deck or garden on wooded and waterfront lots." },
      { t: "Spa-style bathrooms", p: "Curbless showers, natural materials, warm lighting and storage planned into every wall." },
      { t: "Room to grow", p: "Additions and ADU/DADUs on larger lots, for family, guests or a home office." },
    ],
    extraFaq: [
      DESIGN_FAQ,
      { q: "Do you remodel historic homes in Olympia?", a: "Yes. Older Olympia homes often need extra planning around original trim, wiring and plumbing. We assess those in the first consultation and design the remodel to suit the house." },
      { q: "Can I see a finished project near me in Olympia?", a: "[Add how Olympia clients can see finished work, such as a portfolio project or a referral to a past client.]" },
    ],
  },
  "university-place": {
    design: "up",
    heroImg: { src: "/images/kitchens.webp", alt: "A finished kitchen with an island and open living space" },
    statement: ["University Place homes,", "finished to the standard of the view."],
    statementText:
      "Near Chambers Bay, Day Island and Sunset Beach, homes come with premium locations and high expectations. University Place clients ask for calm, refined kitchens, durable natural surfaces, bathrooms that feel like a retreat, and a team that shows them every detail before work begins. That is how we work.",
    gallery: [GALLERY.university, GALLERY.bathview, GALLERY.midnight, GALLERY.essential],
    asksTitle: ["What University Place homeowners", "ask us for."],
    asks: [
      { t: "Kitchens that frame the view", p: "Layouts reworked so the work zone, island and seating face the water or the course, not the wall." },
      { t: "Quiet, refined finishes", p: "Simple lines, slab counters, integrated appliances and storage that keeps the counters clear." },
      { t: "A retreat-style primary bath", p: "Large-format tile, a walk-in shower, a freestanding tub and lighting planned for morning and night." },
      { t: "Moving past builder-grade", p: "Original builder kitchens and baths rebuilt with custom cabinetry and better materials throughout." },
    ],
    extraFaq: [
      DESIGN_FAQ,
      { q: "Do you take on luxury kitchen and bath remodels in University Place?", a: "Yes. We design and build custom kitchens and primary suites with custom cabinetry, natural stone and planned lighting. Pricing follows a site visit and a defined scope." },
      { q: "Can I see a finished project near me in University Place?", a: "[Add how University Place clients can see finished work, such as a portfolio project or a referral to a past client.]" },
    ],
  },
  lacey: {
    statement: ["The showroom is in Lacey.", "So is the team that builds your remodel."],
    statementText:
      "Lacey is home. Our designers and our showroom are right here on Martin Way, so you can stop in after work, come back as often as you need while you decide, and meet the team building your project before work begins.",
    gallery: [GALLERY.quartz, GALLERY.zen, GALLERY.forest, GALLERY.oslo, GALLERY.bathview, GALLERY.midnight],
    asksTitle: ["What Lacey homeowners", "ask us for."],
    asks: [
      { t: "A kitchen in 10 business days", p: "Same-layout kitchens through our 10-Day Kitchen program, designed and staged before day one." },
      { t: "Bathrooms without the long wait", p: "Tub-to-shower conversions and new surrounds through Fast Bath, in as little as 3 days." },
      { t: "Updating newer homes", p: "Builder-grade kitchens and baths in Hawks Prairie and Jubilee rebuilt with better cabinets, counters and lighting." },
      { t: "Help choosing", p: "Time with a designer in the showroom to narrow down cabinets, stone, tile and hardware." },
    ],
    extraFaq: [
      DESIGN_FAQ,
      { q: "Can I visit the showroom without an appointment?", a: "[Confirm whether walk-ins are welcome during showroom hours, or if visits are by appointment.]" },
    ],
  },
};

// Stops on the Lacey showroom walk-through.
export const TOUR = [
  { t: "Kitchen displays", p: "Full kitchens set up so you can open drawers, feel the door finishes and see cabinet lines at real size.", src: "/images/hero-showroom.webp", alt: "Kitchen displays in the Heritage showroom" },
  { t: "Cabinet door wall", p: "Door styles, wood species and paint colors side by side, so you can compare them in one place.", src: "/images/sr-door-samples.webp", alt: "Cabinet door samples on the showroom wall" },
  { t: "Tile & stone", p: "Quartz, natural stone and tile samples to pair with your cabinets before anything is ordered.", src: "/images/sr-tile.webp", alt: "Tile and stone samples in the showroom" },
  { t: "Design desk", p: "Sit down with your designer, review the 3D renderings and finalize every selection.", src: "/images/sr-design-review.webp", alt: "A designer reviewing plans with clients" },
  { t: "Consultation", p: "Start here: talk through your home, your budget and the way you want the room to work.", src: "/images/sr-consult.webp", alt: "A design consultation in the showroom" },
];
