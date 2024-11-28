import axios from "axios"
import { toast } from "sonner"
import { useState } from "react"
import { Loader } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import logoImg from "../../assets/logoLightBG.png"
import { setLoading, setUser } from "@/redux/authSlice"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.auth)

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
      dispatch(setLoading(true))

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/login`,
        formInputs,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )

      if (response.status === 200) {
        const { data, message } = response.data
        dispatch(setUser(data.user))
        navigate("/")
        toast.success(message)
      }
    } catch (e) {
      toast.error(e.response.data.message)
    } finally {
      dispatch(setLoading(false))
    }
  }

  return (
    <div className="flex items-center justify-around h-screen w-full text-darkBlue bg-aliceBlue">
      <div className="w-1/3 flex justify-center items-center">
        <img src={logoImg} alt="logo-image" />
      </div>

      <form
        onSubmit={formSubmitHandler}
        className="w-1/3 border border-gray-200 rounded-md p-4 my-10 mr-4 shadow-lg bg-primary-foreground"
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

        {loading ? (
          <Button disabled className="w-full mb-4">
            <Loader className="animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="w-full mb-4 bg-darkBlue">
            Log In
          </Button>
        )}

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
