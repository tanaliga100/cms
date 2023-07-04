import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse, IQueryParams } from "../types";

export const userApi = createApi({
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions"],
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
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
} = userApi;
