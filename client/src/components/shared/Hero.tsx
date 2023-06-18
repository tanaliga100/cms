import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

interface IProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<IProps> = (props) => {
  const theme = useTheme();
  return (
    <Box m="1rem  1.5rem 2rem 1.5rem">
      <Typography
        variant="h3"
        color={theme.palette.primary.contrastText}
        fontWeight="bold"
        sx={{
          mb: "5px",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.secondary.main}
        sx={{
          mb: "3px",
        }}
      >
        {props.subtitle}
      </Typography>
    </Box>
  );
};

export default Hero;
