import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./common/dbConnection.js";
import model from "./models/transactions.js";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import transactionRoutes from "./routes/transactionAPI.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
dbConnect();
app.use("/transaction", transactionRoutes);

app.get("/", (req, res) => res.send("Yes Working and  Connected "));

app.listen(process.env.LocalPORT, () =>
  console.log(`Server is Started at http://localhost:${process.env.LocalPORT}`)
);
