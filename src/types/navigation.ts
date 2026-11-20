export type PageRoute = 'home' | 'about' | 'services' | 'work' | 'blog' | 'contact';

export const ROUTE_HASHES: Record<PageRoute, string> = {
  home: '#/',
  about: '#/about',
  services: '#/services',
  work: '#/work',
  blog: '#/blog',
  contact: '#/contact',
};

export function parseRouteFromHash(hash: string): PageRoute {
  const cleaned = hash.replace(/^#\/?/, '').split('?')[0].toLowerCase().trim();
  if (cleaned === 'about') return 'about';
  if (cleaned === 'services') return 'services';
  if (cleaned === 'work' || cleaned === 'portfolio') return 'work';
  if (cleaned === 'blog' || cleaned === 'journal' || cleaned === 'insights') return 'blog';
  if (cleaned === 'contact' || cleaned === 'inquiry') return 'contact';
  return 'home';
}
