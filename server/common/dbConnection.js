import mongo from "mongodb";
import mongoose from "mongoose";

const connectLocalDB = (database) => {
  mongoose
    .connect(`${process.env.localURL}/Expenses`)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => console.log(err));
};
export default connectLocalDB;
