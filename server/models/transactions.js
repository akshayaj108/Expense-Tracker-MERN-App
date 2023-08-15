import mongoose from "mongoose";
import { Schema } from "mongoose";

const transactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("transaction", transactionSchema);
