// tina/config.ts
import { defineConfig } from "tinacms";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const safeRouter = (basePath: string) => {
  return ({ document }: { document: any; collection: any }) => {
    const slug =
      document?.data?.slug ||
      document._sys.relativePath.replace(/\.mdx?$/, "");
    return `/${basePath}/${slug}`;
  };
};

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID!, 
  token: process.env.TINA_TOKEN!, 
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Post",
        path: "content/post",
        format: "mdx",
        ui: { router: safeRouter("post") },
        fields: [
          { type: "string", name: "title", label: "Titolo", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "rich-text", name: "body", label: "Contenuto", isBody: true }
        ]
      },
      {
        name: "schede-tecniche",
        label: "Schede Tecniche",
        path: "content/schede-tecniche",
        format: "mdx",
        ui: { router: safeRouter("schede-tecniche") },
        fields: [
          { type: "string", name: "title", label: "Titolo", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "rich-text", name: "body", label: "Contenuto", isBody: true }
        ]
      },
      {
        name: "tutorial",
        label: "Tutorial",
        path: "content/tutorial",
        format: "mdx",
        ui: { router: safeRouter("tutorial") },
        fields: [
          { type: "string", name: "title", label: "Titolo", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "rich-text", name: "body", label: "Contenuto", isBody: true }
        ]
      },
      {
        name: "autori",
        label: "Autori",
        path: "content/autori",
        format: "mdx",
        ui: { router: safeRouter("autore") },
        fields: [
          { type: "string", name: "name", label: "Nome", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "bio", label: "Biografia" }
        ]
      },
      {
        name: "recensioni",
        label: "Recensioni",
        path: "content/recensioni",
        format: "mdx",
        ui: { router: safeRouter("recensioni") },
        fields: [
          { type: "string", name: "title", label: "Titolo", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "rich-text", name: "body", label: "Contenuto", isBody: true },
          { type: "number", name: "rating", label: "Valutazione", required: false }
        ]
      }
    ]
  }
});
