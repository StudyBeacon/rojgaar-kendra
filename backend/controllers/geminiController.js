// backend/controllers/geminiController.js

require("dotenv").config();
const axios = require("axios");

exports.sendToGemini = async (req, res) => {
  const { message, topic } = req.body;

  // 1) Validate input
  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Please send a valid message." });
  }

  // 2) Select your “system” prompt
  const systemPrompts = {
    resume:   "You are an expert frontend resume coach.",
    interview:"You are a senior frontend engineer giving interview tips.",
    general:  "You are a helpful tech career mentor.",
  };
  const system = systemPrompts[topic] || systemPrompts.general;

  // 3) Build the full prompt text
  const promptText = `${system}\nUser: ${message}`;

  try {
    // 4) Hit the exact v1beta2 endpoint with your API key in the URL
    const url = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${process.env.GEMINI_API_KEY}`;

    // 5) Send the JSON body here (second arg of axios.post)
    const { data } = await axios.post(
      url,
      {
        prompt:          { text: promptText },
        temperature:      0.7,
        maxOutputTokens: 200,
        candidateCount:   1,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    // 6) Pull out the first candidate’s output
    const reply = data.candidates?.[0]?.output?.trim() || "";

    // 7) Send it back to the client
    return res.status(200).json({ reply });

  } catch (err) {
    console.error("❌ Gemini/Text-Bison Error:", err.response?.data || err.message);
    return res
      .status(500)
      .json({ error: "AI request failed. Check server logs for details." });
  }
};