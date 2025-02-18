import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VideoGameEntity } from "../entities/videoGameEntity";

export const xboxSeriesXApiSlice = createApi({
  reducerPath: "xboxseriesx",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => {
    return {
      getXboxSeriesXVideoGames: builder.query<VideoGameEntity[], void>({
        query: () => "/xbox/seriesx/videogames",
      }),
    };
  },
});

export const { useGetXboxSeriesXVideoGamesQuery } = xboxSeriesXApiSlice;