// Client reviews, tagged by service so each page can show the ones that match it.
// Add real reviews here; entries in [brackets] are slots still waiting for one.
export type Service = "kitchen" | "ten-day" | "bath" | "fast-bath" | "whole-home" | "commercial" | "design";

export type Review = { quote: string; name: string; project: string; tags: Service[]; placeholder?: boolean };

export const REVIEWS: Review[] = [
  {
    quote: "Highly recommend. Very happy with the outcome of our kitchen. Everyone was professional, friendly and accommodating. Responded immediately to phone calls.",
    name: "Cathy S.",
    project: "Kitchen remodel",
    tags: ["kitchen", "ten-day"],
  },
  {
    quote: "What we really appreciated was how much they genuinely cared. They checked in, made sure we were comfortable, and seemed invested in our happiness.",
    name: "Bennett",
    project: "Kitchen and bath",
    tags: ["kitchen", "bath"],
  },
  { quote: "[Fast Bath client review to add]", name: "[Name]", project: "Fast Bath", tags: ["fast-bath", "bath"], placeholder: true },
  { quote: "[Whole-home client review to add]", name: "[Name]", project: "Whole-home remodel", tags: ["whole-home"], placeholder: true },
  { quote: "[Commercial client review to add]", name: "[Name]", project: "Commercial build-out", tags: ["commercial"], placeholder: true },
];

// Google rating slot shown near buttons and consultation bands until the real numbers are in.
export const RATING = { stars: "[Google rating]", count: "[N]" };

// Real reviews first, then empty slots, for the given services (all services when none are given).
export function reviewsFor(tags?: Service[]): Review[] {
  const list = tags ? REVIEWS.filter((r) => r.tags.some((t) => tags.includes(t))) : REVIEWS;
  return [...list.filter((r) => !r.placeholder), ...list.filter((r) => r.placeholder)];
}
