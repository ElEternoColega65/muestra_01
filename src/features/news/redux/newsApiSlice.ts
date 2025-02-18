import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VideoGameEntity } from "../entities/videoGameEntity";

export const newsApiSlice = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => {
    return {
      getNewsVideoGames: builder.query<VideoGameEntity[], void>({
        query: () => "/news/videogames",
      }),
    };
  },
});

export const { useGetNewsVideoGamesQuery } = newsApiSlice;