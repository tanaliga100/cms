import { Box, FormControl, Typography, useTheme } from "@mui/material";
import { ResponsiveBump } from "@nivo/bump";
import { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useOutletContext } from "react-router-dom";
import { TotalSalesLine, TotalUnitsLine } from "../../types";

const DailyChart = () => {
  // CONTEXT
  const ctx = useOutletContext<any>();
  const data: any = ctx.data.overAllStats;

  // HOOKS & THEMES
  const [view, setView] = useState<any>("");
  const theme = useTheme();
  // FOR CALENDAR
  const [startDate, setStartDate] = useState<Date>(new Date("2021-02-01"));
  const [endDate, setEndDate] = useState<Date>(new Date("2021-03-01"));

  //   FORMAT THE DATE HERE...
  const [formattedData] = useMemo(() => {
    if (!data)
      return [
        { id: "", color: "", data: [] },
        { id: "", color: "", data: [] },
      ];

    const { dailyData } = data;

    const totalSalesLine: TotalSalesLine = {
      id: "TOTAL SALES",
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine: TotalUnitsLine = {
      id: "TOTAL UNITS",
      color: theme.palette.primary.main,
      data: [],
    };

    // MAP THE DATA
    Object.values(dailyData).forEach((each: any) => {
      const { date, totalSales, totalUnits } = each;
      //  console.log("FOREACH ", each);

      const formattedData = new Date(date);
      if (formattedData >= startDate && formattedData <= endDate) {
        const splitDate = date.substring(date.indexOf("-" + 1));

        // assign the values for both SALES AND UNITS
        totalSalesLine.data = [
          ...(totalSalesLine.data as any),
          { x: splitDate, y: totalSales } as any,
        ];
        totalUnitsLine.data = [
          ...(totalUnitsLine.data as any),
          { x: splitDate, y: totalUnits } as any,
        ];
      }
    });
    const formattedData = [totalSalesLine, totalUnitsLine];
    console.log("FORMATTED DATA", formattedData);

    return [formattedData];
  }, [data, startDate, endDate]);

  //   console.log("Daily", formattedData);

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
      {/* DAILY CHART */}
      <Box sx={{ width: "90%", height: "70vh", padding: "2rem" }}>
        <ResponsiveBump
          //   data={view === "sales" ? memo[0].data : memo[1].data}
          //   data={view === "sales" ? totalSalesLine : totalUnitsLine}
          data={formattedData}
          colors={{ scheme: "spectral" }}
          lineWidth={3}
          // activeLineWidth={6}
          // inactiveLineWidth={3}
          // inactiveOpacity={0.15}
          // pointSize={5}
          // activePointSize={16}
          // inactivePointSize={0}
          // pointBorderWidth={3}
          // activePointBorderWidth={3}
          margin={{ top: 20, right: 100, bottom: 40, left: 50 }}
        />
      </Box>
    </Box>
  );
};

export default DailyChart;
