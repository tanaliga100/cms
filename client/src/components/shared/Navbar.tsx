import { useTheme } from "@emotion/react";
// import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, } from "@mui/icons-material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { FlexRowWrapper } from "../wrapper/Wrapper";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* LEFT-SIDE  */}
        <FlexRowWrapper>
          <IconButton onClick={() => console.log("open side bar")}>
            <MenuIcon />
          </IconButton>
        </FlexRowWrapper>

        {/* RIGHT-SIDE */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
