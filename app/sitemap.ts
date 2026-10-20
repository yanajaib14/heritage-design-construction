import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";

// Every page in the app folder (dynamic routes excluded), read at build time so new pages are picked up.
function routes(dir: string, base = ""): string[] {
  const out: string[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory() || e.name.startsWith("[") || e.name.startsWith("_") || e.name.startsWith("(")) continue;
    const sub = path.join(dir, e.name);
    if (fs.existsSync(path.join(sub, "page.tsx"))) out.push(`${base}/${e.name}`);
    out.push(...routes(sub, `${base}/${e.name}`));
  }
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const all = ["", ...routes(path.join(process.cwd(), "app"))];
  return all.map((r) => ({
    url: `${BASE_URL}${r || "/"}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
