import { universities } from '../lib/universities';

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://realcgpatopercentage.com';

  // Core static pages
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic university pages
  const universityRoutes = Object.keys(universities).map((key) => ({
    url: `${baseUrl}/${key}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...universityRoutes];
}
