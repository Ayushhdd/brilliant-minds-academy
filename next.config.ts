import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
