import { Box, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { FlexRowWrapper } from "../components/wrapper/Wrapper";
import { IProducts } from "../types";
import StatsView from "./StatsView";

const ProductsView: React.FC<IProducts> = (props) => {
  // console.log("EACH", props);
  const {
    __v,
    _id,
    category,
    createdAt,
    description,
    name,
    price,
    rating,
    supply,
    updatedAt,
  } = props.product;

  // const {} = props.stats;

  // console.log("productsView", props);
  return (
    // <Box
    //   boxShadow="0px 1px 0px 1px white"
    //   padding="1rem"
    //   width="100%"
    //   display="flex"
    // >
    <FlexRowWrapper>
      <Typography variant="h6" fontWeight="bolder">
        {name}
      </Typography>
      <Typography>{category}</Typography>
      <Typography>{price}</Typography>
      <Typography>{rating}</Typography>
      <Link to={`/products/${_id}`}> see more</Link>
      <Outlet context={props.stat} />
    </FlexRowWrapper>
    // </Box>
  );
};

export default ProductsView;
