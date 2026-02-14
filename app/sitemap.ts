import { programs } from "@/data/programs";

export const runtime = "edge";

export default function sitemap() {
  const baseUrl = "https://nihareeka-redesign.vercel.app";

  // Static pages
  const staticPages = ["", "programs", "about", "register", "contact"];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date().toISOString(),
  }));

  // Dynamic program pages
  const programUrls = programs.map((program) => ({
    url: `${baseUrl}/programs/${program.link}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticUrls, ...programUrls];
}
