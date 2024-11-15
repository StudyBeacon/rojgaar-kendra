const mongoose = require("mongoose")
require("dotenv").config({})

const app = require("./app")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB)
    console.log("DB connection established successfully!")
  } catch (e) {
    console.log(e)
  }
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  connectDB()
  console.log(`Server running at port ${PORT}`)
})
