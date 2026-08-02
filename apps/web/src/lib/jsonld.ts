import { getContent, type Locale, SITE_NAME } from '@majiphaneer/data';

// Build-time JSON-LD builders. Only emit properties we actually know; never
// pad with invented ISBNs, dates, or profile URLs.

export function webSiteJsonLd(origin: string, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${origin}/`,
    inLanguage: locale,
  };
}

export function personJsonLd(origin: string, locale: Locale) {
  const content = getContent(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: `${origin}/`,
    description: content.meta.home.description,
    knowsLanguage: ['es', 'en', 'fr', 'de'],
  };
}

export function bookJsonLd(origin: string, locale: Locale) {
  const content = getContent(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: content.book.title,
    description: content.book.tagline,
    inLanguage: 'es',
    author: { '@type': 'Person', name: SITE_NAME, url: `${origin}/` },
  };
}

export function podcastJsonLd(_origin: string, locale: Locale) {
  const content = getContent(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    name: content.podcast.title,
    description: content.podcast.tagline,
    inLanguage: 'es',
  };
}
