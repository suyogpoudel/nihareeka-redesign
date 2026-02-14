import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/register", "/contact"],
      },
    ],
    sitemap: "https://nihareeka-redesign.vercel.app/sitemap.xml",
  };
}
