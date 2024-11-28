import FilterCard from "./FilterCard"
import Job from "./Job"
import Navbar from "./shared/Navbar"

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]

const Jobs = () => {
  return (
    <div className=" text-darkBlue bg-aliceBlue">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-12 h-screen w-full">
        <div className="flex gap-5">
          <div className="w-1/5">
            <FilterCard />
          </div>

          {jobsArray.length === 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[90vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobsArray.map((job, index) => (
                  <Job key={index} />
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
