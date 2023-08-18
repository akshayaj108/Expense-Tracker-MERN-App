import mongoose from "mongoose";
import { Schema } from "mongoose";
let nowDate = new Date();

const transactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: nowDate,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("transaction", transactionSchema);
