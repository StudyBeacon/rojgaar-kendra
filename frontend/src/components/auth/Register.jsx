import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

const Register = () => {
  const [formInputs, setFormInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
    role: "jobSeeker",
    file: "",
  })

  const changeEventHandler = e => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
  }
  const handleValueChange = value => {
    setFormInputs({ ...formInputs, ["role"]: value })
  }

  const changeFileHandler = e => {
    setFormInputs({ ...formInputs, file: e.target.files?.[0] })
  }

  const formSubmitHandler = async e => {
    e.preventDefault()

    let formData = new FormData()
    formData.append("fullName", formInputs.fullName)
    formData.append("email", formInputs.email)
    formData.append("password", formInputs.password)
    formData.append("passwordConfirm", formInputs.passwordConfirm)
    formData.append("phoneNumber", formInputs.phoneNumber)
    formData.append("role", formInputs.role)

    if (formInputs.file) formData.append("file", formInputs.file)

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      )

      console.log(res.data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-auto text-darkBlue">
      <form
        onSubmit={formSubmitHandler}
        className="w-1/2 border border-gray-200 rounded-md p-4 my-10 shadow-lg"
      >
        <h1 className="font-bold text-3xl mb-7 text-center">Register</h1>
        <div className="my-3">
          <Label>
            Full Name
            <Input
              type="text"
              value={formInputs.fullName}
              name="fullName"
              onChange={changeEventHandler}
              placeholder="John Doe"
            />
          </Label>
        </div>

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
              value={formInputs.password}
              name="password"
              onChange={changeEventHandler}
            />
          </Label>
        </div>

        <div className="my-3">
          <Label>
            Confirm Password
            <Input
              type="password"
              value={formInputs.passwordConfirm}
              name="passwordConfirm"
              onChange={changeEventHandler}
            />
          </Label>
        </div>

        <div className="my-3">
          <Label>
            Phone Number
            <Input
              type="number"
              value={formInputs.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="9876543210"
            />
          </Label>
        </div>

        <div className="flex items-start justify-between my-3">
          <div>
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
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
            <Label htmlFor="picture">Profile Picture</Label>
            <Input
              accept="image/*"
              id="picture"
              type="file"
              className="cursor-pointer"
              onChange={changeFileHandler}
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
