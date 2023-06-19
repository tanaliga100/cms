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
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "../../state";
import { IUser } from "../../types";
import { FlexRowWrapper } from "../wrapper/Wrapper";
import profile from "/src/assets/profile-modified.png";

interface Props {
  user: IUser;
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        position: "sticky",
        background: "none",
        boxShadow: "0px 0px -1px 0 grey",
        backgroundColor: "transparent",
        backdropFilter: "blur(300px)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* LEFT-SIDE  */}
        <FlexRowWrapper>
          <IconButton
            onClick={() => props.setIsSideBarOpen(!props.isSideBarOpen)}
          >
            <MenuIcon />
          </IconButton>
          <FlexRowWrapper
            sx={
              {
                // backgroundColor: theme.palette.background.default || "grey",
              }
            }
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
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
          <FlexRowWrapper>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justtifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
                background: "transparent", // Updat
                backdropFilter: "blur(50px)",
                color: theme.palette.secondary.main,
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profile}
                width="40px"
                height="40px"
                borderRadius="50%"
                sx={{
                  objectFit: "cover",
                }}
              />
              <Box
                textAlign="center"
                sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <Typography
                  fontWeight="bold"
                  fontSize="1rem"
                  // sx={{ color: "white" }}
                >
                  {props.user.name || "jordantanaliga100"}
                </Typography>
                <Typography
                  fontWeight=".8rem"
                  fontSize="1rem"
                  // sx={{ color: "white" }}
                >
                  {props.user.occupation || "Software Developer"}
                </Typography>
                <ArrowDropDownOutlined sx={{ fontSize: "30px" }} />
              </Box>
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexRowWrapper>
        </FlexRowWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
