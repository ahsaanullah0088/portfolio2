import type { MetadataRoute } from 'next';

const siteUrl = 'https://portfolio2-omega-steel.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
