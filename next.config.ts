import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals = [...config.externals, 'prom-client'];
    return config;
  }
};

export default nextConfig;
