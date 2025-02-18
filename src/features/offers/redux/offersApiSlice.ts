import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VideoGameEntity } from "../entities/videoGameEntity";

export const offersApiSlice = createApi({
  reducerPath: "offers",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => {
    return {
      getOffersVideoGames: builder.query<VideoGameEntity[], void>({
        query: () => "/offers/videogames",
      }),
    };
  },
});

export const { useGetOffersVideoGamesQuery } = offersApiSlice;