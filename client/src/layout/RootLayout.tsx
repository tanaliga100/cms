import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar />
        {/* ENTIRETY OF THE PAGE  */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default RootLayout;
