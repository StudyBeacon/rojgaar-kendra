const express = require("express")

const jobController = require("../controllers/jobController")
const isAuthenticated = require("../middlewares/isAuthenticated")

const router = express.Router()

router.get("/", jobController.getAllJobs)
router.get("/:jobId", jobController.getJobById)

// authenticate all the routes after this middleware
router.use(isAuthenticated)

router.post("/post", jobController.postJob)
router.get("/my-jobs", jobController.getJobsByUser)

module.exports = router
