import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";

const GET_USER = async (req: Request, res: Response, next: NextFunction) => {
  //get the req.body || req.params
  try {
    const params = req.params;
    console.log(params);
    const user = await User.findById(params.id);

    // VALIDATION HERE AND RETURN
    if (!user) {
      return res.status(404).json({ message: `User ${params.id} not founds` });
    }
    return res.status(200).json({ message: "Success", user: user });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export { GET_USER };
