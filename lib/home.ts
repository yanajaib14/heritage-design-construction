// Homepage content kept as data so photos, projects and copy can be swapped without touching markup.

// Scroll walk-in hero. Until the gimbal footage exists the hero pushes slowly into the showroom photo
// behind a pair of glass doors. To use real footage, export it as numbered WebP frames
// (see scripts/make-hero-frames.sh), set `frames` to how many there are and `doors` to false.
export const WALK = {
  poster: "/images/hero-showroom.webp",
  frames: 0,
  dir: "/images/walk",
  phoneDir: "/images/walk-sm",
  doors: false,
};

export const HERO = {
  eyebrow: "Design · Supply · Build · Based in Lacey, WA",
  kicker: "One company. Start to finish.",
  title: "Exceptional spaces,",
  titleEm: "built to last.",
  sub: "We design your project, supply every material from our own Lacey showroom, and build it with our own team. Kitchens, bathrooms, whole homes and commercial spaces across the South Sound, all under one roof.",
};

export const TRUST = [
  { n: "800+", b: "Projects completed" },
  { n: "5-Year", b: "Warranty on our work" },
  { n: "2004", b: "Family owned since" },
  { n: "Licensed", b: "And fully insured", em: true },
];

export const STEPS = [
  { t: "Design", p: "Space planning, 3D renderings and a designer by your side from the first sketch." },
  { t: "Supply", p: "Cabinetry, stone, tile, fixtures and hardware, chosen in person at Heritage Design Center." },
  { t: "Build", p: "Our own team builds what you approved, and walks it with you at the end." },
];

export const PATHS = [
  {
    t: "Custom Kitchen Remodel",
    p: "A new layout, custom cabinetry, stone and lighting, designed from the ground up.",
    href: "/services/remodeling-services/kitchen-remodeling",
    link: "Explore custom kitchens",
    img: "/images/pf-forest.webp",
    alt: "A custom kitchen with a large stone island and warm wood cabinetry",
  },
  {
    t: "10-Day Kitchen Program",
    p: "Same layout, all-new kitchen, installed in 10 business days.",
    href: "/services/remodeling-services/kitchen-remodeling/10-day-kitchen-program",
    link: "See the 10 days",
    img: "/images/pricing-medium.webp",
    alt: "A navy and white kitchen with a waterfall quartz island",
  },
  {
    t: "Cabinet Refacing",
    p: "New doors, drawer fronts and finishes on the cabinet boxes you already have.",
    href: "/services/remodeling-services/kitchen-remodeling/cabinet-refacing",
    link: "Ask about refacing",
    img: "/images/pf-university.webp",
    alt: "A bright kitchen with white shaker cabinet doors",
  },
];

// Homepage before/after pair (drag-to-compare).
export const BA_PROJECTS = [
  {
    t: "Kitchen remodel",
    p: "Dated wood cabinets out; bright white cabinetry and dark granite in.",
    before: "/images/ba-kitchen-before.webp",
    beforeAlt: "The kitchen before, with dated wood cabinets",
    after: "/images/ba-kitchen-after.webp",
    afterAlt: "The finished kitchen with white cabinets and dark granite counters",
  },
  {
    t: "Bathroom remodel",
    p: "A tired tub and vanity turned into a glass shower and a clean new vanity.",
    before: "/images/ba-bath-before.webp",
    beforeAlt: "The bathroom before the remodel",
    after: "/images/ba-bath-after.webp",
    afterAlt: "The finished bathroom with a black-framed glass shower and hex tile floor",
  },
];

// Finished projects in the homepage carousel. Click one to open it large.
export const GALLERY = [
  { img: "/images/pf-midnight.webp", alt: "A navy kitchen with a quartz island and brass bar stools" },
  { img: "/images/pf-oslo.webp", alt: "A walk-in wet room shower with large-format tile" },
  { img: "/images/pf-university.webp", alt: "A transitional white kitchen" },
  { img: "/images/pf-essential.webp", alt: "A spa-style primary bathroom" },
  { img: "/images/pf-forest.webp", alt: "A custom kitchen with a large stone island and warm wood cabinetry" },
  { img: "/images/pf-bathview.webp", alt: "A primary bathroom with a clawfoot tub" },
  { img: "/images/pf-coastal.webp", alt: "A transitional chef's kitchen" },
  { img: "/images/fb-walkin.webp", alt: "A low-threshold walk-in shower" },
  { img: "/images/pf-quartz.webp", alt: "A kitchen with a quartz slab backsplash" },
  { img: "/images/fb-room.webp", alt: "A finished bathroom with a freestanding tub" },
  { img: "/images/kitchens.webp", alt: "An open white kitchen" },
  { img: "/images/pricing-large.webp", alt: "A large kitchen with an island" },
];
