const express = require("express")

const jobController = require("../controllers/jobController")
const isAuthenticated = require("../middlewares/isAuthenticated")

const router = express.Router()

// authenticate all the routes after this middleware
router.use(isAuthenticated)

router.get("/", jobController.getAllJobs)
router.post("/post", jobController.postJob)
router.get("/my-jobs", jobController.getJobsByUser)
router.get("/:jobId", jobController.getJobById)

module.exports = router
