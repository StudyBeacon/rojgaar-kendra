import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { toast } from "sonner"

const Login = () => {
  const navigate = useNavigate()

  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    role: "jobSeeker",
  })

  const changeEventHandler = e => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
  }
  const handleValueChange = value => {
    setFormInputs({ ...formInputs, ["role"]: value })
  }

  const formSubmitHandler = async e => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        formInputs,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )

      if (response.status === 200) {
        navigate("/")
        toast.success(response.data.message)
      }
    } catch (e) {
      console.error(e)
      toast.error(e.response.data.message)
    }
  }

  return (
    <div className="flex items-center justify-center w-full max-w-7xl mx-auto text-darkBlue">
      <form
        onSubmit={formSubmitHandler}
        className="w-1/2 border border-gray-200 rounded-md p-4 my-10 shadow-lg"
      >
        <h1 className="font-bold text-3xl mb-7 text-center">Log In</h1>
        <div className="my-3">
          <Label>
            Email Address
            <Input
              type="email"
              value={formInputs.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="example@email.com"
            />
          </Label>
        </div>

        <div className="my-3">
          <Label>
            Password
            <Input
              type="password"
              value={formInputs.passwordConfirm}
              name="password"
              onChange={changeEventHandler}
            />
          </Label>
        </div>

        <Label>Select your role:</Label>
        <RadioGroup
          name="role"
          className="m-3 flex flex-col items-start px-8 "
          value={formInputs.role}
          onValueChange={handleValueChange}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="jobSeeker" id="jobSeeker" />
            <Label htmlFor="jobSeeker" className="cursor-pointer">
              Job Seeker
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="recruiter" id="recruiter" />
            <Label htmlFor="recruiter" className="cursor-pointer">
              Recruiter
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="admin" id="admin" />
            <Label htmlFor="admin" className="cursor-pointer">
              Admin
            </Label>
          </div>
        </RadioGroup>

        <Button type="submit" className="w-full mb-4 bg-darkBlue">
          Log In
        </Button>

        <span className="text-sm">
          Don&apos;t have an account?{"  "}
          <Link to="/register" className="text-skyBlue">
            Register
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Login
