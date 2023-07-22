import { Data, TotalSalesLine, TotalUnitsLine } from "../types/index";

export function FormatMonthlyData(data: Data) {
  //   console.log("args passed in", data);

  const { monthlyData } = data;

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

  Object.values(monthlyData).reduce(
    (acc, { month, totalSales, totalUnits }) => {
      const currentSales = acc.sales + totalSales;
      const currentUnits = acc.units + totalUnits;

      // ASSIGN THE VALUE HERE FOR THE CHART...

      totalSalesLine.data = [
        ...(totalSalesLine.data as any),
        {
          x: month.toUpperCase().split("").slice(0, 3).join(""),
          y: currentSales,
        },
      ];
      totalUnitsLine.data = [
        ...(totalUnitsLine.data as any),
        {
          x: month.toUpperCase().split("").slice(0, 3).join(""),
          y: currentUnits,
        },
      ];

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

//   //   FORMAT THE DATE HERE...
//   const [totalSalesLine, totalUnitsLine] = useMemo(() => {
//     if (!data)
//       return [
//         { id: "", color: "", data: [] },
//         { id: "", color: "", data: [] },
//       ];

//     const { monthlyData } = data;

//     const totalSalesLine: TotalSalesLine = {
//       id: "TOTAL SALES",
//       color: theme.palette.secondary.main,
//       data: [],
//     };
//     const totalUnitsLine: TotalUnitsLine = {
//       id: "TOTAL UNITS",
//       color: theme.palette.primary.main,
//       data: [],
//     };

//     Object.values(monthlyData).reduce(
//       (accumulator, { month, totalSales, totalUnits }) => {
//         const currentSales = accumulator.sales + totalSales;
//         const currentUnits = accumulator.units + totalUnits;

//         // assign the values for both SALES AND UNITS
//         totalSalesLine.data = [
//           ...totalSalesLine.data,
//           { x: month, y: currentSales },
//         ];
//         totalUnitsLine.data = [
//           ...totalUnitsLine.data,
//           { x: month, y: currentUnits },
//         ];

//         return { sales: currentSales, units: currentUnits };
//       },
//       { sales: 0, units: 0 }
//     );

//     return [[totalSalesLine], [totalUnitsLine]];
//   }, [data]);

//   console.log("TOTAL SALES", totalSalesLine);
//   console.log("TOTAL UNITS", totalUnitsLine);
