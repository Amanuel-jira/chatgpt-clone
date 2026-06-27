import Groq from "groq-sdk";
import db from "../../../../db/db.config.js";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function createConversationService(question) {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: question }],
    });

    const answer = completion.choices[0].message.content;

    const [userRow] = await db.execute(
      "INSERT INTO conversations (role, content) VALUES (?, ?)",
      ["user", question],
    );

    const [assistantRow] = await db.execute(
      "INSERT INTO conversations (role, content) VALUES (?, ?)",
      ["assistant", answer],
    );

    return {
      userConversation: {
        id: userRow.insertId,
        role: "user",
        content: question,
      },
      assistantConversation: {
        id: assistantRow.insertId,
        role: "assistant",
        content: answer,
      },
    };
  } catch (error) {
    throw error;
  }
}

export async function getConversationsService() {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM conversations ORDER BY id ASC",
    );
    return rows;
  } catch (error) {
    throw error;
  }
}
