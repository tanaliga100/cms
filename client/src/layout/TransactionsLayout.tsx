import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Hero from "../components/shared/Hero";
import Search from "../components/shared/Search";
import { FlexRowWrapper, LoadingWrapper } from "../components/wrapper/Wrapper";
import { useGetTransactionsQuery } from "../state/api";

const TransactionsLayout = () => {
  // get the search Value

  // get the params value
  const [page, setPage] = useState<number | any>(0);
  const [pageSize, setPageSize] = useState<number | any>(20);
  const [sort, setSort] = useState<string | any>({});
  const [search, setSearch] = useState<string | any>("");

  // call the api
  const data = useGetTransactionsQuery(
    {
      page,
      pageSize,
      sort: JSON.stringify(sort),
      search,
    },
    undefined
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  return (
    <Box>
      <FlexRowWrapper flexGrow={1} sx={{ justifyContent: "left", gap: "3rem" }}>
        <Hero
          title="TRANSACTIONS"
          subtitle="List of all the Transactions"
          isLoading={data ? data.isLoading : false}
          counts={data?.data?.counts}
        />
        <Search
          label="Search Transactions"
          value={search}
          getValue={changeHandler}
        />
      </FlexRowWrapper>
      <Divider light />

      {/* ENTIRETY OF THE PAGE  */}
      {data.isLoading ? (
        <LoadingWrapper isLoading={data.isLoading} />
      ) : (
        <Outlet context={data} />
      )}
    </Box>
  );
};

export default TransactionsLayout;
