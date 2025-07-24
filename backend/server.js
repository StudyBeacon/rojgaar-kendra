require("dotenv").config();               // 1. Load .env
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db"); // Your existing DB connection utility

const app = express();

// 2. Middleware
app.use(cors({ origin: "http://localhost:5137", credentials: true }));
app.use(express.json());

// 3. Mount Gemini-based career chat route
const geminiRoutes = require("./routes/gptRoutes"); // Uses Gemini controller now
app.use("/api", geminiRoutes);

// 4. (Optional) Mount other routes under /api/v1 here
// const jobRoutes = require("./routes/jobRoutes");
// app.use("/api/v1", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`✅ Server running at port ${PORT}`);
});