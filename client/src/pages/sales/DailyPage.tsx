import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { Box, Divider } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import DailyChart from "../../components/charts/DailyChart";
import Hero from "../../components/shared/Hero";
import { FlexRowWrapper } from "../../components/wrapper/Wrapper";

const DailyPage = () => {
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
          title="DAILY CHART"
          subtitle="List of all the Sales and Unist on a daily basis "
          isLoading={ctx.data.isLoading}
          // counts={<PriceCheckIcon />}
          icon={<PriceCheckIcon />}
        />
      </FlexRowWrapper>
      <Divider light />
      <DailyChart />
    </Box>
  );
};

export default DailyPage;
