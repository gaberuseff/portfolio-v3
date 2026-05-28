export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/redirect/",
      ],
    },
    sitemap: "https://gaberuseff.info/sitemap.xml",
  };
}
