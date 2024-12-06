const express = require("express")

const companyController = require("../controllers/companyController")
const isAuthenticated = require("../middlewares/isAuthenticated")
const singleUpload = require("../middlewares/multer")

const router = express.Router()

// authenticate all the routes after this middleware
router.use(isAuthenticated)

router.post("/register", companyController.registerCompany)
router.get("/my-companies", companyController.getCompany)
router
  .route("/:companyId")
  .get(companyController.getCompanyById)
  .patch(singleUpload, companyController.updateCompany)

module.exports = router
