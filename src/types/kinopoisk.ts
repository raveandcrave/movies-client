export enum MovieKindEnum {
  movie = 'фильм',
  cartoon = 'мультфильм',
  anime = 'аниме',
  'tv-series' = 'сериал',
  'mini-series' = 'мини-сериал',
}

type MovieKind = 'movie' | 'cartoon' | 'anime' | 'tv-series' | 'mini-series';

export type DataType<T> = {
  limit: number;
  page: number;
  pages: number;
  total: number;
  docs: T[];
};

type BudgetType = {
  value: string;
  currency: string;
  _id: string;
};

export type MovieType = {
  id: number;
  name: string;
  description: string;
  year: number;
  rating: {await: number; filmCritics: number; imdb: number; kp: number; russianFilmCritics: number; _id: string};
  poster: {
    _id: string;
    previewUrl: string;
    url: string;
  };
  alternativeName?: string;
  enName?: string;
  externalId: {
    imdb?: string;
    _id: string;
  };
  logo: {
    url?: string;
    _id: string;
  };
  movieLength?: number;
  names: Array<{name: string; _id: string}>;
  shortDescription?: string;
  type: MovieKind;
  votes: {
    await: number;
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
    _id: string;
  };
};

export type SingleMovieType = {
  budget: BudgetType;
  genres: Array<{
    name: string;
  }>;
  premiere: {
    russia?: string;
    world: string;
  };
  fees: {
    russia: BudgetType;
    use: BudgetType;
    world: BudgetType;
    _id: string;
  };
  slogan: string;
} & MovieType;
