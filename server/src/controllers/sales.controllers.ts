import { NextFunction, Request, Response } from "express";
import OverAllStat from "../models/overAllStats.model";

export const GET_SALES = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const overAllStats = await OverAllStat.find();
    res
      .status(200)
      .json({ msg: "Over All Stats", overAllStats: overAllStats[0] });
  } catch (error) {
    res.status(404).json({ msg: "Error Occured" });
  }
};
