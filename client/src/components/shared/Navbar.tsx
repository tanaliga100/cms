import {
  ArrowDropDownOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "../../state";
import { FlexRowWrapper } from "../wrapper/Wrapper";

interface Props {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = (props) => {
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
          <FlexRowWrapper
            sx={{
              backgroundColor: theme.palette.background.default || "grey",
            }}
            gap="3rem"
            borderRadius="109x"
            borderBottom="1px dotted white"
            p=".1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <Search />
          </FlexRowWrapper>
        </FlexRowWrapper>

        {/* RIGHT-SIDE */}
        <FlexRowWrapper gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <SettingsOutlined sx={{ fontSize: "25px" }} />
        </FlexRowWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
