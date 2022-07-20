// const dotenv = require(dotenv);
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/connectdb.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// cors policy
app.use(cors());

// Database Connection
connectDB(DATABASE_URL);

//JSON
app.use(express.json());

// Load Routes
app.use("/api/user", userRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in loading the server : ${err}`);
    return;
  }
  console.log(`Server is up and running on port : http://localhost:${port}`);
});
