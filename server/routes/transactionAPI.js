import express from "express";
const router = express.Router();
import model from "../models/transactions.js";

router.get("/", async (req, res) => {
  try {
    let result = await model.find().sort({ date: -1 });

    return res
      .status(200)
      .json({ message: "Transaction Fetched Successfull", data: result });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Failed to get" });
  }
});

router.post("/POST", async (req, res) => {
  const { amount, description, date } = req.body;
  if (!amount) {
    return res.status(400).json({ message: "Please Enter Ammount" });
  }
  if (!description) {
    return res.status(400).json({ message: "Please Provide Description" });
  }
  try {
    let doc = new model({
      amount,
      description,
      date,
    });
    let result = await doc.save();
    return res
      .status(201)
      .json({ message: "Transaction Added Successfully", result });
  } catch (error) {
    console.log(error);
    res.status(500).json("Unable to submit");
  }
});

router.put("/PUT/:id", async (req, res) => {
  let { id } = req.params;
  // if (!id) {
  //   return res.send({ message: "Unable to update because didn't received id" });
  // }
  try {
    const result = await model.findByIdAndUpdate(
      { _id: id },
      { $set: req.body }
    );
    return res.status(200).json({ message: "Transaction Updated" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const result = await model.findByIdAndDelete({ _id: id });
    return res.status(200).json({ message: "Transaction Deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
