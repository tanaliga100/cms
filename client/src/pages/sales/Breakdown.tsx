import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { Box, Divider, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/shared/Hero";
import { FlexRowWrapper } from "../../components/wrapper/Wrapper";

const Breakdown = () => {
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
          title="BREAKDOWN"
          subtitle=" Sales and Unist on BREAKDOWN "
          isLoading={ctx.data.isLoading}
          // counts={<PriceCheckIcon />}
          icon={<PriceCheckIcon />}
        />
      </FlexRowWrapper>
      <Divider light />
      <Typography>Breakdown</Typography>
    </Box>
  );
};

export default Breakdown;
