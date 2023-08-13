import express from "express";
import cors from "cors";
import config from "./utils/config.js";
import mongoose from "mongoose";
import chatRouter from "./routes/chatRouter.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const connectionToTheDatabase = async () => {
  await mongoose.connect(config.MONGODB);
  console.log("Connected to the database");
};

connectionToTheDatabase();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/chat", chatRouter);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  } else {
    res.type("txt").send("404 Not Found");
  }
});

export default app;
