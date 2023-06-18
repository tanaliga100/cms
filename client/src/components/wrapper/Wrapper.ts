import { Box, styled } from "@mui/material";

export const FlexRowWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const FlexColumnWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

export const LoadingWrapper = styled(Box)({
  display: "flex",
  width: "100%",
  height: "100%",
  textAlign: "center",
});
