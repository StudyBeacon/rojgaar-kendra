const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "This is coming from backend",
  })
})

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
}
app.use(cors(corsOptions))

module.exports = app
