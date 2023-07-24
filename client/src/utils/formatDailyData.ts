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

  Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
    const formattedDate = new Date(date);
  });
}
