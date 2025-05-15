import mongoose from "mongoose";

export const connectDB = async () => {
  const MOGODB_URI =
    "mongodb+srv://rnshawn99:shawn123@cluster0.fufplfo.mongodb.net/express";
  await mongoose.connect(MOGODB_URI).then(() => {
    console.log("Database connected");
  });
};
