export enum MovieTypeEnum {
  movie = 'фильм',
  cartoon = 'мультфильм',
  anime = 'аниме',
  'tv-series' = 'сериал',
  'animated-series' = 'Анимационный сериал',
  'tv-show' = 'ТВ-шоу',
}

export type MovieType = 'movie' | 'cartoon' | 'anime' | 'tv-series' | 'animated-series' | 'tv-show';

export type DataType<T> = {
  limit: number;
  page: number;
  pages: number;
  total: number;
  docs: T[];
};

export interface MovieDto {
  id: number;
  externalId: ExternalId;
  name?: string;
  alternativeName?: string;
  enName?: string;
  names: Name[];
  type: MovieType;
  typeNumber: number;
  year?: number;
  description?: string;
  shortDescription?: string;
  slogan?: string;
  status?: string;
  rating: Rating;
  votes?: Votes;
  movieLength?: number;
  ratingMpaa?: string;
  ageRating?: number;
  logo?: Logo;
  poster?: Poster;
  backdrop?: Backdrop;
  videos?: Videos;
  genres?: Genre[];
  countries?: Country[];
  persons?: Person[];
  reviewInfo?: ReviewInfo;
  seasonsInfo?: SeasonsInfo[];
  budget?: Budget;
  fees?: Fees;
  premiere?: Premiere;
  similarMovies?: SimilarMovy[];
  sequelsAndPrequels?: SequelsAndPrequel[];
  watchability?: Watchability;
  releaseYears?: ReleaseYear[];
  top10?: number;
  top250?: number;
  ticketsOnSale?: boolean;
  totalSeriesLength?: number;
  seriesLength?: number;
  isSeries: boolean;
  audience?: Audience[];
  facts: Fact[];
  imagesInfo: ImagesInfo;
  productionCompanies: ProductionCompany[];
}

export interface ExternalId {
  kpHD: string;
  imdb: string;
  tmdb: number;
}

export interface Name {
  name: string;
  language: string;
  type: string;
}

export interface Rating {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Votes {
  kp: string;
  imdb: string;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Logo {
  url: string;
}

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Backdrop {
  url: string;
  previewUrl: string;
}

export interface Videos {
  trailers: Trailer[];
  teasers: Teaser[];
}

export interface Trailer {
  url: string;
  name: string;
  site: string;
  type: string;
  size: number;
}

export interface Teaser {
  url: string;
  name: string;
  site: string;
  type: string;
  size: number;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface Person {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
}

export interface ReviewInfo {
  count: number;
  positiveCount: number;
  percentage: string;
}

export interface SeasonsInfo {
  number: number;
  episodesCount: number;
}

export interface Budget {
  value: number;
  currency: string;
}

export interface Fees {
  world: World;
  russia: Russia;
  usa: Usa;
}

export interface World {
  value: number;
  currency: string;
}

export interface Russia {
  value: number;
  currency: string;
}

export interface Usa {
  value: number;
  currency: string;
}

export interface Premiere {
  country: string;
  world: string;
  russia: string;
  digital: string;
  cinema: string;
  bluray: string;
  dvd: string;
}

export interface SimilarMovy {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: Poster2;
}

export interface Poster2 {
  url: string;
  previewUrl: string;
}

export interface SequelsAndPrequel {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: Poster3;
}

export interface Poster3 {
  url: string;
  previewUrl: string;
}

export interface Watchability {
  items: Item[];
}

export interface Item {
  name: string;
  logo: Logo2;
  url: string;
}

export interface Logo2 {
  url: string;
}

export interface ReleaseYear {
  start: number;
  end: number;
}

export interface Audience {
  count: number;
  country: string;
}

export interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface ImagesInfo {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

export interface ProductionCompany {
  name: string;
  url: string;
  previewUrl: string;
}
