import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { LogOut, UserRound } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"
import { setUser } from "@/redux/authSlice"

import { Button } from "../ui/button"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"
import logoImg from "../../assets/logoDarkBG.png"

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)

  const handleLogOut = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/logout`,
        {
          withCredentials: true,
        }
      )

      if (response.status === 200) {
        dispatch(setUser(null))
        navigate("/")
        toast.success(response.data.message)
      }
    } catch (e) {
      console.error(e)
      toast.error(e.response.data.message)
    }
  }

  return (
    <div className="bg-darkBlue">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <img src={logoImg} alt="logo" width={120} />
        </div>

        <div className=" flex font-medium items-center gap-12">
          <ul className="flex text-sm items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <Button variant="link" className="text-aliceBlue">
                  <Link to="/my-companies">Companies</Link>
                </Button>
                <Button variant="link" className="text-aliceBlue">
                  <Link to="/my-jobs">Jobs</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="link" className="text-aliceBlue">
                  <Link to="/">Home</Link>
                </Button>
                <Button variant="link" className="text-aliceBlue">
                  <Link to="/jobs">Jobs</Link>
                </Button>
                <Button variant="link" className="text-aliceBlue">
                  <Link to="/browse">Browse</Link>
                </Button>
              </>
            )}
          </ul>

          {!user ? (
            <div>
              <Link to="/login">
                <Button className="text-aliceBlue bg-inherit hover:bg-inherit hover:text-muted-foreground">
                  Log In
                </Button>
              </Link>

              <Link to="/register">
                <Button variant="secondary">Register</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={
                      user?.profile?.profilePhoto ||
                      `https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png`
                    }
                  />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent>
                <div className="flex gap-4 space-y-2 w-fit">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={
                        user?.profile?.profilePhoto ||
                        `https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png`
                      }
                    />
                  </Avatar>

                  <div>
                    <h4 className="font-medium text-skyBlue">
                      {user?.fullName}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mt-5 ml-4">
                  {user && user.role === "jobSeeker" && (
                    <div className="flex items-center w-fit cursor-pointer">
                      <UserRound />
                      <Button variant="link">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}

                  <div className="flex items-center w-fit cursor-pointer">
                    <LogOut />
                    <Button variant="link" onClick={handleLogOut}>
                      Log Out
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
