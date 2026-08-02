import { DEFAULT_LOCALE, LOCALES, type Locale, type PageId } from '@majiphaneer/data';

// English slugs on every locale (per Maji's request); the default locale
// lives unprefixed at the domain root, others under /en /fr /de.
export const PAGE_SLUGS: Record<PageId, string> = {
  home: '',
  about: 'about',
  book: 'contravia',
  podcast: 'podcast',
  conferences: 'conferences',
  gallery: 'gallery',
  contact: 'contact',
};

export const PAGE_IDS = Object.keys(PAGE_SLUGS) as PageId[];

export function pagePath(locale: Locale, page: PageId): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  const slug = PAGE_SLUGS[page];
  const path = slug ? `${prefix}/${slug}` : prefix;
  return path === '' ? '/' : path;
}

export const TRANSLATED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

// getStaticPaths helper for the /[lang]/ routes.
export function localeStaticPaths() {
  return TRANSLATED_LOCALES.map((lang) => ({ params: { lang } }));
}
