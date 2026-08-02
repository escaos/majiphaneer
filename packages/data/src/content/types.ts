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

export type PageId = 'home' | 'about' | 'contravia' | 'books' | 'music' | 'gallery' | 'contact';

export interface SiteContent {
  meta: Record<PageId, PageMeta>;
  // The home page is visual: hero + short welcome + photo sections with short
  // phrases that open the side pages. Long texts live on the side pages.
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
  // Contravía is the podcast page.
  contravia: {
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
  books: {
    title: string;
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
  };
  music: {
    title: string;
    /** PENDING: Maji's description of her music project. */
    intro: string[];
    /** PENDING: streaming / video links. */
    links: SocialLink[];
  };
  gallery: {
    title: string;
    intro: string;
  };
  // Contact also carries the "Invitaciones" section (conferences, preaching,
  // podcasts, interviews, events, book presentations).
  contact: {
    title: string;
    tagline: string;
    description: string[];
    /** PENDING: public contact email. */
    email: string;
    /** PENDING: social profiles. */
    socials: SocialLink[];
    invitationsTitle: string;
    invitationsTagline: string;
    invitationsDescription: string[];
    topics: string[];
  };
}
