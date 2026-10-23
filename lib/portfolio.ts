// Finished projects shown on the portfolio. Each is named for its type and the city it was built in;
// set `city` once the owner confirms it (an empty city shows a [City] placeholder).
export type ProjectKind = "kitchen" | "bath" | "whole";

export const KINDS: { k: ProjectKind; label: string; name: string }[] = [
  { k: "kitchen", label: "Kitchens", name: "Kitchen Remodel" },
  { k: "bath", label: "Bathrooms", name: "Bathroom Remodel" },
  { k: "whole", label: "Whole Home Remodels", name: "Whole Home Remodel" },
];

export const PROJECTS: { kind: ProjectKind; img: string; alt: string; city: string }[] = [
  { kind: "kitchen", img: "/images/pf-university.webp", alt: "A transitional white kitchen", city: "" },
  { kind: "kitchen", img: "/images/pf-midnight.webp", alt: "A navy kitchen with a quartz island", city: "" },
  { kind: "kitchen", img: "/images/pf-quartz.webp", alt: "A kitchen with a slab quartz backsplash", city: "" },
  { kind: "kitchen", img: "/images/pf-forest.webp", alt: "A contemporary kitchen with a large island", city: "" },
  { kind: "kitchen", img: "/images/pf-coastal.webp", alt: "A transitional chef's kitchen", city: "" },
  { kind: "bath", img: "/images/pf-oslo.webp", alt: "A walk-in wet room shower with large-format tile", city: "" },
  { kind: "bath", img: "/images/pf-essential.webp", alt: "A spa-style primary bathroom", city: "" },
  { kind: "bath", img: "/images/pf-bathview.webp", alt: "A bathroom with a clawfoot tub", city: "" },
  { kind: "whole", img: "/images/wh-open-plan.webp", alt: "An open kitchen and living space after a whole-home remodel", city: "" },
  { kind: "whole", img: "/images/wh-kitchen.webp", alt: "A kitchen from a whole-home remodel", city: "" },
  { kind: "whole", img: "/images/wh-bath.webp", alt: "A bathroom from a whole-home remodel", city: "" },
];
