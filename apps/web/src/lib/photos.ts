import { PHOTOS, type Photo } from '@majiphaneer/data';
import type { ImageMetadata } from 'astro';

// Build-time only (Astro frontmatter). Resolves the data package's photo
// records to imported image assets so <Image /> can optimize them.
const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', {
  eager: true,
});

export interface ResolvedPhoto extends Photo {
  image: ImageMetadata;
}

export const RESOLVED_PHOTOS: ResolvedPhoto[] = PHOTOS.map((photo) => {
  const mod = modules[`../assets/photos/${photo.file}`];
  if (!mod) {
    throw new Error(`Missing photo asset: ${photo.file}`);
  }
  return { ...photo, image: mod.default };
});

export function photoById(id: string): ResolvedPhoto {
  const photo = RESOLVED_PHOTOS.find((p) => p.id === id);
  if (!photo) {
    throw new Error(`Unknown photo id: ${id}`);
  }
  return photo;
}
