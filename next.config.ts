import type { NextConfig } from "next";
import { OLD_SITE_HOST, OLD_SITE_PATHS } from "./lib/old-site-redirects";

const nextConfig: NextConfig = {
  // Photos are already compressed .webp files in /public, so serve them straight from the CDN.
  // Running them through the image optimizer re-fetched every size from the origin on each new
  // deployment, which used up Vercel's Fast Origin Transfer.
  images: { unoptimized: true },
  // The sitemap lists Design Services both at the top level and under Services; keep one page.
  async redirects() {
    return [
      { source: "/design-services", destination: "/services/design-services", permanent: true },
      // Our Story was folded back into About.
      { source: "/about/our-story", destination: "/about", permanent: true },
      ...OLD_SITE_PATHS.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
        has: [{ type: "host" as const, value: OLD_SITE_HOST }],
      })),
    ];
  },
};

export default nextConfig;
