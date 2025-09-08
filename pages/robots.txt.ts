import { GetServerSideProps } from "next";
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brewthings.yuripettignano.work";
  const body = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml`;
  res.setHeader("Content-Type", "text/plain");
  res.write(body);
  res.end();
  return { props: {} };
}
export default function Robots() { return null; }