import { Box } from "@mui/material";
import React from "react";
import Hero from "../components/shared/Hero";
import { LoadingWrapper } from "../components/wrapper/Wrapper";
import { useGetProductsQuery } from "../state/api";

const ProductsPage = () => {
  // CALL THE API
  const { currentData, data, isLoading, isSuccess } =
    useGetProductsQuery(undefined);
  console.log("DATA", currentData);

  // CHECK THE STATUS
  // MAP THE VALUES

  return (
    <Box>
      <Hero title="PRODUCTS" subtitle="List of all the Products" />
      {/* // HANDLE LOADING... */}
      {currentData || !isLoading ? (
        <Box>has Data</Box>
      ) : (
        <LoadingWrapper>Loading... Please wait </LoadingWrapper>
      )}
    </Box>
  );
};

export default ProductsPage;
