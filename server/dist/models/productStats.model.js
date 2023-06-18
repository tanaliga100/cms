"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ProductStatsSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
var ProductStat = mongoose_1.default.model("ProductStat", ProductStatsSchema);
exports.default = ProductStat;
