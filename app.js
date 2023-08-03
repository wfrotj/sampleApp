import express from "express";
import cors from "cors";
import config from "./utils/config.js";
import mongoose from "mongoose";
import chatRouter from "./routes/chatRouter.js";

const app = express();

const connectionToTheDatabase = async () => {
  await mongoose.connect(config.MONGODB);
  console.log("Connected to the database");
};

connectionToTheDatabase();

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));
app.use("/chat", chatRouter);

export default app;
