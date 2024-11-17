const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "A user must have a full name"],
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "A user must have an email address"],
      validate: [validator.isEmail, "Only valid emails are accepted"],
    },
    password: {
      type: String,
      required: [true, "A user must have a password"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "A user must have a phone number"],
      unique: true,
    },
    role: {
      type: String,
      enum: {
        values: ["jobSeeker", "recruiter", "admin"],
        message: "Role is either: jobSeeker, recruiter or admin",
      },
      required: [true, "A user must have a role"],
    },
    profile: {
      bio: String,
      skills: [String],
      resume: String, // URL to resume file
      resumeOriginalName: String,
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model("User", userSchema)

module.exports = User
