import {
  Box,
  useMediaQuery
} from "@mui/material";
import { useOutletContext } from "react-router-dom";
import {
  LoadingWrapper
} from "../../components/wrapper/Wrapper";
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
