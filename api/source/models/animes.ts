export interface Animes {
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  synopsis: string;
  description: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string;
  nextRelease?: any;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba: string;
  posterImage: PosterImage;
  coverImage: CoverImage;
  episodeCount: number;
  episodeLength: number;
  totalLength: number;
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
}

export interface Titles {
  en: string;
  en_jp: string;
  en_us: string;
  ja_jp: string;
}

export interface PosterImage {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
  meta: string;
}

export interface CoverImage {
  tiny: string;
  large: string;
  small: string;
  original: string;
  meta: string;
}
