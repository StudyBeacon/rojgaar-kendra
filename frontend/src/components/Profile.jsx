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
import { useState } from "react"
import UpdateProfileDialog from "./UpdateProfileDialog"

const skills = ["html", "css", "javascript", "react.js"]
const hasResume = true

const Profile = () => {
  const [open, setOpen] = useState(false)

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
                Aayush Dhungel
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                voluptatem sunt minus eum commodi eligendi.
              </p>
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
            <span>aayush123@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 my-2">
            <Phone className="text-darkBlue" />
            <span>9815838632</span>
          </div>
        </div>

        <div className="my-5">
          <h1 className="font-bold text-base">Skills</h1>

          <div className="flex items-center gap-1">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
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

          {hasResume ? (
            <a
              target="_blank"
              href="https://youtube.com"
              className="text-skyBlue w-full hover:underline"
            >
              aayush-dhungel.pdf
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
