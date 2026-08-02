import type { Locale } from '../locales.ts';
import { de } from './de.ts';
import { en } from './en.ts';
import { es } from './es.ts';
import { fr } from './fr.ts';
import type { SiteContent } from './types.ts';

export const CONTENT: Record<Locale, SiteContent> = { es, en, fr, de };

export function getContent(locale: Locale): SiteContent {
  const content = CONTENT[locale];
  if (!content) {
    throw new Error(`Missing content for locale: ${locale}`);
  }
  return content;
}
