import { Box } from "@mui/material";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { convertGeo } from "../../utils/convertGeo";

export interface User {
  _id: string;
  city: string;
  state: string | null;
  country: string;
  role: string;
}

const GeoPage = () => {
  console.log(process.env.GE0_API);

  const data = useOutletContext<any>();
  const users: User[] = data.data.users;
  const [location, setLocation] = useState();
  // console.log("USERS", users.slice(0, 10));
  React.useEffect(() => {
    const fetchData = async () => {
      await convertGeo(users);
    };

    // fetchData();
  }, [users]);

  return <Box p={2}></Box>;
};

export default GeoPage;

{
  /* {users.map((user: any) => {
        return (
          <FlexRowWrapper key={user._id} sx={{ py: ".5rem" }}>
            <Typography>{user.role}</Typography>
            <Typography>{user.city}</Typography>
          </FlexRowWrapper>
        );
      })} */
}
