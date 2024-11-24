import { Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const HeroSection = () => {
  return (
    <div className="h-full w-full pt-28 pb-20 bg-aliceBlue text-center text-darkBlue">
      <div className="flex flex-col gap-5">
        <span className="font-medium text-lg bg-orangeAccent mx-auto rounded-full px-4 py-1">
          Nepal&apos;s No. 1 <span className="text-skyBlue">Job Portal</span>
        </span>

        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your
          <span className="text-skyBlue"> Dream Job</span>
        </h1>

        <p>
          Find your dream job with ease! Explore opportunities, connect with
          employers, and apply effortlessly today.
        </p>

        <div className="flex w-[40%] shadow-lg items-center mx-auto">
          <Input
            type="text"
            placeholder="Find your job..."
            className="w-full"
          />
          <Button type="submit" className="bg-darkBlue">
            <Search />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
