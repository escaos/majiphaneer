import type { PageId, UiKey } from '@majiphaneer/data';

// Single source for section → nav-label mapping (Header menu + Footer columns).
export const NAV_KEYS: Record<PageId, UiKey> = {
  home: 'nav.home',
  about: 'nav.about',
  contravia: 'nav.contravia',
  books: 'nav.books',
  music: 'nav.music',
  gallery: 'nav.gallery',
  contact: 'nav.contact',
};
