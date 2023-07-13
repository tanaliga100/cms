import { NextFunction, Request, Response } from "express";
import OverAllStat from "../models/overAllStats.model";

export const GET_SALES = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const overview = await OverAllStat.find({});
    res
      .status(200)
      .json({ msg: "All Stats", counts: overview.length, overview });
  } catch (error) {
    res.status(404).json({ msg: "Error Occured" });
  }
};
