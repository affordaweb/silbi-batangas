import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fmnl30-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fmnl30-2.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fmnl30-3.fna.fbcdn.net',
      },
    ],
  },
};

export default nextConfig;