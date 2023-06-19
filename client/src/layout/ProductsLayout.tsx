import { Dashboard } from "@mui/icons-material";
import { Box } from "@mui/material";
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

  return (
    <Box>
      <Hero
        title="PRODUCTS"
        subtitle="List of all the Products"
        isLoading={data.isLoading}
      />
      <Box display="flex" justifyContent="" gap="4rem" padding="0 1.5rem">
        <NavLink
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="."
          relative="path"
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
          to="/pricing"
        >
          {" "}
          Category
        </NavLink>
      </Box>
      <Box>
        <Outlet context={data} />
      </Box>
    </Box>
  );
};

export default ProductsLayout;
