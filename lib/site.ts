// Business facts and navigation shared by every page. Only facts the owner has confirmed go here.
export const SITE = {
  name: "Heritage Design & Construction",
  url: "https://[domain-to-confirm]",
  phone: "(360) 557-3444",
  tel: "tel:+13605573444",
  showroomPhone: "(360) 557-3441",
  street: "8695 Martin Way E #101",
  city: "Lacey",
  region: "WA",
  zip: "98516",
  hours: "Mon–Fri 9:00–5:30 · Saturday by appointment",
  directions: "https://www.google.com/maps/dir/?api=1&destination=8695+Martin+Way+E+%23101+Lacey+WA+98516",
};

// Absolute address used for canonical links, the sitemap and share images. Set NEXT_PUBLIC_SITE_URL once the
// domain is live; on Vercel the project's production address is used until then.
export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

// Profiles for the business schema. Add each URL once it exists (Google Business Profile, Facebook, Houzz).
export const SAME_AS: string[] = [];

export const CITIES = [
  "Olympia", "Lacey", "Tumwater", "Tacoma", "Puyallup", "Lakewood", "University Place", "Gig Harbor", "Federal Way", "Auburn",
  "Bonney Lake", "Spanaway", "Steilacoom", "Centralia", "Chehalis", "DuPont", "Graham", "Yelm", "Shelton", "Fife",
];

export type NavLink = { label: string; href: string; children?: NavLink[] };
export type NavItem = NavLink;

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Showroom", href: "/about/showroom" },
      { label: "Service Areas", href: "/about/service-areas" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Remodeling",
        href: "/services/remodeling-services",
        children: [
          { label: "Whole-Home Remodeling", href: "/services/remodeling-services/whole-home-remodeling" },
          { label: "Kitchen Remodeling", href: "/services/remodeling-services/kitchen-remodeling" },
          { label: "10-Day Kitchen Program", href: "/services/remodeling-services/kitchen-remodeling/10-day-kitchen-program" },
          { label: "Cabinet Refacing", href: "/services/remodeling-services/kitchen-remodeling/cabinet-refacing" },
          { label: "Bathroom Remodeling", href: "/services/remodeling-services/bathroom-remodeling" },
          { label: "Fast Bath Program", href: "/services/remodeling-services/bathroom-remodeling/fast-bath-program" },
        ],
      },
      { label: "Construction", href: "/services/construction-services" },
      { label: "Design", href: "/services/design-services" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Financing", href: "/resources/financing" },
      { label: "Advice / Blog", href: "/resources/advice-blog" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
