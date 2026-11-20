export type PageRoute = 'home' | 'about' | 'services' | 'work' | 'contact';

export const ROUTE_HASHES: Record<PageRoute, string> = {
  home: '#/',
  about: '#/about',
  services: '#/services',
  work: '#/work',
  contact: '#/contact',
};

export function parseRouteFromHash(hash: string): PageRoute {
  const cleaned = hash.replace(/^#\/?/, '').split('?')[0].toLowerCase().trim();
  if (cleaned === 'about') return 'about';
  if (cleaned === 'services') return 'services';
  if (cleaned === 'work' || cleaned === 'portfolio') return 'work';
  if (cleaned === 'contact' || cleaned === 'inquiry') return 'contact';
  return 'home';
}
