import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useMemo } from "react";
interface IProps {
  view?: string;
  isDashboard?: boolean;
  data?: Data;
}

interface DailyData {
  _id: string;
  date: string;
  totalSales: number;
  totalUnits: number;
}
interface MonthlyData {
  _id: string;
  month: string;
  totalSales: number;
  totalUnits: number;
}
interface Data {
  __v: number;
  _id: string;
  createdAt: string;
  totalCustomers: number;
  updatedAt: string;
  year: number;
  yearlyTotalSales: number;
  yearlyTotalSoldUnits: number;
  dailyData: DailyData[];
  monthlyData: MonthlyData[];
  salesByCategory: {
    accessories: number;
    clothing: number;
    misc: number;
    shoes: number;
  };
}

const OverViewChart: React.FC<IProps> = (props: IProps) => {
  const theme = useTheme();
  console.log("DATA", props.data);

  //   console.log("ACTIVE VIEW", props.view);

  //   console.log("chrt", data);

  //   FORMAT THE DATE HERE...
  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!props.data)
      return [
        { id: "", color: "", data: [] },
        { id: "", color: "", data: [] },
      ];

    const { monthlyData } = props.data;

    const totalSalesLine: TotalSalesLine = {
      id: "totalSales",
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine: TotalUnitsLine = {
      id: "totalUnits",
      color: theme.palette.primary.main,
      data: [],
    };

    Object.values(monthlyData).reduce(
      (accumulator, { month, totalSales, totalUnits }) => {
        const currentSales = accumulator.sales + totalSales;
        const currentUnits = accumulator.units + totalUnits;

        // assign the values for both SALES AND UNITS
        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: month, y: currentSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: month, y: currentUnits },
        ];

        return { sales: currentSales, units: currentUnits };
      },
      { sales: 0, units: 0 }
    );

    return [[totalSalesLine], [totalUnitsLine]];
  }, [props.data]);

  console.log("TOTAL SALES", totalSalesLine);
  console.log("TOTAL UNITS", totalUnitsLine);

  return (
    <Box
      sx={{
        width: "95%",
        height: "100%",
        margin: "0 auto",
        color: theme.palette.text.secondary,
        padding: "0 1rem 0rem 1rem",
      }}
    >
      <ResponsiveLine
        data={props.view === "sales" ? totalSalesLine : totalUnitsLine}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Monthy Data",
          legendOffset: 40,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 10,
          tickPadding: 10,
          tickRotation: 10,
          legend: "SALES",
          legendOffset: 20,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        colors={theme.palette.secondary.main}
        lineWidth={1}
        pointSize={14}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderWidth={4}
        pointBorderColor={{ from: "serieColor" }}
        enablePointLabel={true}
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0.05}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default OverViewChart;

//    totalSalesLine.data = [
//      ...totalSales.data,
//      { x: month, y: currentSales },
//    ];

interface YourData {
  monthlyData: { [key: string]: MonthlyData };
}

interface MonthlyData {
  month: string;
  totalSales: number;
  totalUnits: number;
}

interface TotalSalesLine {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}

interface TotalUnitsLine {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}
