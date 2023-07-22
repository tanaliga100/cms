import { Box, useTheme } from "@mui/material";
import { ResponsiveBump } from "@nivo/bump";
import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FormatMonthlyData } from "../../utils/formatMonhtlyData";
import { FlexColumnWrapper } from "../wrapper/Wrapper";

const OverviewChart: React.FC = () => {
  // CONTEXT
  const ctx = useOutletContext<any>();
  const data: any = ctx.data.overAllStats; // for MEMO

  // HOOKS & THEMES
  const [view, setView] = useState<any>("");
  const theme = useTheme();

  // FORMAT DATA
  const memo: any = useMemo(() => FormatMonthlyData(data), [data]);
  console.log("MEMO", memo);

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
        {/* <FormControl
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
        </FormControl> */}
        <Box
          sx={{
            height: "70vh",
            width: "90%",
            margin: "0 auto",
            color: "tan",
            //   backgroundColor: "tan",
            //   padding: "0 1rem 0rem 1rem",
            padding: "1.3rem",
            boxShadow: "0px 5px 0px 0px",
          }}
        >
          <ResponsiveBump
            //   data={view === "sales" ? memo[0].data : memo[1].data}
            //   data={view === "sales" ? totalSalesLine : totalUnitsLine}
            data={memo}
            colors={{ scheme: "spectral" }}
            lineWidth={1}
            activeLineWidth={6}
            inactiveLineWidth={3}
            inactiveOpacity={0.15}
            pointSize={5}
            activePointSize={16}
            inactivePointSize={0}
            //   pointColor={{ theme: "background" }}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            //   pointBorderColor={{ from: "serie.color" }}
            //   axisTop={{
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     legend: "",
            //     legendPosition: "middle",
            //     legendOffset: -36,
            //   }}
            //   axisBottom={{
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     legend: "",
            //     legendPosition: "middle",
            //     legendOffset: 32,
            //   }}
            //   axisLeft={{
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     //     legend: "ranking",
            //     legendPosition: "middle",
            //     legendOffset: -40,
            //   }}
            margin={{ top: 20, right: 50, bottom: 40, left: 100 }}
            //   axisRight={null}
          />
        </Box>
      </FlexColumnWrapper>
    </Box>
  );
};

export default OverviewChart;
