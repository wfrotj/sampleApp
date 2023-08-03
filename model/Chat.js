import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
