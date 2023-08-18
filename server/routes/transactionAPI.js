import express from "express";
const router = express.Router();
import model from "../models/transactions.js";

router.get("/", async (req, res) => {
  try {
    let result = await model.find().sort({ date: -1 });

    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Failed to get" });
  }
});

router.post("/", async (req, res) => {
  const { amount, description, date } = req.body;
  try {
    let doc = new model({
      amount,
      description,
      date,
    });
    let result = await doc.save();
    return res.status(201).json({ response: result });
  } catch (error) {
    console.log(error);
    res.status(500).json("Unable to submit");
  }
});

export default router;
