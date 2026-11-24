// Finished projects shown on the portfolio. Each is named for its type and the city it was built in;
// Cities come from the matching project photos on the old 10daykitchens.com portfolio; an empty city
// shows a [City] placeholder until the owner confirms where that project was built.
export type ProjectKind = "kitchen" | "bath" | "whole";

export const KINDS: { k: ProjectKind; label: string; name: string }[] = [
  { k: "kitchen", label: "Kitchens", name: "Kitchen Remodel" },
  { k: "bath", label: "Bathrooms", name: "Bathroom Remodel" },
  { k: "whole", label: "Whole Home Remodels", name: "Whole Home Remodel" },
];

// Where each finished-project photo was built, matched by photo to the old 10daykitchens.com portfolio.
// Every page that captions a project photo reads from here; a photo missing from this list shows [City].
export const PLACES: Record<string, string> = {
  "/images/pf-university.webp": "University Place",
  "/images/pf-midnight.webp": "South Sound",
  "/images/pf-forest.webp": "Olympia",
  "/images/pf-coastal.webp": "Steilacoom",
  "/images/ba-kitchen-after.webp": "Chehalis",
  "/images/ba-bath-after.webp": "University Place",
};
export const placeOf = (img: string) => PLACES[img] ?? "";

export const PROJECTS: { kind: ProjectKind; img: string; alt: string; city: string }[] = [
  { kind: "kitchen", img: "/images/pf-university.webp", alt: "A transitional white kitchen", city: placeOf("/images/pf-university.webp") },
  { kind: "kitchen", img: "/images/pf-midnight.webp", alt: "A navy kitchen with a quartz island", city: placeOf("/images/pf-midnight.webp") },
  { kind: "kitchen", img: "/images/pf-quartz.webp", alt: "A kitchen with a slab quartz backsplash", city: "" },
  { kind: "kitchen", img: "/images/pf-forest.webp", alt: "A contemporary kitchen with a large island", city: placeOf("/images/pf-forest.webp") },
  { kind: "kitchen", img: "/images/pf-coastal.webp", alt: "A transitional chef's kitchen", city: placeOf("/images/pf-coastal.webp") },
  { kind: "bath", img: "/images/pf-oslo.webp", alt: "A walk-in wet room shower with large-format tile", city: "" },
  { kind: "bath", img: "/images/pf-essential.webp", alt: "A spa-style primary bathroom", city: "" },
  { kind: "bath", img: "/images/pf-bathview.webp", alt: "A bathroom with a clawfoot tub", city: "" },
  { kind: "whole", img: "/images/wh-open-plan.webp", alt: "An open kitchen and living space after a whole-home remodel", city: "" },
  { kind: "whole", img: "/images/wh-kitchen.webp", alt: "A kitchen from a whole-home remodel", city: "" },
  { kind: "whole", img: "/images/wh-bath.webp", alt: "A bathroom from a whole-home remodel", city: "" },
];
