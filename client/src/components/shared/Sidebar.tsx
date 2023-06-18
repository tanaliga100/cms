import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  PieChartOutline,
  PointOfSaleOutlined,
  PublicOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IUser } from "../../types";
import { FlexRowWrapper } from "../wrapper/Wrapper";
import profile from "/src/assets/profile-modified.png";

interface Props {
  user: IUser;
  isNonMobile: boolean;
  drawerWidth: string;
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}
const Sidebar: React.FC<Props> = (props) => {
  // console.log(props);

  const { pathname } = useLocation();
  const [active, setActive] = useState<string>("");

  const navigate = useNavigate();
  const theme = useTheme();
  React.useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {props.isSideBarOpen && (
        <Drawer
          open={props.isSideBarOpen}
          onClose={() => props.setIsSideBarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: props.drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.background.default,
              boxSizing: "border-box",
              borderWidth: props.isNonMobile ? 0 : "2px",
              width: props.drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexRowWrapper color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap=".5rem">
                  <Typography variant="h3" fontWeight="bolder">
                    xBlast-Admin
                  </Typography>
                </Box>
                {!props.isNonMobile && (
                  <IconButton
                    onClick={() => props.setIsSideBarOpen(!props.isSideBarOpen)}
                  >
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexRowWrapper>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography
                      key={text}
                      sx={{ m: "1rem 0 1rem 1rem", fontSize: "1.2rem" }}
                    >
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor: active === lcText ? "#DBDFAA" : "none",
                        color:
                          active === lcText
                            ? theme.palette.primary.main
                            : theme.palette.secondary.main,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          p: "0 2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary.main
                              : theme.palette.secondary.main,
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined
                          sx={{
                            ml: "auto",
                          }}
                        />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          {/* DISPLAY USER HERE  */}
          <Box
            position="sticky"
            bottom="0"
            width="100%"
            sx={{
              zIndex: 1,
              // background: "transparent",
              background: "transparent", // Updat
              backdropFilter: "blur(50px)",
              color: theme.palette.secondary.main,
            }}
          >
            <Divider sx={{}} />
            <FlexRowWrapper
              textTransform="none"
              padding="1.3rem"
              gap=".5rem"
              // m="1.rem 2rem 0 3rem"
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
              <Box textAlign="center" sx={{}}>
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
              </Box>
              <SettingsOutlined
                sx={{ color: theme.palette.secondary.main, fontSize: "25px" }}
              />
            </FlexRowWrapper>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};
export default Sidebar;

interface NavItem {
  text: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { text: "Dashboard", icon: <HomeOutlined /> },
  { text: "Client Facing", icon: null },
  { text: "Products", icon: <ShoppingCartOutlined /> },
  { text: "Customers", icon: <HomeOutlined /> },
  { text: "Transactions", icon: <HomeOutlined /> },
  { text: "Geography", icon: <PublicOutlined /> },
  { text: "Sales", icon: null },
  { text: "Overview", icon: <PointOfSaleOutlined /> },
  { text: "Daily", icon: <TodayOutlined /> },
  { text: "Monthly", icon: <CalendarMonthOutlined /> },
  { text: "Breakdown", icon: <PieChartOutline /> },
  { text: "Management", icon: null },
  { text: "Admin", icon: <AdminPanelSettingsOutlined /> },
  { text: "Performance", icon: <TrendingUpOutlined /> },
];
