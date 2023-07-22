import { Data, TotalSalesLine, TotalUnitsLine } from "../types/index";

export function FormatDailyData(data: Data) {
  console.log("args passed in", data);

  const { dailyData } = data;

  const totalSalesLine: TotalSalesLine = {
    id: "SALES",
    //     color: "#34deeb",
    data: [],
  };

  const totalUnitsLine: TotalUnitsLine = {
    id: "UNITS",
    //     color: "#edb168",
    data: [],
  };

  // FORMAT THE DATE HERE...

  Object.values(dailyData).reduce(
    (acc, { date, totalSales, totalUnits }) => {
      const currentSales = acc.sales + totalSales;
      const currentUnits = acc.units + totalUnits;

      // ASSIGN THE VALUE HERE FOR THE CHART...

      //  totalSalesLine.data = [
      //    ...(totalSalesLine.data as any),
      //    {
      //      x: month.toUpperCase().split("").slice(0, 3).join(""),
      //      y: currentSales,
      //    },
      //  ];
      //  totalUnitsLine.data = [
      //    ...(totalUnitsLine.data as any),
      //    {
      //      x: month.toUpperCase().split("").slice(0, 3).join(""),
      //      y: currentUnits,
      //    },
      //  ];

      return {
        sales: currentSales,
        units: currentUnits,
      };
    },
    {
      sales: 0,
      units: 0,
    }
  );
  //   return [[totalSalesLine], [totalUnitsLine]];
  return [
    totalSalesLine,
    totalUnitsLine,
    //     { id: "sample", data: [{ x: "buwan", y: 1231312 }] },
  ];
}
