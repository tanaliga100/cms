import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  IconButton,
  Modal,
  Rating,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { IProduct, IProducts } from "../types";

import LaunchIcon from "@mui/icons-material/Launch";
import {
  FlexColumnWrapper,
  FlexRowWrapper,
} from "../components/wrapper/Wrapper";
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
    setOpen(true);
  };

  // MODAL
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    borderRadius: "10px",
    transform: "translate(-50%, -50%)",
    width: "50%",
    // bgcolor: "background.paper",
    bgcolor: `${theme.palette.background.default}`,
    boxShadow: 24,
    p: 4,
    scrollY: true,
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
          {/* {!expanded ? <LaunchIcon /> : <CloseFullscreenIcon />} */}
          <LaunchIcon />
        </IconButton>
        <Rating value={rating} readOnly />
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <Stack spacing={2} padding="1rem">
          <Chip
            label={category}
            variant="outlined"
            sx={{ background: theme.palette.background.default }}
          />

          <FlexColumnWrapper>
            <Typography variant="h5" fontWeight={700}>
              Created:
            </Typography>
            <Typography
              variant="body1"
              fontWeight="smaller"
              color={theme.palette.secondary.main}
              gutterBottom
            >
              {createdAt}
            </Typography>
          </FlexColumnWrapper>
          <FlexColumnWrapper>
            <Typography variant="h5" fontWeight={700}>
              Description:
            </Typography>
            <Typography
              variant="body2"
              fontWeight="smaller"
              color={theme.palette.secondary.main}
              gutterBottom
            >
              {description}
            </Typography>
          </FlexColumnWrapper>
          <FlexColumnWrapper>
            <Typography variant="h5" fontWeight={700}>
              Supply:
            </Typography>
            <Typography
              variant="body2"
              fontWeight="smaller"
              color={theme.palette.secondary.main}
              gutterBottom
            >
              {supply}
            </Typography>
          </FlexColumnWrapper>
        </Stack>
      </Collapse> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            fontWeight={800}
            component="h2"
          >
            {name} Details
          </Typography>
          <FlexRowWrapper>
            <Rating value={rating} readOnly />
            <Typography variant="body2"> ID : {_id}</Typography>
          </FlexRowWrapper>
          <Divider />
          <FlexColumnWrapper>
            <Typography variant="h6" fontWeight={800}>
              createdAt:
            </Typography>
            <Typography
              variant="caption"
              fontWeight="smaller"
              color={theme.palette.primary.contrastText}
            >
              {createdAt}
            </Typography>
          </FlexColumnWrapper>

          <FlexColumnWrapper mt={3}>
            <Typography variant="h6" fontWeight={800}>
              Description:
            </Typography>
            <Typography
              variant="caption"
              fontWeight="smaller"
              color={theme.palette.primary.contrastText}
              gutterBottom
            >
              {description}
            </Typography>
          </FlexColumnWrapper>

          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus exercitationem aut sint inventore error, consectetur,
            labore sit dolorem magnam autem quibusdam. Eos suscipit dolores vero
          </Typography> */}
          <Stack spacing={2}>
            {stats ? (
              stats.map((stat) => {
                return (
                  <Stack key={stat._id}>
                    <FlexRowWrapper mt={3}>
                      <Typography variant="h6" fontWeight={800}>
                        YearlySalesTotal:
                      </Typography>
                      <Typography
                        variant="caption"
                        fontWeight="smaller"
                        color={theme.palette.primary.contrastText}
                        gutterBottom
                      >
                        <Stack
                          sx={{
                            background: `${theme.palette.background.default}`,
                            padding: ".7rem",
                          }}
                        >
                          <Chip label={stat.yearlySalesTotal} />
                        </Stack>
                      </Typography>
                      <Typography variant="h6" fontWeight={800}>
                        YearlyTotalSoldUnits:
                      </Typography>
                      <Typography
                        variant="caption"
                        fontWeight="smaller"
                        color={theme.palette.primary.contrastText}
                        gutterBottom
                      >
                        <Stack
                          sx={{
                            background: `${theme.palette.background.default}`,
                            padding: ".7rem",
                          }}
                        >
                          <Chip label={stat.yearlyTotalSoldUnits} />
                        </Stack>
                      </Typography>
                    </FlexRowWrapper>
                    <Divider />
                    {/* DAILY DATA  */}
                    <FlexRowWrapper>
                      <Typography variant="h6" fontWeight={800}>
                        Total Units Daily Basis:
                      </Typography>
                      <Stack
                        sx={{
                          background: `${theme.palette.background.default}`,
                          padding: ".7rem",
                        }}
                      >
                        {stat.dailyData.reduce(
                          (total, dData) => total + dData.totalUnits,
                          0
                        )}
                      </Stack>
                    </FlexRowWrapper>
                    {/* MONTHLY DATA  */}
                    <FlexRowWrapper>
                      <Typography variant="h6" fontWeight={800}>
                        Total Units Monthly Basis:
                      </Typography>
                      <Stack
                        sx={{
                          background: `${theme.palette.background.default}`,
                          padding: ".7rem",
                        }}
                      >
                        {stat.monthlyData.reduce(
                          (total, dData) => total + dData.totalUnits,
                          0
                        )}
                      </Stack>
                    </FlexRowWrapper>
                  </Stack>
                );
              })
            ) : (
              <Skeleton variant="rectangular" width={210} height={60} />
            )}
          </Stack>
        </Box>
      </Modal>
    </Card>
  );
};

export default ProductsView;

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
