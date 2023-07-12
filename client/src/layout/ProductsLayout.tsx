import ClassIcon from "@mui/icons-material/Class";
import { Box, Divider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Hero from "../components/shared/Hero";
import Search from "../components/shared/Search";
import { FlexRowWrapper, LoadingWrapper } from "../components/wrapper/Wrapper";
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
          icon={<ClassIcon />}
        />
        <Search label="Search Product" />
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

export default ProductsLayout;
