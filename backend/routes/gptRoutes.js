// backend/routes/gptRoutes.js

const express = require("express");
const { sendToGemini } = require("../controllers/geminiController"); // ✅ updated import
const router = express.Router();

// POST endpoint for career guidance
router.post("/career-help", sendToGemini); // ✅ swapped handler

module.exports = router;