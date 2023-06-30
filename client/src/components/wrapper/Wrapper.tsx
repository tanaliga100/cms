import { Backdrop, Box, CircularProgress, styled } from "@mui/material";
import React from "react";
export const FlexRowWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const FlexColumnWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "space-between",
  gap: "1rem",
});
export const GridWrapper = styled(Box)({
  display: "flex",
  gridTemplateColumns: "repeat(4, 1fr)",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
});

interface IProps {
  isLoading: boolean;
  text?: string | number;
}
export const LoadingWrapper: React.FC<IProps> = (props) => {
  return (
    <Backdrop
      open={props.isLoading}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
