const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const morgan = require("morgan")

const userRouter = require("./routes/userRoutes")
const companyRouter = require("./routes/companyRoutes")
const jobRouter = require("./routes/jobRoutes")
const applicationRouter = require("./routes/applicationRoutes")
const globalErrorHandler = require("./controllers/errorController")
const AppError = require("./utils/appError")

const app = express()

// development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// test middleware
app.use((req, res, next) => {
  // console.log(process.env.NODE_ENV)
  // console.log(req.user._id)
  next()
})

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
}
app.use(cors(corsOptions))

// routes
app.use("/api/v1/user", userRouter)
app.use("/api/v1/company", companyRouter)
app.use("/api/v1/job", jobRouter)
app.use("/api/v1/application", applicationRouter)

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// global error handler
app.use(globalErrorHandler)

module.exports = app
