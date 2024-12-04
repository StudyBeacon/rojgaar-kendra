import { useSelector } from "react-redux"
import Job from "./Job"
import Navbar from "./shared/Navbar"

const Browse = () => {
  const { allJobs } = useSelector(state => state.job)

  return (
    <div className="h-screen w-full bg-aliceBlue">
      <Navbar />
      <div className="max-w-7xl mx-auto my-16">
        <h1 className="font-bold text-xl my-10">
          Search Results: ({allJobs.length})
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {allJobs.map(job => (
            <Job key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Browse
