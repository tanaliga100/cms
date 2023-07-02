import { Box, Divider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Hero from "../components/shared/Hero";
import Search from "../components/shared/Search";
import { FlexRowWrapper } from "../components/wrapper/Wrapper";
import { useGetProductsQuery } from "../state/api";

const ProductsLayout = () => {
  const data = useGetProductsQuery<undefined | any>(undefined);

  return (
    <Box>
      <FlexRowWrapper flexGrow={1} sx={{ justifyContent: "left", gap: "3rem" }}>
        <Hero
          title="PRODUCTS"
          subtitle="List of all the Products"
          isLoading={data ? data.isLoading : {}}
          counts={data?.data?.counts}
        />
        <Search label="Search Product" />
      </FlexRowWrapper>
      <Divider light />
      <Outlet context={data} />
    </Box>
  );
};

export default ProductsLayout;
