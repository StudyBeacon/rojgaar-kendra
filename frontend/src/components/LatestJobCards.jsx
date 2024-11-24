import { Badge } from "./ui/badge"

const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl border border-gray-200 cursor-pointer ">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">Nepal</p>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni.
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
    </div>
  )
}

export default LatestJobCards
