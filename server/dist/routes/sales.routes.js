"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sales_controllers_1 = require("../controllers/sales.controllers");
var router = express_1.default.Router();
router.route("/sales").get(sales_controllers_1.GET_SALES);
exports.default = router;
