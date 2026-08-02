import { DEFAULT_LOCALE, LOCALES } from '@majiphaneer/data';
import { describe, expect, it } from 'vitest';
import { localeStaticPaths, PAGE_IDS, pagePath } from './paths.ts';

describe('pagePath', () => {
  it('default locale lives unprefixed at the root', () => {
    expect(pagePath('es', 'home')).toBe('/');
    expect(pagePath('es', 'book')).toBe('/contravia');
    expect(pagePath('es', 'about')).toBe('/about');
  });

  it('other locales are prefixed with the same English slugs', () => {
    expect(pagePath('en', 'home')).toBe('/en');
    expect(pagePath('fr', 'book')).toBe('/fr/contravia');
    expect(pagePath('de', 'conferences')).toBe('/de/conferences');
  });

  it('never emits a trailing slash (except the bare root)', () => {
    for (const locale of LOCALES) {
      for (const page of PAGE_IDS) {
        const path = pagePath(locale, page);
        if (path !== '/') {
          expect(path.endsWith('/'), `${locale}/${page} -> ${path}`).toBe(false);
        }
      }
    }
  });

  it('all paths are unique across locales and pages', () => {
    const all = LOCALES.flatMap((locale) => PAGE_IDS.map((page) => pagePath(locale, page)));
    expect(new Set(all).size).toBe(all.length);
  });
});

describe('localeStaticPaths', () => {
  it('covers every locale except the default exactly once', () => {
    const langs = localeStaticPaths().map((p) => p.params.lang);
    expect(langs).not.toContain(DEFAULT_LOCALE);
    expect(new Set(langs).size).toBe(LOCALES.length - 1);
  });
});
