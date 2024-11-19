const express = require("express")
const authController = require("../controllers/authController")
const isAuthenticated = require("../middlewares/isAuthenticated")

const router = express.Router()

router.post("/register", authController.register)
router.post("/login", authController.login)
router.get("/logout", authController.logout)
router.post("/profile/update", isAuthenticated, authController.updateProfile)

module.exports = router
