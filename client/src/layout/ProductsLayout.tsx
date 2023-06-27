import { Dashboard } from "@mui/icons-material";
import { Box, Divider, Paper, Typography, useTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Hero from "../components/shared/Hero";
import Search from "../components/shared/Search";
import {
  FlexColumnWrapper,
  FlexRowWrapper,
} from "../components/wrapper/Wrapper";
import DashboardPage from "../pages/DashboardPage";
import ProductsPage from "../pages/products/ProductsPage";
import { useGetProductsQuery } from "../state/api";

const ProductsLayout = () => {
  const data = useGetProductsQuery<undefined | any>(undefined);

  return (
    <Box>
      <FlexRowWrapper flexGrow={1} sx={{ justifyContent: "left", gap: "3rem" }}>
        <Hero
          title="PRODUCTS"
          subtitle="List of all the Products"
          isLoading={data.isLoading}
          counts={data?.data?.counts}
        />
        <Search label="Search Product" />
      </FlexRowWrapper>
      {/* <Box display="flex" justifyContent="" gap="4rem" padding="0 1.5rem">
        <NavLink
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="."
          end
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
        <NavLink
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="details"
        >
          {" "}
          Details
        </NavLink>
      </Box> */}
      <Divider light />
      <Outlet />
    </Box>
  );
};

export default ProductsLayout;
