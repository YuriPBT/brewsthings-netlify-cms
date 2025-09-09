/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" }
    ],
    unoptimized: true // necessario per export statico 
  },
  experimental: { scrollRestoration: true },
  output: "export"
};

module.exports = nextConfig;
