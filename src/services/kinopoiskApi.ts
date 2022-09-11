import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, API_URL} from '../constants/api';

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (builder) => ({
    getFilmById: builder.query({
      query: (id) => `/movie?field=id&search=${id}&token=${API_URL}`,
    }),
  }),
});

export const {useGetFilmByIdQuery} = kinopoiskApi;
