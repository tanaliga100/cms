import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import { Badge, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { LoadingWrapper } from "../wrapper/Wrapper";

interface IProps {
  title: string;
  subtitle: string;
  isLoading?: boolean;
  counts?: number;
}

const Hero: React.FC<IProps> = (props) => {
  const theme = useTheme();
  return (
    <Box>
      {props.isLoading ? (
        <LoadingWrapper isLoading={props.isLoading} />
      ) : (
        <Box m="3rem  1.5rem 3rem 1.5rem">
          <Typography
            variant="h3"
            color={theme.palette.primary.contrastText}
            fontWeight="bold"
            sx={{
              mb: "5px",
            }}
          >
            {props.title}
            <Badge badgeContent={props.counts} color="secondary">
              <Inventory2RoundedIcon
                color="action"
                fontSize="small"
                sx={{ fontSize: "1.3rem", mx: ".6rem" }}
              />
            </Badge>
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
      )}
    </Box>
  );
};

export default Hero;
