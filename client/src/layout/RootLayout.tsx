import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import { LoadingWrapper } from "../components/wrapper/Wrapper";
import { RootState } from "../main";
import { useGetUserQuery } from "../state/api";
const RootLayout = () => {
  const isNonMobile = useMediaQuery("(width > 600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  // // GRAB THE USER ID || USE THE HOOK FROM API AND FETCH DATA...
  const userId = useSelector((state: RootState) => state.global.userId);
  const data = useGetUserQuery(userId);

  // CHECK STATUS BEFORE PASSING AS PROPS

  return (
    <Box width="100%" height="100%" display={isNonMobile ? "flex" : "block"}>
      {data.isLoading ? (
        <LoadingWrapper isLoading={data.isLoading} />
      ) : (
        <Sidebar
          user={data?.data?.user || {}}
          isNonMobile={isNonMobile}
          drawerWidth="300px"
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      )}
      <Box flexGrow={1}>
        {data.isLoading ? (
          <LoadingWrapper isLoading={data.isLoading} />
        ) : (
          <Navbar
            user={data?.data?.user || {}}
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
        )}
        {/* ENTIRETY OF THE PAGE  */}
        {data.isLoading ? (
          <LoadingWrapper isLoading={data.isLoading} />
        ) : (
          <Outlet />
        )}
      </Box>
    </Box>
  );
};

export default RootLayout;
