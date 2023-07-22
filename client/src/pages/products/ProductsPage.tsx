import { Box, useMediaQuery } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { LoadingWrapper } from "../../components/wrapper/Wrapper";
import { IProduct } from "../../types";
import ProductsView from "../../views/ProductsView";

const ProductsPage = () => {
  // CALL THE API
  const isNonMobile = useMediaQuery("(width > 1000px)");

  //   recieves the ctx
  const ctx = useOutletContext<any>();
  // console.log("ctx", ctx.data);
  return (
    <Box>
      {ctx.data || !ctx.isLoading ? (
        <Box
          mt="20px"
          display="grid"
          // flexDirection="column"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          textAlign="center"
          rowGap="2rem"
          columnGap="2rem"
          padding="1rem 0 0 1.5rem"
          sx={{
            "& > div": {
              gridColumn: isNonMobile ? undefined : "span 5",
            },
          }}
        >
          {ctx.data &&
            ctx.data.productWithStats.map(
              (product: IProduct, index: number) => {
                // console.log("stats", product);
                return <ProductsView product={product} key={index} />;
              }
            )}
        </Box>
      ) : (
        <LoadingWrapper isLoading={ctx.isLoading} text="loading" />
      )}
    </Box>
  );
};
export default ProductsPage;
