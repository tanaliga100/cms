"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var OverAllStatSchema = new mongoose_1.default.Schema({
    totalCustomers: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number,
        },
    ],
    dailyData: [
        {
            date: String,
            totalSales: Number,
            totalUnits: Number,
        },
    ],
    salesByCategory: {
        type: Map,
        of: Number,
    },
}, { timestamps: true });
var OverAllStat = mongoose_1.default.model("OverAllStat", OverAllStatSchema);
exports.default = OverAllStat;
