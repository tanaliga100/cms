import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useMemo } from "react";
interface IProps {
  view?: string;
  isDashboard?: boolean;
  data?: any;
}

const OverViewChart: React.FC<IProps> = ({ view, data, isDashboard }) => {
  const theme = useTheme();
  console.log("chrt", data);

  //   FORMAT THE DATE HERE...
  const [totalSalesLine, totalUnitsLine] = useMemo<
    [TotalSalesLine, TotalUnitsLine]
  >(() => {
    if (!data)
      return [
        { id: "", color: "", data: [] },
        { id: "", color: "", data: [] },
      ];

    const { monthlyData } = data as YourData;

    const totalSalesLine: any = {
      id: "totalSales",
      //  color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine: any = {
      id: "totalUnits",
      //  color: theme.palette.secondary.contrastText,
      data: [],
    };
    Object.values(monthlyData).reduce(
      (accumulator, { month, totalSales, totalUnits }) => {
        const currentSales = accumulator.sales + totalSales;
        const currentUnits = accumulator.units + totalUnits;

        // assign the values
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

    return [totalSalesLine, totalUnitsLine];
  }, [data]);

  const chartData = [
    {
      id: "japan",
      color: "hsl(4, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 144,
        },
        {
          x: "helicopter",
          y: 241,
        },
        {
          x: "boat",
          y: 258,
        },
        {
          x: "train",
          y: 276,
        },
        {
          x: "subway",
          y: 269,
        },
        {
          x: "bus",
          y: 251,
        },
        {
          x: "car",
          y: 19,
        },
        {
          x: "moto",
          y: 300,
        },
        {
          x: "bicycle",
          y: 42,
        },
        {
          x: "horse",
          y: 83,
        },
        {
          x: "skateboard",
          y: 117,
        },
        {
          x: "others",
          y: 103,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(121, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 205,
        },
        {
          x: "helicopter",
          y: 240,
        },
        {
          x: "boat",
          y: 74,
        },
        {
          x: "train",
          y: 87,
        },
        {
          x: "subway",
          y: 131,
        },
        {
          x: "bus",
          y: 109,
        },
        {
          x: "car",
          y: 11,
        },
        {
          x: "moto",
          y: 7,
        },
        {
          x: "bicycle",
          y: 253,
        },
        {
          x: "horse",
          y: 138,
        },
        {
          x: "skateboard",
          y: 27,
        },
        {
          x: "others",
          y: 263,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(351, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 237,
        },
        {
          x: "helicopter",
          y: 85,
        },
        {
          x: "boat",
          y: 171,
        },
        {
          x: "train",
          y: 297,
        },
        {
          x: "subway",
          y: 22,
        },
        {
          x: "bus",
          y: 171,
        },
        {
          x: "car",
          y: 13,
        },
        {
          x: "moto",
          y: 60,
        },
        {
          x: "bicycle",
          y: 217,
        },
        {
          x: "horse",
          y: 70,
        },
        {
          x: "skateboard",
          y: 216,
        },
        {
          x: "others",
          y: 221,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(13, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 84,
        },
        {
          x: "helicopter",
          y: 47,
        },
        {
          x: "boat",
          y: 74,
        },
        {
          x: "train",
          y: 200,
        },
        {
          x: "subway",
          y: 124,
        },
        {
          x: "bus",
          y: 110,
        },
        {
          x: "car",
          y: 70,
        },
        {
          x: "moto",
          y: 193,
        },
        {
          x: "bicycle",
          y: 243,
        },
        {
          x: "horse",
          y: 87,
        },
        {
          x: "skateboard",
          y: 170,
        },
        {
          x: "others",
          y: 45,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(231, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 216,
        },
        {
          x: "helicopter",
          y: 176,
        },
        {
          x: "boat",
          y: 77,
        },
        {
          x: "train",
          y: 209,
        },
        {
          x: "subway",
          y: 295,
        },
        {
          x: "bus",
          y: 70,
        },
        {
          x: "car",
          y: 91,
        },
        {
          x: "moto",
          y: 150,
        },
        {
          x: "bicycle",
          y: 146,
        },
        {
          x: "horse",
          y: 211,
        },
        {
          x: "skateboard",
          y: 256,
        },
        {
          x: "others",
          y: 178,
        },
      ],
    },
  ];

  return (
    <Box sx={{ width: "95%", height: "95%", margin: "0 auto" }}>
      <ResponsiveLine
        data={chartData}
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
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        pointSize={5}
        pointColor={{ theme: "labels.text.fill" }}
        pointBorderColor={{ from: "serieColor" }}
        enablePointLabel={true}
        pointLabelYOffset={-15}
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
            itemWidth: 59,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 11,
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
