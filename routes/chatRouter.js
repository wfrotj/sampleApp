import express from "express";
import chatController from "../controllers/chatController.js";

const chatRouter = express.Router();

chatRouter.post("/", chatController.createChat);
chatRouter.get("/", chatController.getAllMessages);

export default chatRouter;
