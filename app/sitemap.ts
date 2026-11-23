import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.northgroupglobal.com.br";

  return [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/sites-e-sistemas`, priority: 0.9 },
    { url: `${baseUrl}/automacoes-empresariais`, priority: 0.85 },
    { url: `${baseUrl}/marketing-digital`, priority: 0.85 },
    { url: `${baseUrl}/en`, priority: 0.8 },
    { url: `${baseUrl}/privacidade`, priority: 0.3 },
    { url: `${baseUrl}/termos`, priority: 0.3 },
  ];
}
