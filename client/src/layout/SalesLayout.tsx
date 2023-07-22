import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { LoadingWrapper } from "../components/wrapper/Wrapper";
import { useGetSalesQuery } from "../state/api";
const SalesLayout = () => {
  //fetch endpoint
  const data = useGetSalesQuery<any>(undefined);

  return (
    <Box>
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
