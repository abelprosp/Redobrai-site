import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd().replaceAll("\\", "/"),
  },
};

export default nextConfig;
