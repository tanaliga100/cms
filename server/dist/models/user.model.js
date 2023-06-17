"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    occupation: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    transactions: {
        type: Array,
    },
    role: {
        type: String,
        enum: ["user", "admin", "superadmin"],
        default: "admin",
    },
}, { timestamps: true });
var User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
