import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductEntity } from "../entities/productEntity";

export const productDetailsApiSlice = createApi({
  reducerPath: "productDetails",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => {
    return {
      getProductById: builder.query<ProductEntity, { productId: string; }>({
        query: ({ productId }) => `/products/${productId}`,
      }),

    };
  },
});

export const {
  useGetProductByIdQuery
} = productDetailsApiSlice;