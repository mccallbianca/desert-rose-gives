import type { MetadataRoute } from 'next';

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.desertrosegives.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    '',
    '/about',
    '/programs',
    '/programs/wellxcel',
    '/programs/mind-over-media',
    '/impact',
    '/get-involved',
    '/news',
    '/contact',
    '/privacy',
    '/accessibility',
  ];
  return pages.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.8,
  }));
}
