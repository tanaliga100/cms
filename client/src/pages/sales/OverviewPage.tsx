import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { Box, Divider } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";
import OverviewChart from "../../components/charts/OverviewChart";
import Hero from "../../components/shared/Hero";
import { FlexRowWrapper } from "../../components/wrapper/Wrapper";

const OverviewPage: React.FC = () => {
  const ctx = useOutletContext<any>();

  return (
    <Box
      sx={{
        height: 500,
        maxWidth: "100%",
      }}
    >
      <FlexRowWrapper flexGrow={1} sx={{ justifyContent: "left", gap: "3rem" }}>
        <Hero
          title="OVERVIEW"
          subtitle="List of all the Sales "
          isLoading={ctx.data.isLoading}
          // counts={<PriceCheckIcon />}
          icon={<PriceCheckIcon />}
        />
      </FlexRowWrapper>
      <Divider light />
      <OverviewChart />
    </Box>
  );
};

export default OverviewPage;
