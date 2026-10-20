// 301s from the old 10 Day Kitchens site (paths taken from its code). They only apply to requests for
// 10daykitchens.com, so they do nothing until that domain is pointed at this project.
const K = "/services/remodeling-services/kitchen-remodeling";
const B = "/services/remodeling-services/bathroom-remodeling";

export const OLD_SITE_PATHS: [string, string][] = [
  ["/", "/"],
  ["/10-day-kitchen-program", `${K}/10-day-kitchen-program`],
  ["/kitchen-remodel", K],
  // city pages are on hold, so old city URLs go to the kitchen page for now
  ["/kitchen-remodel/:city", K],
  ["/bathroom-remodel", B],
  ["/fast-bath", `${B}/fast-bath-program`],
  ["/bathroom-estimator", `${B}/fast-bath-program/bathroom-ai-estimator`],
  ["/appointments", "/contact/schedule-consultation"],
  ["/collections", "/about/showroom"],
  ["/faq", "/resources/faqs"],
  ["/financing", "/resources/financing"],
  ["/blog", "/resources/advice-blog"],
  ["/blog/:slug", "/resources/advice-blog"],
  ["/about", "/about"],
  ["/portfolio", "/portfolio"],
  ["/contact", "/contact"],
];

export const OLD_SITE_HOST = "(www\\.)?10daykitchens\\.com";
