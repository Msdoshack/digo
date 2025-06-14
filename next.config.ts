import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "ng.jumia.is" },
      { protocol: "https", hostname: "www.apple.com" },
    ],
  },
  /* config options here */
};

export default nextConfig;
