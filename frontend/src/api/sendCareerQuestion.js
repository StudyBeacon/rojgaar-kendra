// frontend/src/api/sendCareerQuestion.js
import axios from "axios";

export async function sendCareerQuestion(message, topic = "general") {
  try {
    const res = await axios.post("http://localhost:5000/api/career-help", {
      message,
      topic,
    });
    return res.data.reply;
  } catch (err) {
    console.error("❌ Gemini error:", err.response?.data || err.message);
    return "Something went wrong.";
  }
}