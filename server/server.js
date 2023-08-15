import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./common/dbConnection.js";
import model from "./models/transactions.js";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// async function serverConnect() {
//   server = await dbConnect();
// // }
// serverConnect().then(() => console.log("Connected"));
app.get("/", (req, res) => res.send("Yes Working and  Connected "));
app.get("/transaction", async (req, res) => {
  try {
    let result = await model.find();
    console.log(result);
    return res.json(result);
  } catch (error) {
    return res.json({ message: "Failed to get" });
  }
});

app.post("/transaction", async (req, res) => {
  console.log(req.body);
  const { amount, description, date } = req.body;
  await dbConnect("Expenses");
  try {
    let doc = new model({
      amount,
      description,
      date,
    });
    let result = await doc.save();
    console.log(result);
    return res.status(201).json({ response: result });
  } catch (error) {
    console.log(error);
    res.status(500).json("Unable to submit");
  }
});
app.listen(process.env.LocalPORT, () =>
  console.log(`Server is Started at http://localhost:${process.env.LocalPORT}`)
);
