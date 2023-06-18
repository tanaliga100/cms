import express from "express";
import { GET_PRODUCTS } from "../controllers/client.controllers";
const router = express.Router();

router.route("/products").get(GET_PRODUCTS);

export default router;
