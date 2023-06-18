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
  justifyContent: "space-between",
  alignItems: "center",
});

interface IProps {
  isLoading: boolean;
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
