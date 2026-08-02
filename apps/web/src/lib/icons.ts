// Original hand-authored inline SVG stroke paths on a 24×24 grid.
// Rendered via <Icon /> with stroke="currentColor"; never an icon font.
export const ICONS = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>',
  arrowRight: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7.5 9 6 9-6"/>',
  book: '<path d="M5 4a2 2 0 0 1 2-2h12v18H7a2 2 0 0 0-2 2Z"/><path d="M5 20V4m14 12H7"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  camera:
    '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="m8.5 7 1.5-3h4l1.5 3"/><circle cx="12" cy="13" r="3.5"/>',
  play: '<path d="M8 5.5v13l11-6.5Z"/>',
  headphones:
    '<path d="M4 15a8 8 0 0 1 16 0"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  users:
    '<circle cx="9" cy="8" r="3.5"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 20H21a5 5 0 0 0-4-4.9"/>',
} as const;

export type IconName = keyof typeof ICONS;
