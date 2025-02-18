import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductEntity } from "../entities/productEntity";
import { MainBannerEntity } from "../entities/mainBannerEntity";

export const homeApiSlice = createApi({
  reducerPath: "home",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => {
    return {
      getNewsVideoGames: builder.query<ProductEntity[], void>({
        query: () => "/news/videogames",
      }),
      getOffersVideoGames: builder.query<ProductEntity[], void>({
        query: () => "/offerts/videogames",
      }),
      getHomeMainBanner: builder.query<MainBannerEntity[], void>({
        query: () => "/home/mainbanner",
      }),
      getHomeGalery: builder.query<{ imageUrl: string, href: string }[], void>({
        query: () => "/home/galery",
      }),
    };
  },
});

export const {
  useGetHomeMainBannerQuery,
  useGetNewsVideoGamesQuery,
  useGetOffersVideoGamesQuery,
  useGetHomeGaleryQuery
} = homeApiSlice;