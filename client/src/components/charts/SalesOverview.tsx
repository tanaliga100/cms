import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import OverViewChart from "../../views/OverviewChart";
import { FlexColumnWrapper } from "../wrapper/Wrapper";

interface IProps {
  data: any;
}

const SalesOverview = ({ data }: IProps) => {
  const [view, setView] = useState<any>("");

  return (
    <Box
      sx={{
        height: 500,
        maxWidth: "100vw",
        mt: "20px",
        padding: "0 1rem",
        textAlign: "left",
      }}
    >
      <FlexColumnWrapper>
        <FormControl
          variant="standard"
          sx={{ width: "30%", border: "none", py: ".3rem" }}
          fullWidth
        >
          <InputLabel>Select Overview</InputLabel>
          <Select
            value={view}
            onChange={(e) => setView(e.target.value)}
            labelId="demo-select-small-label"
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        {/* OverViewChart  */}
        <Box sx={{ height: "50vh" }}>
          <OverViewChart data={data} view={view} />
        </Box>
      </FlexColumnWrapper>
    </Box>
  );
};

export default SalesOverview;
