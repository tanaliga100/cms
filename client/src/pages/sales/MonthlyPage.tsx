import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { Box, Divider } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import MonthlyChart from "../../components/charts/MonthlyChart";
import Hero from "../../components/shared/Hero";
import { FlexRowWrapper } from "../../components/wrapper/Wrapper";

const MonthlyPage = () => {
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
          title="MONTHLY CHART"
          subtitle="List of all the Sales and Unist on a monthly basis "
          isLoading={ctx.data.isLoading}
          // counts={<PriceCheckIcon />}
          icon={<PriceCheckIcon />}
        />
      </FlexRowWrapper>
      <Divider light />
      <MonthlyChart />
    </Box>
  );
};

export default MonthlyPage;
