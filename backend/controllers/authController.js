const catchAsync = require("../utils/catchAsync")
const AppError = require("../utils/appError")

exports.register = catchAsync(async (req, res, next) => {
  const { fullName, email, password, phoneNumber, role } = req.body

  if (!fullName || !email || !password || !phoneNumber || !role) {
    return next(new AppError("Something is missing!", 400))
  }
})
