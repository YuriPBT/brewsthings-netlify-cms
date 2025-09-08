import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type Category = "post" | "schede-tecniche" | "recensioni" | "tutorial";

export interface DocFront {
  title: string;
  slug: string;
  date: string; // DD/MM/YYYY
  author?: string;
  cover?: string;
  excerpt?: string;
  tags?: string[];
  category: Category;
  // Extra fields by type:
  style?: string;    // schede-tecniche
  abv?: string; ibu?: string; og?: string; fg?: string;
  rating?: number; brand?: string; // recensioni
  level?: "base"|"intermedio"|"avanzato"; duration?: string; // tutorial
  comments?: boolean;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getAllByCategory(category: Category) {
  const dir = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".mdx"));
  const items = files.map(file => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);
    return {
      front: data as DocFront,
      content,
      readingMinutes: Math.ceil(stats.minutes * 10) / 10
    };
  });
  return items.sort((a,b) => {
    // Dates are DD/MM/YYYY; sort desc
    const pa = a.front.date.split("/").reverse().join("-");
    const pb = b.front.date.split("/").reverse().join("-");
    return pa < pb ? 1 : -1;
  });
}

export function getDoc(category: Category, slug: string) {
  const dir = path.join(CONTENT_DIR, category);
  const filePath = path.join(dir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { front: data as DocFront, content };
}