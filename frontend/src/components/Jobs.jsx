import { useSelector } from "react-redux"
import FilterCard from "./FilterCard"
import Job from "./Job"
import Navbar from "./shared/Navbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Jobs = () => {
  const { allJobs, searchQuery } = useSelector(state => state.job)
  const [filterJobs, setFilterJobs] = useState(allJobs)

  useEffect(() => {
    const filteredJobs = allJobs.filter(job => {
      if (!searchQuery) return true

      return (
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })

    setFilterJobs(filteredJobs)
  }, [allJobs, searchQuery])

  return (
    <div className=" text-darkBlue bg-aliceBlue">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-12 h-screen w-full">
        <div className="flex gap-5">
          <div className="w-1/5">
            <FilterCard />
          </div>

          {filterJobs.length === 0 ? (
            <span className="flex justify-center items-center mx-auto text-skyBlue font-medium text-2xl">
              No Jobs Found!
            </span>
          ) : (
            <div className="flex-1 h-[90vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job, index) => (
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
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Jobs
