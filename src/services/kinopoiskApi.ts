import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, API_URL} from '../constants/api';

import {DataType, MovieDto} from '@/types/kinopoisk';

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
    getFilmById: builder.query<DataType<MovieDto>, number>({
      query: (id) => `/v1.3/movie?field=id&search=${id}`,
    }),
    getNewFilms: builder.query<DataType<MovieDto>, number>({
      query: (limit) =>
        `/v1.3/movie?field=rating.kp&search=1-10&field=year&search=2022-2023&limit=${limit}&sortField=year&sortType=-1`,
    }),
  }),
});

export const {useGetFilmByIdQuery, useGetNewFilmsQuery} = kinopoiskApi;
