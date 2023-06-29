import { ExpandMore } from "@mui/icons-material";
import {
  Avatar,
  Backdrop,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";
import { Outlet, useOutlet, useOutletContext } from "react-router-dom";
import Product from "../../../../server/src/models/product.model";
import Hero from "../../components/shared/Hero";
import {
  FlexColumnWrapper,
  FlexRowWrapper,
  LoadingWrapper,
} from "../../components/wrapper/Wrapper";
import { useGetProductsQuery } from "../../state/api";
import { IProducts } from "../../types";
import ProductsView from "../../views/ProductsView";
import StatsView from "../../views/StatsView";

const ProductsPage = () => {
  // CALL THE API
  const isNonMobile = useMediaQuery("(width > 1000px)");

  //   recieves the ctx
  const ctx = useOutletContext<any>();
  console.log("ctx", ctx);
  return (
    <Box>
      {ctx.data || !ctx.isLoading ? (
        <Box
          mt="20px"
          display="grid"
          // flexDirection="column"
          gridTemplateColumns="repeat(5, minmax(0, 1fr))"
          justifyContent="space-between"
          textAlign="center"
          rowGap="20px"
          columnGap="1.33%"
          padding="0 1.5rem"
          sx={{
            "& > div": {
              gridColumn: isNonMobile ? undefined : "span 5",
            },
          }}
        >
          {/* {data &&
            data.withStats.map((product: IProducts, index: number) => {
              // console.log('stats', product);
              // return null;
              return (
                <ProductsView
                  key={index}
                  product={product.product}
                  stat={product.stat}
                />
              );
            })} */}
        </Box>
      ) : (
        <LoadingWrapper isLoading={ctx.isLoading} text="loading" />
      )}
    </Box>
  );
};
export default ProductsPage;

// const Product: React.FC<IProduct> = (props) => {
//   // console.log("EACH", props);
//   <Card sx={{ maxWidth: 345 }}>
//     <CardHeader
//       avatar={<Avatar aria-label="recipe">R</Avatar>}
//       action={<IconButton aria-label="settings"></IconButton>}
//       title="Shrimp and Chorizo Paella"
//       subheader="September 14, 2016"
//     />
//     <CardMedia
//       component="img"
//       height="194"
//       image="/static/images/cards/paella.jpg"
//       alt="Paella dish"
//     />
//     <CardContent>
//       <Typography variant="body2" color="text.secondary">
//         This impressive paella is a perfect party dish and a fun meal to cook
//         together with your guests. Add 1 cup of frozen peas along with the
//         mussels, if you like.
//       </Typography>
//     </CardContent>
//     <CardActions disableSpacing>
//       <IconButton aria-label="add to favorites"></IconButton>
//       <IconButton aria-label="share"></IconButton>
//     </CardActions>
//   </Card>;
// };
