import express from "express";
import {
  GET_CUSTOMERS,
  GET_GEOGRAPHY,
  GET_PRODUCTS,
  GET_TRANSACTIONS,
} from "../controllers/client.controllers";
const router = express.Router();

router.route("/products").get(GET_PRODUCTS);
router.route("/customers").get(GET_CUSTOMERS);
router.route("/transactions").get(GET_TRANSACTIONS);
router.route("/geography").get(GET_GEOGRAPHY);

export default router;
