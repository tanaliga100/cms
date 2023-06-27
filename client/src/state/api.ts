import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: builder.query({
      query: () => `/client/products`,
      providesTags: ["Products"],
    }),
    getCustomers: builder.query({
      query: () => `/client/customers`,
      providesTags: ["Customers"],
    }),
  }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } =
  userApi;
