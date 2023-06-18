import { Backdrop, Box, CircularProgress, useMediaQuery } from "@mui/material";
import React from "react";
import Hero from "../components/shared/Hero";
import { LoadingWrapper } from "../components/wrapper/Wrapper";
import { useGetProductsQuery } from "../state/api";

const ProductsPage = () => {
  // CALL THE API
  const { currentData, data, isLoading, isSuccess, isError, error } =
    useGetProductsQuery(undefined);

  const isNonMobile = useMediaQuery("(width > 600px)");

  console.log("data", data);

  // CHECK THE STATUS
  // MAP THE VALUES

  return (
    <Box>
      <Hero
        title="PRODUCTS"
        subtitle="List of all the Products"
        isLoading={isLoading}
      />
      {/* // HANDLE LOADING... */}
      {currentData || !isLoading ? (
        // DISPLAY PRODUCTS HERE...

        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(3, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": {
              gridColumn: isNonMobile ? undefined : "span 4",
            },
          }}
        >
          {data.products.map((product: any) => {
            return null;
            // return <Product key={product} {...product} />;
          })}
        </Box>
      ) : (
        <LoadingWrapper isLoading={isLoading} />
      )}
    </Box>
  );
};

export default ProductsPage;

interface IProduct {
  $__: any;
  _doc: any;
  stat: any[];
}
const Product: React.FC<IProduct> = (props) => {
  // console.log("EACH", props);

  return null;
};
