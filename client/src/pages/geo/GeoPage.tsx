import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";

export interface User {
  _id: string;
  city: string;
  state: string | null;
  country: string;
  role: string;
}

const GeoPage = () => {
  const data = useOutletContext<any>();
  const users: User[] = data.data.users;

  // FORMAT THE DATE HERE...
  const aggregate = users.reduce(
    (acc: any, current: any) => {
      //desctruct
      const { _id, city, coordinates, country, role, state } = current;
      // Group by role
      acc.roleCounts[role] = (acc.roleCounts[role] || 0) + 1;
      // Group by country
      acc.countryCounts[country] = (acc.countryCounts[country] || 0) + 1;
      // Users Location
      acc.userLocation[coordinates] = acc.userLocation[coordinates] + 1;
      return acc;
    },
    {
      countryCounts: {},
      roleCounts: {},
      userLocation: {},
    }
  );
  console.log("AGGREGATE", aggregate);

  return <Box p={2} sx={{ height: 400, widht: 400 }}></Box>;
};

export default GeoPage;
