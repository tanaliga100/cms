import { Box, useTheme } from "@mui/material";
import { useMemo } from "react";

interface IProps {
  view?: string;
  isDashboard?: boolean;
  data?: any;
}

const OverViewChart: React.FC<IProps> = ({ view, data, isDashboard }) => {
  const theme = useTheme();
  console.log("data", data);

  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    // early return if empty;
    if (!data) return [];

    // assignment
    const { monthlyData } = data;
    const totalSalesLine = {
      id: "totalSales",
      color: "crimson",
      data: [],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: "teal",
      data: [],
    };

    Object.values(monthlyData).reduce(
      (acc: any, { month: any, totalSales: any, totalUnits: any }) => {
        return acc;
      },
      {
        sales: 0,
        units: 0,
      }
    );
  }, [data]);

  return <Box>OverViewChart</Box>;
};

export default OverViewChart;
