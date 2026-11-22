import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://northgroupglobal.com.br";

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/sites-e-sistemas`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacidade`,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos`,
      priority: 0.3,
    },
  ];
}
