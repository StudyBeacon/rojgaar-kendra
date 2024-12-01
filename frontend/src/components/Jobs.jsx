import { useSelector } from "react-redux"
import FilterCard from "./FilterCard"
import Job from "./Job"
import Navbar from "./shared/Navbar"

const Jobs = () => {
  const { allJobs } = useSelector(state => state.job)

  return (
    <div className=" text-darkBlue bg-aliceBlue">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-12 h-screen w-full">
        <div className="flex gap-5">
          <div className="w-1/5">
            <FilterCard />
          </div>

          {allJobs.length === 0 ? (
            <span className="flex justify-center items-center mx-auto text-skyBlue font-medium text-2xl">
              No Jobs Found!
            </span>
          ) : (
            <div className="flex-1 h-[90vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map(job => (
                  <Job key={job._id} job={job} />
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
