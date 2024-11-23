import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

const Register = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-7xl mx-auto text-darkBlue">
      <form
        action=""
        className="w-1/2 border border-gray-200 rounded-md p-4 my-10 shadow-lg"
      >
        <h1 className="font-bold text-3xl mb-7 text-center">
          Register at Rojgaar Hub
        </h1>
        <div className="my-3">
          <Label>
            Full Name
            <Input type="text" placeholder="John Doe" />
          </Label>
        </div>

        <div className="my-3">
          <Label>
            Email Address
            <Input type="email" placeholder="example@email.com" />
          </Label>
        </div>

        <div className="my-3">
          <Label>
            Password
            <Input type="password" />
          </Label>
        </div>

        <div className="my-3">
          <Label>
            Confirm Password
            <Input type="password" />
          </Label>
        </div>

        <div className="my-3">
          <Label>
            Phone Number
            <Input type="number" placeholder="9876543210" />
          </Label>
        </div>

        <div className="flex items-start justify-between my-3">
          <div>
            <Label>Select your role:</Label>
            <RadioGroup
              defaultValue="jobSeeker"
              className="m-3 flex flex-col items-start px-8 "
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="jobSeeker" id="r1" />
                <Label htmlFor="r1" className="cursor-pointer">
                  Job Seeker
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="recruiter" id="r2" />
                <Label htmlFor="r2" className="cursor-pointer">
                  Recruiter
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="r3" />
                <Label htmlFor="r3" className="cursor-pointer">
                  Admin
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
            <Label htmlFor="picture">Profile Picture</Label>
            <Input
              accept="image/*"
              id="picture"
              type="file"
              className="cursor-pointer"
            />
          </div>
        </div>

        <Button type="submit" className="w-full mb-4 bg-darkBlue">
          Register
        </Button>

        <span className="text-sm">
          Already have an account?{"  "}
          <Link to="/login" className="text-skyBlue">
            Login
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Register
