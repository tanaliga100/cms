import { Box } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";
import SalesOverview from "../../components/shared/SalesOverview";
import { ISales } from "../../types";

const SalesPage: React.FC = () => {
  const ctx = useOutletContext<any>();
  const data: ISales = ctx.data.overview;
  console.log("ctx", data);

  return (
    <Box
      sx={{
        height: 500,
        maxWidth: "100vw",
        mt: "20px",
        padding: "0 1rem",
      }}
    >
      <SalesOverview data={data} />
    </Box>
  );
};

export default SalesPage;
