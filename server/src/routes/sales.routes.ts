import express from "express";
import { GET_SALES } from "../controllers/sales.controllers";
const router = express.Router();
router.route("/sales").get(GET_SALES);
export default router;
