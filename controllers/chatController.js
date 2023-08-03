import Chat from "../model/Chat.js";

const getAllMessages = async (_req, res) => {
  const messages = await Chat.find({});
  res.status(200).json(messages);
};

const createChat = async (req, res) => {
  try {
    const { name, message } = req.body;
    const newChat = new Chat({
      name,
      message,
    });

    const savedChat = await newChat.save();
    res.status(200).json(savedChat);
  } catch (error) {
    console.log(error);
  }
};

export default {
  createChat,
  getAllMessages,
};
