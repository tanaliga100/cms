import { Box, Divider } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Hero from "../components/shared/Hero";

const SalesLayout = () => {
  return (
    <Box>
      <Hero title="SALES" subtitle="List of all the Sales" />
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
          relative="route"
        >
          {" "}
          Stats
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="stats"
          relative="route"
        >
          {" "}
          Details
        </NavLink>
      </Box>
      <Divider sx={{ padding: ".5rem" }} light />
      <Box>
        {/* <Outlet /> */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default SalesLayout;
