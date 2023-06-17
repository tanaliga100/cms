import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  PieChartOutline,
  PointOfSaleOutlined,
  PublicOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  Box,
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
import { FlexRowWrapper } from "../wrapper/Wrapper";

interface Props {
  isNonMobile: boolean;
  drawerWidth: string;
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}
const Sidebar: React.FC<Props> = (props) => {
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
                    EcomVision
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
                      sx={{ m: "2.25rem 0 1rem 3rem", fontSize: "1.2rem" }}
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
