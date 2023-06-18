import mongoose from "mongoose";
const ProductStatsSchema = new mongoose.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalsales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalsales: Number,
        totalUnits: Number,
      },
    ],
  },
  { timestamps: true }
);
const ProductStat = mongoose.model("ProductStat", ProductStatsSchema);
export default ProductStat;
