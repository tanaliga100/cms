import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  userId: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  // userId: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "User",
  // },
  cost: String,
  products: {
    type: [mongoose.Types.ObjectId],
    of: Number,
  },
  createdAt: { type: Date, default: Date.now },
  // products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
});

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
