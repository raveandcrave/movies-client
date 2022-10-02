import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, API_URL} from '../constants/api';

import {DataType, MovieType} from '../types/kinopoisk';

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (builder) => ({
    getFilmById: builder.query({
      query: (id) => `/movie?field=id&search=${id}&token=${API_URL}`,
    }),
    getNewFilms: builder.query<DataType<MovieType>, number>({
      query: (limit) =>
        `/movie?field=rating.kp&search=1-10&field=year&search=2021-2022&limit=${limit}&sortField=year&sortType=-1&token=${API_URL}`,
    }),
  }),
});

export const {useGetFilmByIdQuery, useGetNewFilmsQuery} = kinopoiskApi;
