import { useState } from "react"
import { useSelector } from "react-redux"
import { Mail, Phone, UserRoundPen } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"
import Navbar from "./shared/Navbar"
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Label } from "./ui/label"
import AppliedJobsTable from "./AppliedJobsTable"
import UpdateProfileDialog from "./UpdateProfileDialog"

const Profile = () => {
  const [open, setOpen] = useState(false)
  const { user } = useSelector(state => state.auth)

  return (
    <div className="pb-14">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-14 bg-aliceBlue text-darkBlue border border-gray-200 rounded-2xl my-5 p-8 shadow-md">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="cursor-pointer size-24">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl text-skyBlue">
                {user?.fullName}
              </h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setOpen(true)}
                >
                  <UserRoundPen />
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>Edit Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail className="text-darkBlue" />
            <span>{user?.email}</span>
          </div>

          <div className="flex items-center gap-3 my-2">
            <Phone className="text-darkBlue" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        <div className="my-5">
          <h1 className="font-bold text-base">Skills</h1>

          <div className="flex items-center gap-1">
            {user?.profile?.skills?.length !== 0 ? (
              user?.profile?.skills?.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-skyBlue text-aliceBlue hover:bg-hover-skyBlue"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="font-bold text-base">Resume</Label>

          {user?.profile?.resumeOriginalName ? (
            <a
              target="_blank"
              href={user?.profile?.resume}
              className="text-skyBlue w-full hover:underline"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>N/A</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-semibold text-lg my-5">Applied Jobs</h1>
        <AppliedJobsTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default Profile
