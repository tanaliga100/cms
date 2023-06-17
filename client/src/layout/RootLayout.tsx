import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import { RootState } from "../main";
import { useGetUserQuery } from "../state/api";
const RootLayout = () => {
  const isNonMobile = useMediaQuery("(width > 600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  // // GRAB THE USER ID || USE THE HOOK FROM API AND FETCH DATA...
  const userId = useSelector((state: RootState) => state.global.userId);
  const data = useGetUserQuery(userId);
  console.log(data);

  return (
    <Box width="100%" height="100%" display={isNonMobile ? "flex" : "block"}>
      <Sidebar
        user={(data && data.data.user) || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          // user={data || {}}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        {/* ENTIRETY OF THE PAGE  */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default RootLayout;
