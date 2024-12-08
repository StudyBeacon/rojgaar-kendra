import Navbar from "../shared/Navbar"
import ApplicationsTable from "./ApplicationsTable"

const Applicants = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1>Applicants (3)</h1>
        <ApplicationsTable />
      </div>
    </div>
  )
}

export default Applicants
