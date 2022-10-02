export enum MovieKindEnum {
  movie = 'фильм',
  cartoon = 'мультфильм',
}

type MovieKind = 'movie' | 'cartoon';

export type DataType<T> = {
  limit: number;
  page: number;
  pages: number;
  total: number;
  docs: T[];
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
