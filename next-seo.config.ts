import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s | Brewthings",
  defaultTitle: "Brewthings",
  description: "Birra, recensioni, schede tecniche e tutorial. Inline editing con Tina, veloce e pulito.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    site_name: "Brewthings"
  },
  twitter: {
    handle: "@yuripettignano",
    site: "@yuripettignano",
    cardType: "summary_large_image"
  },
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.ico" }
  ]
};

export default config;