import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { nextRuntime }) => {
    if (nextRuntime === "nodejs") {
      config.externals = [...config.externals, "prom-client"];
    }
    return config;
  },
};

export default nextConfig;