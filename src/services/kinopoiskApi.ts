import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, API_URL} from '../constants/api';

import {DataType, MovieDto} from '@/types/kinopoisk';

interface SearchFilmData {
  limit?: number;
  page?: number;
  query: string;
}

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, api) => {
      headers.set('X-API-KEY', API_KEY!);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilmById: builder.query<MovieDto, number>({
      query: (id) => `/v1.3/movie/${id}`,
    }),
    getNewFilms: builder.query<MovieDto[], number>({
      query: (limit) =>
        `/v1.3/movie?field=rating.kp&search=1-10&field=year&search=2022-2023&limit=${limit}&sortField=year&sortType=-1`,
      transformResponse: (movies: DataType<MovieDto>, meta, arg) => movies.docs,
    }),
    getSearchFilms: builder.query<DataType<MovieDto>, SearchFilmData>({
      query: ({limit = 10, page = 1, query}) =>
        `/v1.3/movie?${query}&limit=${limit}&page=${page}&sortField=year&sortType=-1`,
    }),
  }),
});

export const {useGetFilmByIdQuery, useGetNewFilmsQuery, useLazyGetSearchFilmsQuery} = kinopoiskApi;
