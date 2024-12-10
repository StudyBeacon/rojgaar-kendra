import { useSelector } from "react-redux"
import LatestJobCards from "./LatestJobCards"
import { motion } from "framer-motion"

const LatestJobs = () => {
  const { allJobs } = useSelector(state => state.job)

  return (
    <div className="max-w-7xl mx-auto my-20 text-darkBlue">
      <h1 className="text-4xl font-bold">
        <span className="text-skyBlue">Latest & Top </span>Job Openings
      </h1>

      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length === 0 ? (
          <span className="col-span-3 text-center my-10 text-skyBlue font-medium text-2xl">
            No Jobs Found!
          </span>
        ) : (
          allJobs?.slice(0, 6).map((job, index) => (
            <motion.div
              key={job._id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                },
              }}
              viewport={{ once: true }}
            >
              <LatestJobCards job={job} />
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}

export default LatestJobs
