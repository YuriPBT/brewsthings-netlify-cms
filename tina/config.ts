import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Post",
        path: "content/post",
        format: "mdx",
        ui: { router: (doc) => `/post/${doc?.slug}` },
        fields: [
          { type: "string", name: "title", label: "Titolo", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "date", label: "Data (DD/MM/YYYY)", required: true },
          { type: "string", name: "author", label: "Autore" },
          { type: "image", name: "cover", label: "Cover" },
          { type: "string", name: "excerpt", label: "Estratto", ui: { component: "textarea" } },
          { type: "string", name: "tags", label: "Tag", list: true },
          { type: "boolean", name: "comments", label: "Commenti", required: false },
          { type: "rich-text", name: "body", label: "Contenuto", isBody: true }
        ]
      },
      {
        name: "schede-tecniche",
        label: "Schede tecniche",
        path: "content/schede-tecniche",
        format: "mdx",
        ui: { router: (doc) => `/schede-tecniche/${doc?.slug}` },
        fields: [
          { type: "string", name: "title", label: "Titolo", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "date", label: "Data (DD/MM/YYYY)", required: true },
          { type: "image", name: "cover", label: "Cover" },
          { type: "string", name: "excerpt", label: "Estratto", ui: { component: "textarea" } },
          { type: "string", name: "style", label: "Stile" },
          { type: "string", name: "og", label: "OG" },
          { type: "string", name: "fg", label: "FG" },
          { type: "string", name: "abv", label: "ABV" },
          { type: "string", name: "ibu", label: "IBU" },
          { type: "string", name: "tags", label: "Tag", list: true },
          { type: "boolean", name: "comments", label: "Commenti" },
          { type: "rich-text", name: "body", label: "Contenuto", isBody: true }
        ]
      },
      {
        name: "recensioni",
        label: "Recensioni",
        path: "content/recensioni",
        format: "mdx",
        ui: { router: (doc) => `/recensioni/${doc?.slug}` },
        fields: [
          { type: "string", name: "title", label: "Titolo", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "date", label: "Data (DD/MM/YYYY)", required: true },
          { type: "string", name: "brand", label: "Brand" },
          { type: "number", name: "rating", label: "Valutazione (1-5)" },
          { type: "image", name: "cover", label: "Cover" },
          { type: "string", name: "excerpt", label: "Estratto", ui: { component: "textarea" } },
          { type: "string", name: "tags", label: "Tag", list: true },
          { type: "boolean", name: "comments", label: "Commenti" },
          { type: "rich-text", name: "body", label: "Contenuto", isBody: true }
        ]
      },
      {
        name: "tutorial",
        label: "Tutorial",
        path: "content/tutorial",
        format: "mdx",
        ui: { router: (doc) => `/tutorial/${doc?.slug}` },
        fields: [
          { type: "string", name: "title", label: "Titolo", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "date", label: "Data (DD/MM/YYYY)", required: true },
          { type: "string", name: "level", label: "Livello", options: ["base","intermedio","avanzato"] },
          { type: "string", name: "duration", label: "Durata" },
          { type: "image", name: "cover", label: "Cover" },
          { type: "string", name: "excerpt", label: "Estratto", ui: { component: "textarea" } },
          { type: "string", name: "tags", label: "Tag", list: true },
          { type: "boolean", name: "comments", label: "Commenti" },
          { type: "rich-text", name: "body", label: "Contenuto", isBody: true }
        ]
      },
      {
        name: "autori",
        label: "Autori",
        path: "content/autori",
        format: "mdx",
        ui: { router: (doc) => `/autore/${doc?.slug}` },
        fields: [
          { type: "string", name: "title", label: "Nome", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "image", name: "avatar", label: "Avatar" },
          { type: "string", name: "bio", label: "Bio", ui: { component: "textarea" } },
          { type: "string", name: "links", label: "Link", list: true },
          { type: "rich-text", name: "body", label: "Corpo (opzionale)", isBody: true }
        ]
      }
    ]
  }
});