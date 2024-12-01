import { useSelector } from "react-redux"
import LatestJobCards from "./LatestJobCards"

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
          allJobs
            ?.slice(0, 6)
            .map(job => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  )
}

export default LatestJobs
