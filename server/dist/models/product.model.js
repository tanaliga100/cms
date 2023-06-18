"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ProductSchema = new mongoose_1.default.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
}, { timestamps: true });
var Product = mongoose_1.default.model("Product", ProductSchema);
exports.default = Product;
