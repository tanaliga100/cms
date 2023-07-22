import { Box } from "@mui/material";
import React from "react";
import { default as OverviewChart } from "../../components/charts/SalesOverview";

const OverviewPage: React.FC = () => {
  return (
    <Box
      sx={{
        height: 500,
        maxWidth: "100%",
        mt: "20px",
        padding: "0 1rem",
      }}
    >
      <OverviewChart />
    </Box>
  );
};

export default OverviewPage;
