"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_GEOGRAPHY = exports.GET_TRANSACTIONS = exports.GET_CUSTOMERS = exports.GET_PRODUCTS = void 0;
require("dotenv").config();
// import { getCountryIso3 } from "country-iso-2-to-3";
var axios_1 = __importDefault(require("axios"));
var product_model_1 = __importDefault(require("../models/product.model"));
var productStats_model_1 = __importDefault(require("../models/productStats.model"));
var transaction_model_1 = __importDefault(require("../models/transaction.model"));
var user_model_1 = __importDefault(require("../models/user.model"));
var GET_PRODUCTS = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var products, productWithStats, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, product_model_1.default.find({})];
            case 1:
                products = _a.sent();
                if (!products) {
                    res.status(404).json({ message: "Product not found" });
                }
                return [4 /*yield*/, Promise.all(products.map(function (product) { return __awaiter(void 0, void 0, void 0, function () {
                        var stats;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, productStats_model_1.default.find({
                                        productId: product._id,
                                    })];
                                case 1:
                                    stats = _a.sent();
                                    return [2 /*return*/, __assign(__assign({}, product.toObject()), { stats: stats })];
                            }
                        });
                    }); }))];
            case 2:
                productWithStats = _a.sent();
                res.status(200).json({
                    message: "All Products",
                    counts: products.length,
                    // products: products,
                    productWithStats: productWithStats,
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                if (error_1 instanceof Error) {
                    res.status(404).json({ message: error_1.message });
                }
                res.status(404).json({ message: "Unknown error occured!" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.GET_PRODUCTS = GET_PRODUCTS;
var GET_CUSTOMERS = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var customers, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_model_1.default.find({ role: "user" }).select("-password")];
            case 1:
                customers = _a.sent();
                if (!customers) {
                    return [2 /*return*/, res.status(404).json({ message: "No customers" })];
                }
                res
                    .status(200)
                    .json({ message: "All Users", counts: customers.length, customers: customers });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: " Error occured" })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.GET_CUSTOMERS = GET_CUSTOMERS;
var GET_TRANSACTIONS = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, page, _c, pageSize, _d, sort_1, _e, search, generateSort, sortFormatted, transactionsLength, transactions, error_3;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                console.log(req.body, req.query);
                _f.label = 1;
            case 1:
                _f.trys.push([1, 4, , 5]);
                _a = req.query, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.pageSize, pageSize = _c === void 0 ? 20 : _c, _d = _a.sort, sort_1 = _d === void 0 ? null : _d, _e = _a.search, search = _e === void 0 ? "" : _e;
                generateSort = function () {
                    var _a;
                    var sortParsed = JSON.parse(sort_1);
                    var sortFormatted = (_a = {},
                        _a[sortParsed.field] = sortParsed.sort === "asc" ? 1 : -1,
                        _a);
                    return sortFormatted;
                };
                sortFormatted = Boolean(sort_1) ? generateSort() : {};
                return [4 /*yield*/, transaction_model_1.default.find({})];
            case 2:
                transactionsLength = (_f.sent()).length;
                return [4 /*yield*/, transaction_model_1.default.find({
                        $or: [
                            {
                                cost: { $regex: new RegExp(search, "i") },
                                userId: { $regex: new RegExp(search, "i") },
                            },
                        ],
                    })
                        .sort(sortFormatted)
                        .skip(page * pageSize)
                        .limit(pageSize)];
            case 3:
                transactions = _f.sent();
                res.status(200).json({
                    msg: "ALL TRANSACTIONS",
                    counts: transactionsLength,
                    transactions: transactions,
                });
                return [3 /*break*/, 5];
            case 4:
                error_3 = _f.sent();
                res.status(500).json({ message: " Error occured" });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.GET_TRANSACTIONS = GET_TRANSACTIONS;
var mapboxApiKey = process.env.MAP_BOX_API_KEY || "";
var mapboxBaseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
var GET_GEOGRAPHY = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var users, usersWithCoordinates, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, user_model_1.default.find().select("country city state role")];
            case 1:
                users = _a.sent();
                return [4 /*yield*/, Promise.all(users.map(function (user) { return __awaiter(void 0, void 0, void 0, function () {
                        var location_1, url, response, _a, longitude, latitude, error_5;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    console.log("user", user);
                                    if (!(user.country && user.city)) return [3 /*break*/, 4];
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 3, , 4]);
                                    location_1 = "".concat(user.city, ", ").concat(user.country);
                                    url = "".concat(mapboxBaseUrl).concat(encodeURIComponent(location_1), ".json?access_token=").concat(mapboxApiKey);
                                    return [4 /*yield*/, axios_1.default.get(url)];
                                case 2:
                                    response = _b.sent();
                                    if (response.data.features.length > 0) {
                                        _a = response.data.features[0].center, longitude = _a[0], latitude = _a[1];
                                        return [2 /*return*/, __assign(__assign({}, user.toObject()), { coordinates: { latitude: latitude, longitude: longitude } })];
                                    }
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_5 = _b.sent();
                                    console.error("Geocoding error:", error_5.message);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/, user];
                            }
                        });
                    }); }))];
            case 2:
                usersWithCoordinates = _a.sent();
                res.status(200).json({
                    msg: "Geo",
                    counts: usersWithCoordinates.length,
                    users: usersWithCoordinates,
                });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.GET_GEOGRAPHY = GET_GEOGRAPHY;
