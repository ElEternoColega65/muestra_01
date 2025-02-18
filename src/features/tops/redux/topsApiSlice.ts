import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VideoGameEntity } from "../entities/videoGameEntity";

export const topsApiSlice = createApi({
  reducerPath: "tops",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => {
    return {
      getTopsVideoGames: builder.query<VideoGameEntity[], void>({
        query: () => "/tops/videogames",
      }),
    };
  },
});

export const { useGetTopsVideoGamesQuery } = topsApiSlice;