import {
  createConversationService,
  getConversationsService,
} from "../Service/chat.service.js";

export async function createConversationController(req, res) {
  try {
    const { question } = req.body;
    const result = await createConversationService(question);
    res.status(201).json({
      success: true,
      message: "Conversation created successfully",
      data: result,
    });
  } catch (error) {
    throw error;
  }
}

export async function getConversationsController(req, res) {
  try {
    const conversations = await getConversationsService();
    res.json({
      success: true,
      data: { conversations },
    });
  } catch (error) {
    throw error;
  }
}
