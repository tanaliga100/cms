import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
const RootLayout = () => {
  const isNonMobile = useMediaQuery("min-width: 500px");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <Box width="100%" height="100%" display={isNonMobile ? "flex" : "block"}>
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Box>
        <Navbar
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
