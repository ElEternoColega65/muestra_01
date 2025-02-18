import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VideoGameEntity } from "../entities/videoGameEntity";

export const playstationFiveApiSlice = createApi({
  reducerPath: "playstationFive",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => {
    return {
      getPlaystationFiveVideoGames: builder.query<VideoGameEntity[], void>({
        query: () => "/playstation/5/videogames",
      }),
    };
  },
});

export const { useGetPlaystationFiveVideoGamesQuery } = playstationFiveApiSlice;