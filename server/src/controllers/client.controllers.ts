import { NextFunction, Request, Response } from "express";
import Product from "../models/product.model";
import ProductStat from "../models/productStats.model";

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
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product,
          stat,
        };
      })
    );
    res
      .status(200)
      .json({ counts: products.length, products: productWithStats });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    }
    res.status(404).json({ message: "Unknown error occured!" });
  }
};
