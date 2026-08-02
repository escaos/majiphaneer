import type { Locale } from '../locales.ts';

export interface Photo {
  id: string;
  /** Basename under apps/web/src/assets/photos/. */
  file: string;
  alt: Record<Locale, string>;
}

// Portrait session photos by Lauren King Photography, provided by Maji.
export const PHOTOS: Photo[] = [
  {
    id: 'beige-smile',
    file: 'LK_01365.jpg',
    alt: {
      es: 'Maji Phaneer sonriendo, con chaqueta blanca, sobre un fondo beige cálido',
      en: 'Maji Phaneer smiling in a white jacket against a warm beige background',
      fr: 'Maji Phaneer souriante, en veste blanche, sur un fond beige chaleureux',
      de: 'Maji Phaneer lächelnd in weißer Jacke vor einem warmen beigen Hintergrund',
    },
  },
  {
    id: 'stool-seated',
    file: 'LK_01694.jpg',
    alt: {
      es: 'Maji Phaneer sentada en un taburete de madera, con traje azul claro',
      en: 'Maji Phaneer seated on a wooden stool in a light blue suit',
      fr: 'Maji Phaneer assise sur un tabouret en bois, en tailleur bleu clair',
      de: 'Maji Phaneer auf einem Holzhocker sitzend, im hellblauen Anzug',
    },
  },
  {
    id: 'suit-seated',
    file: 'LK_01729.jpg',
    alt: {
      es: 'Maji Phaneer sentada, con traje azul claro, mirando a la cámara',
      en: 'Maji Phaneer seated in a light blue suit, looking at the camera',
      fr: 'Maji Phaneer assise, en tailleur bleu clair, regardant la caméra',
      de: 'Maji Phaneer sitzend im hellblauen Anzug, mit Blick in die Kamera',
    },
  },
  {
    id: 'floor-thoughtful',
    file: 'LK_01573.jpg',
    alt: {
      es: 'Maji Phaneer sentada en el suelo, en actitud reflexiva',
      en: 'Maji Phaneer seated on the floor in a thoughtful pose',
      fr: 'Maji Phaneer assise au sol, dans une attitude pensive',
      de: 'Maji Phaneer auf dem Boden sitzend, in nachdenklicher Pose',
    },
  },
  {
    id: 'profile',
    file: 'LK_01734.jpg',
    alt: {
      es: 'Retrato de perfil de Maji Phaneer',
      en: 'Profile portrait of Maji Phaneer',
      fr: 'Portrait de profil de Maji Phaneer',
      de: 'Profilporträt von Maji Phaneer',
    },
  },
  {
    id: 'denim-laughing',
    file: 'LK_01499.jpg',
    alt: {
      es: 'Maji Phaneer sonriendo, con chaqueta de mezclilla adornada con perlas',
      en: 'Maji Phaneer smiling, wearing a pearl-embellished denim jacket',
      fr: 'Maji Phaneer souriante, en veste en jean ornée de perles',
      de: 'Maji Phaneer lächelnd, in einer mit Perlen verzierten Jeansjacke',
    },
  },
  {
    id: 'denim-table',
    file: 'LK_01519.jpg',
    alt: {
      es: 'Maji Phaneer sentada junto a una mesa de madera, sonriendo',
      en: 'Maji Phaneer seated by a wooden table, smiling',
      fr: 'Maji Phaneer assise près d’une table en bois, souriante',
      de: 'Maji Phaneer an einem Holztisch sitzend, lächelnd',
    },
  },
  {
    id: 'suit-standing',
    file: 'LK_01602.jpg',
    alt: {
      es: 'Maji Phaneer de pie, con traje azul claro',
      en: 'Maji Phaneer standing in a light blue suit',
      fr: 'Maji Phaneer debout, en tailleur bleu clair',
      de: 'Maji Phaneer stehend im hellblauen Anzug',
    },
  },
];
