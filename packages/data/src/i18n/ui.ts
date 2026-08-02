import type { Locale } from '../locales.ts';

// Spanish is the source-of-truth dictionary; its keys define the UiKey type,
// so a key missing from any other locale is a compile-time error, and t()
// throws at build time as a second line of defense (no silent fallback).
const es = {
  'nav.home': 'Inicio',
  'nav.contravia': 'Contravía',
  'nav.books': 'Libros',
  'nav.music': 'Música',
  'nav.gallery': 'Galería',
  'nav.contact': 'Contacto',
  'music.soon': 'Próximamente.',
  'cta.story': 'Conoce mi historia',
  'cta.book': 'Descubre el libro',
  'cta.podcast': 'Escucha el podcast',
  'cta.invite': 'Invítame a tu evento',
  'theme.toggle': 'Cambiar tema',
  'lang.label': 'Idioma',
  'skip.content': 'Saltar al contenido',
  'footer.tagline': 'Vivir con convicción.',
  'footer.rights': 'Todos los derechos reservados.',
  'book.buy': 'Comprar en Amazon',
  'media.view': 'Ver entrevista',
  'form.name': 'Nombre',
  'form.message': 'Mensaje',
  'form.send': 'Enviar mensaje',
  'podcast.spotify': 'Escuchar en Spotify',
  'podcast.youtube': 'Ver en YouTube',
  'podcast.apple': 'Escuchar en Apple Podcasts',
  'notFound.title': 'Página no encontrada',
  'notFound.body': 'La página que buscas no existe o cambió de dirección.',
  'notFound.back': 'Volver al inicio',
} as const;

export type UiKey = keyof typeof es;

const en: Record<UiKey, string> = {
  'nav.home': 'Home',
  'nav.contravia': 'Contravía',
  'nav.books': 'Books',
  'nav.music': 'Music',
  'nav.gallery': 'Gallery',
  'nav.contact': 'Contact',
  'music.soon': 'Coming soon.',
  'cta.story': 'Discover my story',
  'cta.book': 'Discover the book',
  'cta.podcast': 'Listen to the podcast',
  'cta.invite': 'Invite me to your event',
  'theme.toggle': 'Toggle theme',
  'lang.label': 'Language',
  'skip.content': 'Skip to content',
  'footer.tagline': 'Living with conviction.',
  'footer.rights': 'All rights reserved.',
  'book.buy': 'Buy on Amazon',
  'media.view': 'Watch the interview',
  'form.name': 'Name',
  'form.message': 'Message',
  'form.send': 'Send message',
  'podcast.spotify': 'Listen on Spotify',
  'podcast.youtube': 'Watch on YouTube',
  'podcast.apple': 'Listen on Apple Podcasts',
  'notFound.title': 'Page not found',
  'notFound.body': 'The page you are looking for does not exist or has moved.',
  'notFound.back': 'Back to home',
};

const fr: Record<UiKey, string> = {
  'nav.home': 'Accueil',
  'nav.contravia': 'Contravía',
  'nav.books': 'Livres',
  'nav.music': 'Musique',
  'nav.gallery': 'Galerie',
  'nav.contact': 'Contact',
  'music.soon': 'Bientôt disponible.',
  'cta.story': 'Découvrez mon histoire',
  'cta.book': 'Découvrez le livre',
  'cta.podcast': 'Écoutez le podcast',
  'cta.invite': 'Invitez-moi à votre événement',
  'theme.toggle': 'Changer de thème',
  'lang.label': 'Langue',
  'skip.content': 'Aller au contenu',
  'footer.tagline': 'Vivre avec conviction.',
  'footer.rights': 'Tous droits réservés.',
  'book.buy': 'Acheter sur Amazon',
  'media.view': "Voir l'interview",
  'form.name': 'Nom',
  'form.message': 'Message',
  'form.send': 'Envoyer le message',
  'podcast.spotify': 'Écouter sur Spotify',
  'podcast.youtube': 'Regarder sur YouTube',
  'podcast.apple': 'Écouter sur Apple Podcasts',
  'notFound.title': 'Page introuvable',
  'notFound.body': "La page que vous cherchez n'existe pas ou a été déplacée.",
  'notFound.back': "Retour à l'accueil",
};

const de: Record<UiKey, string> = {
  'nav.home': 'Startseite',
  'nav.contravia': 'Contravía',
  'nav.books': 'Bücher',
  'nav.music': 'Musik',
  'nav.gallery': 'Galerie',
  'nav.contact': 'Kontakt',
  'music.soon': 'Demnächst.',
  'cta.story': 'Meine Geschichte entdecken',
  'cta.book': 'Das Buch entdecken',
  'cta.podcast': 'Den Podcast anhören',
  'cta.invite': 'Lade mich zu deinem Event ein',
  'theme.toggle': 'Farbschema wechseln',
  'lang.label': 'Sprache',
  'skip.content': 'Zum Inhalt springen',
  'footer.tagline': 'Mit Überzeugung leben.',
  'footer.rights': 'Alle Rechte vorbehalten.',
  'book.buy': 'Bei Amazon kaufen',
  'media.view': 'Interview ansehen',
  'form.name': 'Name',
  'form.message': 'Nachricht',
  'form.send': 'Nachricht senden',
  'podcast.spotify': 'Auf Spotify anhören',
  'podcast.youtube': 'Auf YouTube ansehen',
  'podcast.apple': 'In Apple Podcasts anhören',
  'notFound.title': 'Seite nicht gefunden',
  'notFound.body': 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
  'notFound.back': 'Zur Startseite',
};

export const UI: Record<Locale, Record<UiKey, string>> = { es, en, fr, de };

export function t(locale: Locale, key: UiKey): string {
  const value = UI[locale]?.[key];
  if (value === undefined || value === '') {
    throw new Error(`Missing translation: ${locale}.${key}`);
  }
  return value;
}
