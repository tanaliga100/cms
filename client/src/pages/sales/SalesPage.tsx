import { Box } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";
import SalesOverview from "../../components/charts/SalesOverview";
import { ISales } from "../../types";

const SalesPage: React.FC = () => {
  const ctx = useOutletContext<any>();
  const data: ISales = ctx.data.overAllStats;

  return (
    <Box
      sx={{
        height: 500,
        maxWidth: "100%",
        mt: "20px",
        padding: "0 1rem",
      }}
    >
      <SalesOverview data={data} />
    </Box>
  );
};

export default SalesPage;
