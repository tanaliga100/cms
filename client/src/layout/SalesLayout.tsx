import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { Box, Divider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Hero from "../components/shared/Hero";
import { FlexRowWrapper, LoadingWrapper } from "../components/wrapper/Wrapper";
import { useGetSalesQuery } from "../state/api";
const SalesLayout = () => {
  //fetch endpoint
  const data = useGetSalesQuery<any>(undefined);

  return (
    <Box>
      <FlexRowWrapper flexGrow={1} sx={{ justifyContent: "left", gap: "3rem" }}>
        <Hero
          title="OVERVIEW"
          subtitle="List of all the Sales "
          isLoading={data ? data.isLoading : {}}
          // counts={<PriceCheckIcon />}
          icon={<PriceCheckIcon />}
        />
      </FlexRowWrapper>
      <Divider light />
      {/* ENTIRETY OF THE PAGE  */}
      {data.isLoading ? (
        <LoadingWrapper isLoading={data.isLoading} />
      ) : (
          <Outlet context={data} />
      )}
    </Box>
  );
};

export default SalesLayout;
