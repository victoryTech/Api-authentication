import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "geekshop",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Succeessfully...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
