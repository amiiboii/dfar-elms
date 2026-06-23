import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "www.fisheries.gov.lk" },
      { hostname: "randomuser.me" },
    ],
  },
};

export default nextConfig;
