import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse, IQueryParams } from "../types";

export const adminApi = createApi({
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions", "Geography"],
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
    getTransactions: builder.query<APIResponse, IQueryParams>({
      query: ({ page, pageSize, sort, search }) => ({
        url: "/client/transactions",
        method: "GET",
        params: {
          page,
          pageSize,
          sort,
          search,
        },
      }),
      providesTags: ["Customers"],
    }),
    getGeography: builder.query<APIResponse, any>({
      query: () => `/client/geography`,
      providesTags: ["Geography"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
} = adminApi;
