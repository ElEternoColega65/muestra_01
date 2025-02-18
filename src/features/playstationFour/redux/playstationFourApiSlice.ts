import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VideoGameEntity } from "../entities/videoGameEntity";

export const playstationFourApiSlice = createApi({
  reducerPath: "playstationFour",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => {
    return {
      getPlaystationFourVideoGames: builder.query<VideoGameEntity[], void>({
        query: () => "/playstation/4/videogames",
      }),
    };
  },
});

export const { useGetPlaystationFourVideoGamesQuery } = playstationFourApiSlice;