import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import { Badge } from "./ui/badge"
import { useSelector } from "react-redux"

const AppliedJobsTable = () => {
  const { appliedJobs } = useSelector(state => state.job)

  return (
    <div>
      <Table className="border border-gray-200 rounded-xl text-darkBlue">
        <TableCaption>
          {appliedJobs.length >= 0
            ? "A list of your applied jobs."
            : "You've not applied to any jobs yet."}
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-aliceBlue">
          {appliedJobs.length >= 0 &&
            appliedJobs.map(appliedJob => (
              <TableRow key={appliedJob._id}>
                <TableCell>{appliedJob.createdAt.split("T")[0]}</TableCell>
                <TableCell>{appliedJob.job.title}</TableCell>
                <TableCell>{appliedJob.job.company.companyName}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    className={`${
                      appliedJob.status === "pending"
                        ? "bg-gray-500"
                        : appliedJob.status === "accepted"
                        ? "bg-green-500"
                        : "bg-red-500"
                    } hover:bg-skyBlue`}
                  >
                    {appliedJob.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobsTable
