import { getWorks } from "@/services/apiWorks";

export default async function sitemap() {
  const baseUrl = "https://gaberuseff.info";

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/certifications`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic project routes
  try {
    const works = await getWorks();
    const workRoutes = works.map((work) => ({
      url: `${baseUrl}/works/${work.id}`,
      lastModified: work.updatedAt || new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));
    return [...routes, ...workRoutes];
  } catch (error) {
    console.error("Error generating sitemap dynamic routes:", error);
    return routes;
  }
}
