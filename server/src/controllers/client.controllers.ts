import { NextFunction, Request, Response } from "express";
import Product from "../models/product.model";
import ProductStat from "../models/productStats.model";
import User from "../models/user.model";

export const GET_PRODUCTS = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // GET THE PRODUCTS
    const products = await Product.find({});
    if (!products) {
      res.status(404).json({ message: "Product not found" });
    }
    // GET THE PRODUCT STATS
    const productWithStats = await Promise.all(
      products.map(async (product) => {
        const stats = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product.toObject(),
          stats,
        };
      })
    );

    res.status(200).json({
      message: "All Products",
      counts: products.length,
      // products: products,
      productWithStats: productWithStats,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    }
    res.status(404).json({ message: "Unknown error occured!" });
  }
};

export const GET_CUSTOMERS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    if (!customers) {
      return res.status(404).json({ message: "No customers" });
    }
    res.status(200).json({ counts: customers.length, customers });
  } catch (error) {
    return res.status(500).json({ message: " Error occured" });
  }
};
