import { Bookmark } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">5 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button size="icon" variant="outline" className="p-6">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </Button>

        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">Nepal</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          doloremque vero deserunt in amet voluptas!
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className="bg-skyBlue text-aliceBlue" variant="ghost">
          12 Positions
        </Badge>
        <Badge className="bg-aliceBlue text-darkBlue" variant="ghost">
          Part Time
        </Badge>
        <Badge className="bg-orangeAccent text-darkBlue" variant="ghost">
          24LPA
        </Badge>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-aliceBlue text-skyBlue hover:bg-[#c8d6e8]">
          Save For Later
        </Button>
      </div>
    </div>
  )
}

export default Job
