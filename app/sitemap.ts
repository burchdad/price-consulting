import { MetadataRoute } from "next";
import { company } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/approach", "/resources", "/contact"];

  return routes.map((route) => ({
    url: `${company.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}