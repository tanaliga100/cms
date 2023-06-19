import { Dashboard } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Hero from "../components/shared/Hero";
import { FlexRowWrapper } from "../components/wrapper/Wrapper";
import DashboardPage from "../pages/DashboardPage";
import ProductsPage from "../pages/ProductsPage";
import { useGetProductsQuery } from "../state/api";

const ProductsLayout = () => {
  // CALL THE API
  const data = useGetProductsQuery(undefined);

  const dummy = {
    title: "OverView",
  };
  const theme = useTheme();
  return (
    <Box>
      <Hero
        title="PRODUCTS"
        subtitle="List of all the Products"
        isLoading={data.isLoading}
      />
      <Box display="flex" justifyContent="" gap="4rem" padding="0 1.5rem">
        <NavLink
          end
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="."
        >
          Overview
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="stats"
        >
          {" "}
          Stats
        </NavLink>
      </Box>
      <Box>
        {/* <Outlet /> */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProductsLayout;
