import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { FlexRowWrapper } from "../components/wrapper/Wrapper";
import { IProduct, IProducts } from "../types";
import StatsView from "./StatsView";

const ProductsView: React.FC<IProducts> = (props) => {
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
  } = props.product as IProduct;

  // const {} = props.stats;

  // console.log("productsView", props);
  return (
    <FlexRowWrapper gap="2rem">
      <FlexRowWrapper flexGrow={1}>
        <Typography variant="h6" fontWeight="bolder">
          {name}
        </Typography>
        <Typography>{category}</Typography>
        <Typography>{price}</Typography>
        <Typography>{rating}</Typography>
      </FlexRowWrapper>
      <FlexRowWrapper>
        <Link
          // to={`/products/${_id}`}
          to="."
          className="linkGreen"
        >
          {" "}
          <IconButton>
            <EditIcon color="success" />
          </IconButton>
        </Link>
        <Link
          // to={`/products/${_id}`}
          to="."
          className="linkRed"
        >
          {" "}
          <IconButton>
            <DeleteIcon color="error" />
          </IconButton>
        </Link>
      </FlexRowWrapper>
    </FlexRowWrapper>
  );
};

export default ProductsView;
