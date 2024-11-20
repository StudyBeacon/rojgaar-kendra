const express = require("express")

const jobController = require("../controllers/jobController")
const isAuthenticated = require("../middlewares/isAuthenticated")

const router = express.Router()

// authenticate all the routes after this middleware
router.use(isAuthenticated)

router.post("/post", jobController.postJob)
router.get("/", jobController.getAllJobs)
router.get("/:jobId", jobController.getJobById)
router.get("/my-jobs", jobController.getJobsByUser)

module.exports = router
