import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VideoGameEntity } from "../entities/videoGameEntity";

export const nintendoSwitchApiSlice = createApi({
  reducerPath: "nintendoswitch",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => {
    return {
      getNintendoSwitchVideoGames: builder.query<VideoGameEntity[], void>({
        query: () => "/nitendo/switch/videogames",
      }),
    };
  },
});

export const { useGetNintendoSwitchVideoGamesQuery } = nintendoSwitchApiSlice;