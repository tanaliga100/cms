import PeopleIcon from "@mui/icons-material/People";
import { Box, Divider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Hero from "../components/shared/Hero";
import Search from "../components/shared/Search";
import { FlexRowWrapper, LoadingWrapper } from "../components/wrapper/Wrapper";
import { useGetCustomersQuery } from "../state/api";
const CustomersLayout = () => {
  // call the api
  // pass the counts to Hero
  // add Search Component

  const data = useGetCustomersQuery<undefined | any>(undefined);
  // console.log("data_customers", data);

  return (
    <Box>
      <FlexRowWrapper flexGrow={1} sx={{ justifyContent: "left", gap: "3rem" }}>
        <Hero
          title="CUSTOMERS"
          subtitle="List of all the customers"
          counts={data ? data?.data?.counts : {}}
          isLoading={data ? data.isLoading : {}}
          icon={<PeopleIcon />}
        />
        <Search label="Search Customers" />
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

export default CustomersLayout;
