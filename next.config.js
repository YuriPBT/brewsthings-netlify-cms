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
  output: "export",

  async rewrites() {
    return [
      { source: "/robots.txt", destination: "/api/robots" },
      { source: "/sitemap.xml", destination: "/api/sitemap" }
    ];
  }
};

module.exports = nextConfig;

