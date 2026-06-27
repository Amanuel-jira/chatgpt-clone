import express from "express";

const chatRouter = express.Router();

import { createConversationController, getConversationsController } from "./Controller/chat.controller.js";

// /api/chat/conversations
chatRouter.post("/conversations", createConversationController);


chatRouter.get("/conversations", getConversationsController);



export default chatRouter;