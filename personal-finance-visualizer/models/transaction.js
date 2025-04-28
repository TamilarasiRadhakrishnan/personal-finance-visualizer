import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);

export default Transaction;
