import express from "express";
import { GET_USER } from "../controllers/generals.controllers";
const router = express.Router();

router.route("/user/:id").get(GET_USER);

export default router;
