import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The sitemap lists Design Services both at the top level and under Services; keep one page.
  async redirects() {
    return [{ source: "/design-services", destination: "/services/design-services", permanent: true }];
  },
};

export default nextConfig;
