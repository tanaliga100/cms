import { Box, FormControl, Typography, useTheme } from "@mui/material";
import { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useOutletContext } from "react-router-dom";
import { FormatDailyData } from "../../utils/formatDailyData";

const DailyChart = () => {
  // CONTEXT
  const ctx = useOutletContext<any>();
  const data: any = ctx.data.overAllStats;

  // HOOKS & THEMES
  const [view, setView] = useState<any>("");
  const theme = useTheme();

  // FORMAT DATA
  const memo: any = useMemo(() => FormatDailyData(data), [data]);
  console.log("MEMO", memo);

  // FOR CALENDAR

  const [startDate, setStartDate] = useState<Date>(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState<Date>(new Date("2014/02/10"));

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
      <Box sx={{ display: "flex", gap: "5rem" }}>
        <Box sx={{ justifyContent: "left", display: "flex", gap: "1rem" }}>
          <FormControl sx={{ justifyContent: "center" }}>
            <Typography variant="caption">Start Date</Typography>
          </FormControl>
          <DatePicker
            className="calendar"
            showIcon
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </Box>
        <Box sx={{ justifyContent: "left", display: "flex", gap: "1rem" }}>
          <FormControl sx={{ justifyContent: "center" }}>
            <Typography variant="caption">End Date</Typography>
          </FormControl>
          <DatePicker
            className="calendar"
            showIcon
            selected={endDate}
            onChange={(date: Date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DailyChart;
