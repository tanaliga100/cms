import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();
  console.log("params", params);

  return <Box>ProductDetailsPage</Box>;
};

export default ProductDetailsPage;
