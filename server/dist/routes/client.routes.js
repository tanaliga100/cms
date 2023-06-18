"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var client_controllers_1 = require("../controllers/client.controllers");
var router = express_1.default.Router();
router.route("/products").get(client_controllers_1.GET_PRODUCTS);
exports.default = router;
