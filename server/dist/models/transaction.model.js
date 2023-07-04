"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var TransactionSchema = new mongoose_1.default.Schema({
    userId: String,
    user: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "User",
    },
    // userId: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    // },
    cost: String,
    products: {
        type: [mongoose_1.default.Types.ObjectId],
        of: Number,
    },
    createdAt: { type: Date, default: Date.now },
    // products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
});
var Transaction = mongoose_1.default.model("Transaction", TransactionSchema);
exports.default = Transaction;
