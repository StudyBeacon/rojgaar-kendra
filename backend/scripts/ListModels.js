// scripts/listModels.js
require("dotenv").config();
const axios = require("axios");

async function listModels() {
  const url = `https://generativelanguage.googleapis.com/v1beta2/models?key=${process.env.GEMINI_API_KEY}`;
  const { data } = await axios.get(url);
  console.log(data.models);
}

listModels();