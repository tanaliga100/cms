import { Box, Divider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Hero from "../components/shared/Hero";

const GeoLayout = () => {
  return (
    <Box>
      <Hero title="GEOGRAPHY" subtitle="List of all the customers were in" />
      <Divider light />
      <Outlet />
    </Box>
  );
};

export default GeoLayout;
