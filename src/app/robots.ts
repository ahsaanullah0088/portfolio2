import type { MetadataRoute } from 'next';

const siteUrl = 'https://ahsaan-ullah.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/inbox', '/api/'] },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
