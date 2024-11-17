const mongoose = require("mongoose")

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A company must have a name"],
    },
    description: String,
    website: {
      type: String,
      required: [true, "A company must have a website"],
    },
    location: String,
    logo: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "The id of user who listed the company must be present"],
    },
  },
  {
    timestamps: true,
  }
)

const Company = mongoose.model("Company", companySchema)

module.exports = Company
