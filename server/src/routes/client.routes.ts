import express from "express";
import { GET_CUSTOMERS, GET_PRODUCTS } from "../controllers/client.controllers";
const router = express.Router();

router.route("/products").get(GET_PRODUCTS);
router.route("/customers").get(GET_CUSTOMERS);

export default router;
