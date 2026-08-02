// Fields marked PENDING may be empty strings / empty arrays until the real
// value is provided by Maji; the UI hides the corresponding element while
// empty. Never invent a value to fill one of these.

export interface MediaAppearance {
  id: string;
  outlet: string;
  title: string;
  url: string;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
}

export interface Episode {
  id: string;
  title: string;
  url: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export type PageId = 'home' | 'about' | 'book' | 'podcast' | 'conferences' | 'gallery' | 'contact';

export interface SiteContent {
  meta: Record<PageId, PageMeta>;
  home: {
    heroTitle: string;
    heroIntro: string[];
    welcomeTitle: string;
    welcome: string[];
    /** PENDING: 1–2 minute welcome video URL. */
    welcomeVideoUrl: string;
  };
  about: {
    title: string;
    intro: string[];
    storyTitle: string;
    story: string[];
    mediaTitle: string;
    /** PENDING: interviews, press, TV appearances. */
    media: MediaAppearance[];
  };
  book: {
    title: string;
    tagline: string;
    synopsis: string[];
    /** PENDING: Amazon purchase link. */
    amazonUrl: string;
    reviewsTitle: string;
    /** PENDING: reader reviews. */
    reviews: Review[];
  };
  podcast: {
    title: string;
    tagline: string;
    description: string[];
    /** PENDING: platform links. */
    spotifyUrl: string;
    youtubeUrl: string;
    appleUrl: string;
    episodesTitle: string;
    /** PENDING: recent episodes. */
    episodes: Episode[];
  };
  conferences: {
    title: string;
    tagline: string;
    description: string[];
    topics: string[];
  };
  gallery: {
    title: string;
    intro: string;
  };
  contact: {
    title: string;
    tagline: string;
    description: string[];
    /** PENDING: public contact email. */
    email: string;
    /** PENDING: social profiles. */
    socials: SocialLink[];
  };
}
