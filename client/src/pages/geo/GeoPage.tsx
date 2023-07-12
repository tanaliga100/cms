import { Box, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { FlexRowWrapper } from "../../components/wrapper/Wrapper";

interface User {
  _id: string;
  city: string;
  state: string | null;
  country: string;
  role: string;
}

const GeoPage = () => {
  const data = useOutletContext<any>();

  const users: User[] = data.data.users;
  console.log("USERS", users.slice(0, 10));

  return (
    <Box p={2}>
      {users.map((user: any) => {
        return (
          <FlexRowWrapper key={user._id} sx={{ py: ".5rem" }}>
            <Typography>{user.role}</Typography>
            <Typography>{user.city}</Typography>
          </FlexRowWrapper>
        );
      })}
    </Box>
  );
};

export default GeoPage;
