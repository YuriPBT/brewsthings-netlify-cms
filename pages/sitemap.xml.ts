import { GetServerSideProps } from "next";
import { getAllByCategory } from "../lib/content";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brewthings.yuripettignano.work";
  const cats = ["post","schede-tecniche","recensioni","tutorial"];
  const urls: string[] = [];
  for (const c of cats) {
    const items = getAllByCategory(c as any);
    items.forEach((it:any) => urls.push(`${baseUrl}/${c}/${it.front.slug}`));
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${baseUrl}</loc></url>
    ${urls.map(u=>`<url><loc>${u}</loc></url>`).join("")}
  </urlset>`;
  res.setHeader("Content-Type", "application/xml");
  res.write(xml);
  res.end();
  return { props: {} };
}
export default function SiteMap() { return null; }