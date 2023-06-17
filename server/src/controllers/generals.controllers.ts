import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";

const GET_USER = async (req: Request, res: Response, next: NextFunction) => {
  //get the req.body || req.params
  try {
    const params = req.params;
    console.log(params);
    res.status(200).send("User Existed");
    const user = await User.find();
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export { GET_USER };
