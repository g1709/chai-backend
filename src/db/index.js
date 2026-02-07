import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(); // .env auto read karega

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });
