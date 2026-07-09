import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Aapka production base domain url
  const baseUrl = "https://www.waffhil.com";

  // Static routing nodes setup with baseline configuration mapping
  const staticRoutes = [
    "",
    "/about",
    "/menu",
    "/franchise",
    "/stores",
    "/careers",
    "/privacy-policy",
    "/terms",
  ];

  const sitemapEntries = staticRoutes.map((route) => {
    // Determining tracking priority and frequency parameters based on section depth
    let priority = 0.7;
    let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily"; // Home page catches core active metrics updates
    } else if (route === "/menu" || route === "/stores") {
      priority = 0.9;
      changeFrequency = "daily"; // Menu adjustments and locations tracking
    } else if (route === "/franchise" || route === "/careers") {
      priority = 0.8;
      changeFrequency = "weekly"; // Onboarding and active openings data shifting
    } else if (route === "/privacy-policy" || route === "/terms") {
      priority = 0.3;
      changeFrequency = "monthly"; // Compliance updates are static
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority,
    };
  });

  return sitemapEntries;
}