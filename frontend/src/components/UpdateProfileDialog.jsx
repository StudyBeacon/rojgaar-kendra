import { useState } from "react"
import { Loader } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"
import axios from "axios"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { setLoading, setUser } from "@/redux/authSlice"

const UpdateProfileDialog = ({ open, setOpen }) => {
  const { loading, user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [input, setInput] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map(skill => skill),
    file: user?.profile?.resume,
  })

  const changeEventHandler = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const changeFileHandler = e => {
    setInput({ ...input, file: e.target.files?.[0] })
  }

  const submitHandler = async e => {
    e.preventDefault()

    const formData = prepareFormData(input)

    try {
      dispatch(setLoading(true))

      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      )

      if (response.status === 200) {
        const { data, message } = response.data
        dispatch(setUser(data.user))
        toast.success(message)
      }
    } catch (e) {
      console.error(e)
      toast.error(e.response.data.message)
    } finally {
      dispatch(setLoading(false))
    }

    setOpen(false)
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent
          onInteractOutside={() => setOpen(false)}
          onEscapeKeyDown={() => setOpen(false)}
          className="sm:max-w-[475px] text-darkBlue"
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>

          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullName" className="text-right">
                  Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={input.fullName}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="text-right">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  className="col-span-3 cursor-pointer"
                  onChange={changeFileHandler}
                />
              </div>
            </div>

            <DialogFooter>
              {loading ? (
                <Button disabled className="w-full mb-4">
                  <Loader className="animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit" className="w-full mb-4 bg-darkBlue">
                  Save Changes
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// helper function
function prepareFormData(input) {
  let formData = new FormData()

  Object.keys(input).forEach(el => {
    formData.append(el, input[el])
  })

  return formData
}

export default UpdateProfileDialog
