import { ExpandMore } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Badge,
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FlexColumnWrapper,
  FlexRowWrapper,
  GridWrapper,
} from "../components/wrapper/Wrapper";
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

  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <Card
      sx={{
        background: "none",
        borderRadius: ".5rem",
        padding: "1rem",
        maxWidth: 300,
      }}
    >
      <CardContent>
        <Typography variant="h4" fontWeight="bolder" color="tan">
          {name}
        </Typography>
        <Typography variant="body1" color="tan">
          Price: {price}
        </Typography>
      </CardContent>
      <Chip label={category} variant="outlined" />
    </Card>
  );
};

export default ProductsView;
//  <FlexColumnWrapper gap="2rem">
//       <FlexRowWrapper flexGrow={1}>
//         <Typography variant="h6" fontWeight="bolder">
//           {name}
//         </Typography>
//         <Typography>{category}</Typography>
//         <Typography>{price}</Typography>
//         <Typography>{rating}</Typography>
//       </FlexRowWrapper>
//       <FlexRowWrapper>
//         <Link
//           // to={`/products/${_id}`}
//           to="."
//           className="linkGreen"
//         >
//           {" "}
//           <IconButton>
//             <EditIcon color="success" />
//           </IconButton>
//         </Link>
//         <Link
//           // to={`/products/${_id}`}
//           to="."
//           className="linkRed"
//         >
//           {" "}
//           <IconButton>
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Link>
//       </FlexRowWrapper>
//     </FlexColumnWrapper>
