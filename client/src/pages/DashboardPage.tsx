import { Box } from "@mui/material";
import Hero from "../components/shared/Hero";
import DashboardView from "../views/DashboardView";

const DashboardPage = () => {
  return (
    <Box>
      <Hero title="DASHBOARD" subtitle="List of all stats and metrics" />
      <DashboardView />
    </Box>
  );
};

export default DashboardPage;
