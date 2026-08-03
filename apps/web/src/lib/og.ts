import { getImage } from 'astro:assets';
import type { Locale, PageId } from '@majiphaneer/data';
import { photoById } from './photos.ts';

// Each page shares with its own photo; crops are generated at build time to
// the 1200×630 Open Graph size using sharp's attention-based smart crop so
// the face stays in frame.
const OG_PHOTO: Record<PageId, string> = {
  home: 'beige-smile',
  about: 'floor-thoughtful',
  contravia: 'denim-laughing',
  books: 'black-ruffles',
  music: 'denim-table',
  gallery: 'suit-standing',
  contact: 'stool-seated',
};

export interface OgImage {
  path: string;
  alt: Record<Locale, string>;
}

export async function ogImageFor(page: PageId): Promise<OgImage> {
  const photo = photoById(OG_PHOTO[page]);
  const image = await getImage({
    src: photo.image,
    width: 1200,
    height: 630,
    fit: 'cover',
    position: 'attention',
    format: 'jpg',
  });
  return { path: image.src, alt: photo.alt };
}
