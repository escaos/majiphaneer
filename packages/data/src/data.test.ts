import { describe, expect, it } from 'vitest';
import { CONTENT } from './content/index.ts';
import { PHOTOS } from './content/photos.ts';
import { t, UI, type UiKey } from './i18n/ui.ts';
import { DEFAULT_LOCALE, LOCALES } from './locales.ts';
import { PRODUCTION_ORIGIN } from './site.ts';

describe('site constants', () => {
  it('production origin is https and has no trailing slash', () => {
    expect(PRODUCTION_ORIGIN).toMatch(/^https:\/\//);
    expect(PRODUCTION_ORIGIN.endsWith('/')).toBe(false);
  });

  it('default locale is included in LOCALES', () => {
    expect(LOCALES).toContain(DEFAULT_LOCALE);
  });
});

describe('UI dictionary', () => {
  const esKeys = Object.keys(UI.es).sort();

  it.each(LOCALES)('%s has exactly the same keys as es', (locale) => {
    expect(Object.keys(UI[locale]).sort()).toEqual(esKeys);
  });

  it.each(LOCALES)('%s has no empty values', (locale) => {
    for (const [key, value] of Object.entries(UI[locale])) {
      expect(value, `${locale}.${key}`).not.toBe('');
    }
  });

  it('t() throws on a missing key instead of falling back silently', () => {
    expect(() => t('es', 'nope.missing' as UiKey)).toThrow(/Missing translation/);
  });
});

describe('content parity across locales', () => {
  const source = CONTENT[DEFAULT_LOCALE];

  it.each(LOCALES)('%s content exists', (locale) => {
    expect(CONTENT[locale]).toBeDefined();
  });

  // Translations must mirror the Spanish structure paragraph-for-paragraph, so
  // a paragraph dropped in one language fails the build loudly.
  it.each(LOCALES)('%s mirrors the es structure', (locale) => {
    const c = CONTENT[locale];
    expect(c.home.heroIntro).toHaveLength(source.home.heroIntro.length);
    expect(c.home.welcome).toHaveLength(source.home.welcome.length);
    expect(c.about.intro).toHaveLength(source.about.intro.length);
    expect(c.about.story).toHaveLength(source.about.story.length);
    expect(c.book.synopsis).toHaveLength(source.book.synopsis.length);
    expect(c.podcast.description).toHaveLength(source.podcast.description.length);
    expect(c.conferences.description).toHaveLength(source.conferences.description.length);
    expect(c.conferences.topics).toHaveLength(source.conferences.topics.length);
    expect(c.contact.description).toHaveLength(source.contact.description.length);
    expect(Object.keys(c.meta).sort()).toEqual(Object.keys(source.meta).sort());
  });

  it.each(LOCALES)('%s required copy is non-empty', (locale) => {
    const c = CONTENT[locale];
    const required = [
      c.home.heroTitle,
      c.home.welcomeTitle,
      c.about.title,
      c.about.storyTitle,
      c.book.title,
      c.book.tagline,
      c.podcast.title,
      c.podcast.tagline,
      c.conferences.title,
      c.conferences.tagline,
      c.gallery.title,
      c.gallery.intro,
      c.contact.title,
      c.contact.tagline,
      ...c.home.heroIntro,
      ...c.home.welcome,
      ...c.about.intro,
      ...c.about.story,
      ...c.book.synopsis,
      ...c.podcast.description,
      ...c.conferences.description,
      ...c.contact.description,
      ...Object.values(c.meta).flatMap((m) => [m.title, m.description]),
    ];
    for (const text of required) {
      expect(text.trim().length).toBeGreaterThan(0);
    }
  });

  it.each(LOCALES)('%s meta descriptions stay within SERP length', (locale) => {
    for (const [page, meta] of Object.entries(CONTENT[locale].meta)) {
      expect(meta.description.length, `${locale}.${page}`).toBeLessThanOrEqual(200);
      expect(meta.title.length, `${locale}.${page}`).toBeLessThanOrEqual(70);
    }
  });
});

describe('photos', () => {
  it('has six photos with unique ids and files', () => {
    expect(PHOTOS).toHaveLength(6);
    expect(new Set(PHOTOS.map((p) => p.id)).size).toBe(PHOTOS.length);
    expect(new Set(PHOTOS.map((p) => p.file)).size).toBe(PHOTOS.length);
  });

  it('every photo has non-empty alt text in every locale', () => {
    for (const photo of PHOTOS) {
      for (const locale of LOCALES) {
        expect(photo.alt[locale].trim().length, `${photo.id}.${locale}`).toBeGreaterThan(0);
      }
    }
  });
});

describe('pending fields are honest', () => {
  // These may be empty (content not yet provided) but must exist as the right
  // shape so the UI can hide them; never fabricate a value to fill one.
  it.each(LOCALES)('%s pending URLs are strings', (locale) => {
    const c = CONTENT[locale];
    for (const value of [
      c.home.welcomeVideoUrl,
      c.book.amazonUrl,
      c.podcast.spotifyUrl,
      c.podcast.youtubeUrl,
      c.podcast.appleUrl,
      c.contact.email,
    ]) {
      expect(typeof value).toBe('string');
    }
    expect(Array.isArray(c.about.media)).toBe(true);
    expect(Array.isArray(c.book.reviews)).toBe(true);
    expect(Array.isArray(c.podcast.episodes)).toBe(true);
    expect(Array.isArray(c.contact.socials)).toBe(true);
  });
});
