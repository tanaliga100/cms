import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";

const DailyPage = () => {
  const ctx = useOutletContext<any>();
  console.log("CTX", ctx);

  return <Box>DailyPage</Box>;
};

export default DailyPage;
