// NOTE: this barrel is for BUILD-TIME consumers (Astro frontmatter, tests).
// Client islands must never import runtime values from here — a single value
// import drags the whole dataset into the client bundle.
export { CONTENT, getContent } from './content/index.ts';
export { PHOTOS, type Photo } from './content/photos.ts';
export type {
  Episode,
  MediaAppearance,
  PageId,
  PageMeta,
  Review,
  SiteContent,
  SocialLink,
} from './content/types.ts';
export { t, UI, type UiKey } from './i18n/ui.ts';
export { DEFAULT_LOCALE, isLocale, LOCALE_NAMES, LOCALES, type Locale } from './locales.ts';
export { PRODUCTION_ORIGIN, SITE_NAME } from './site.ts';
