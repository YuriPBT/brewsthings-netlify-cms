// pages/api/robots.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
  res.write(`User-agent: *
Allow: /
Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`);
  res.end();
}

