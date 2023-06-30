import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Collapse,
  Divider,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { IProduct, IProducts } from "../types";

import LaunchIcon from "@mui/icons-material/Launch";
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
    stats,
  } = props.product as IProduct;

  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background?.default,
        borderRadius: ".5rem",
        maxWidth: "auto",
        overflow: "visible",
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          fontWeight="bolder"
          color={theme.palette.secondary.main}
          gutterBottom
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.success.main}
          gutterBottom
        >
          Price: $ {price.toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <IconButton
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          size="large"
          onClick={() => handleExpandClick()}
        >
          {!expanded ? <LaunchIcon /> : <CloseFullscreenIcon />}
        </IconButton>
        <Chip label={category} variant="outlined" />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <Stack spacing={2} padding="1rem">
          <Typography
            variant="body2"
            fontWeight="smaller"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            Created: {createdAt}
          </Typography>
          <Typography
            paragraph
            variant="body1"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            Desc: {description}
          </Typography>
          <Typography
            variant="body1"
            color={theme.palette.success.main}
            gutterBottom
          >
            Supply: {supply}
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.success.main}
            gutterBottom
          ></Typography>
        </Stack>
      </Collapse>
    </Card>
  );
};

export default ProductsView;

import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

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
