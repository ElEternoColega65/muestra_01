import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VideoGameEntity } from "../entities/videoGameEntity";

export const pcApiSlice = createApi({
  reducerPath: "pc",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => {
    return {
      getPcVideoGames: builder.query<VideoGameEntity[], void>({
        query: () => "/pc/videogames",
      }),
    };
  },
});

export const { useGetPcVideoGamesQuery } = pcApiSlice;