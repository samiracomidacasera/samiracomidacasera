import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    domains: [],
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/out/ubereats",
        destination:
          "https://www.ubereats.com/es/store/samira-comida-casera-marroqui/DO4fAewQUH-pb_L20dvrZw",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
