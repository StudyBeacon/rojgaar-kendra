const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const morgan = require("morgan")

// const userRouter = require("./routes/userRoutes")
const globalErrorHandler = require("./controllers/errorController")
const authController = require("./controllers/authController")

const app = express()

// development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use((req, res, next) => {
  // console.log(process.env.NODE_ENV)

  next()
})

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
}
app.use(cors(corsOptions))

// app.use("/", userRouter)
app.post("/register", authController.register)
app.post("/login", authController.login)
app.post("/logout", authController.logout)
app.patch("/updateMe", authController.updateProfile)

app.use(globalErrorHandler)

module.exports = app
