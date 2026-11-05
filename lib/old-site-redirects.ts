// 301s from the old 10 Day Kitchens site (paths taken from its code). They only apply to requests for
// 10daykitchens.com, so they do nothing until that domain is pointed at this project.
const K = "/services/remodeling-services/kitchen-remodeling";
const B = "/services/remodeling-services/bathroom-remodeling";

export const OLD_SITE_PATHS: [string, string][] = [
  ["/", "/"],
  ["/10-day-kitchen-program", `${K}/10-day-kitchen-program`],
  ["/kitchen-remodel", K],
  // old city URLs go to the matching city page once it exists, otherwise to the kitchen page
  ["/kitchen-remodel/tacoma", "/about/service-areas/tacoma"],
  ["/kitchen-remodel/olympia", "/about/service-areas/olympia"],
  ["/kitchen-remodel/lacey", "/about/service-areas/lacey"],
  ["/kitchen-remodel/tumwater", "/about/service-areas/tumwater"],
  ["/kitchen-remodel/dupont", "/about/service-areas/dupont"],
  ["/kitchen-remodel/lakewood", "/about/service-areas/lakewood"],
  ["/kitchen-remodel/university-place", "/about/service-areas/university-place"],
  ["/kitchen-remodel/fife", "/about/service-areas/fife"],
  ["/kitchen-remodel/puyallup", "/about/service-areas/puyallup"],
  ["/kitchen-remodel/yelm", "/about/service-areas/yelm"],
  ["/kitchen-remodel/steilacoom", "/about/service-areas/steilacoom"],
  ["/kitchen-remodel/bonney-lake", "/about/service-areas/bonney-lake"],
  ["/kitchen-remodel/gig-harbor", "/about/service-areas/gig-harbor"],
  ["/kitchen-remodel/federal-way", "/about/service-areas/federal-way"],
  ["/kitchen-remodel/auburn", "/about/service-areas/auburn"],
  ["/kitchen-remodel/centralia", "/about/service-areas/centralia"],
  ["/kitchen-remodel/chehalis", "/about/service-areas/chehalis"],
  ["/kitchen-remodel/parkland-spanaway", "/about/service-areas/spanaway"],
  ["/kitchen-remodel/sumner", "/about/service-areas"],
  ["/kitchen-remodel/edgewood-milton", "/about/service-areas"],
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
