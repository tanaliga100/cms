import PublicIcon from "@mui/icons-material/Public";
import { Box, Divider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Hero from "../components/shared/Hero";
import { LoadingWrapper } from "../components/wrapper/Wrapper";
import { useGetGeographyQuery } from "../state/api";
const GeoLayout = () => {
  const data = useGetGeographyQuery<any>(undefined);

  return (
    <Box>
      <Hero
        title="GEOGRAPHY"
        subtitle="List of all the customers were in"
        counts={data.data?.counts}
        icon={<PublicIcon />}
      />
      <Divider light />
      {/* ENTIRETY OF THE PAGE  */}
      {data.isLoading ? (
        <LoadingWrapper isLoading={data.isLoading} />
      ) : (
        <Box sx={{ width: "100%", height: "70vh" }}>
          <Outlet context={data} />
        </Box>
      )}
    </Box>
  );
};

export default GeoLayout;
