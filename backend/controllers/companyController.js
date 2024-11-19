const catchAsync = require("../utils/catchAsync")
const AppError = require("../utils/appError")
const Company = require("../models/companyModel")

exports.registerCompany = catchAsync(async (req, res, next) => {
  if (!req.body.companyName) {
    return next(new AppError("The name of the company is required", 400))
  }

  let company = await Company.findOne({ companyName })
  if (company)
    return next(new AppError("You can't register the same company", 400))

  company = await Company.create({
    companyName: req.body.companyName,
    userId: req.user._id,
  })

  res.status(200).json({
    status: "success",
    data: {
      company,
    },
  })
})

exports.getCompany = catchAsync(async (req, res, next) => {
  const userId = req.user._id

  const companies = await Company.find({ userId })
  if (!companies) return next(new AppError("No companies found!", 404))

  res.status(200).json({
    status: "success",
    data: {
      companies,
    },
  })
})

exports.getCompanyById = catchAsync(async (req, res, next) => {
  const companyId = req.params.companyId

  const company = await Company.findById(companyId)
  if (!company) return next(new AppError("No such company found!", 404))

  res.status(200).json({
    status: "success",
    data: {
      company,
    },
  })
})

exports.updateCompany = catchAsync(async (req, res, next) => {
  const userId = req.user._id
  const companyId = req.params.companyId

  const company = await Company.findById(companyId)
  if (userId !== company.userId)
    return next(
      new AppError("You are not authorized to update this company", 403)
    )

  const { companyName, description, website, location } = req.body
  // const file = req.file

  const updatedData = { companyName, description, website, location }
  const updatedCompany = await Company.findByIdAndUpdate(
    companyId,
    updatedData,
    {
      new: true,
      runValidators: true,
    }
  )

  res.status(200).json({
    status: "success",
    message: "Company updated successfully!",
    data: {
      updatedCompany,
    },
  })
})
