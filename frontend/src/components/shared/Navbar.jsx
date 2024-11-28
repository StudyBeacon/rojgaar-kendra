import { Link } from "react-router-dom"
import { LogOut, UserRound } from "lucide-react"
import { useSelector } from "react-redux"

import { Button } from "../ui/button"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"
import logoImg from "../../assets/logoDarkBG.png"

const Navbar = () => {
  const { user } = useSelector(state => state.auth)

  return (
    <div className="bg-darkBlue">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <img src={logoImg} alt="logo" width={120} />
        </div>

        <div className=" flex font-medium items-center gap-12">
          <ul className="flex text-sm items-center gap-5">
            <Button variant="link" className="text-aliceBlue">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="link" className="text-aliceBlue">
              <Link to="/jobs">Jobs</Link>
            </Button>
            <Button variant="link" className="text-aliceBlue">
              <Link to="/browse">Browse</Link>
            </Button>
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
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent>
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>

                  <div>
                    <h4 className="font-medium text-skyBlue">Aayush Dhungel</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, ex.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mt-5 ml-4">
                  <div className="flex items-center w-fit cursor-pointer">
                    <UserRound />
                    <Button variant="link">
                      <Link to="/profile">View Profile</Link>
                    </Button>
                  </div>

                  <div className="flex items-center w-fit cursor-pointer">
                    <LogOut />
                    <Button variant="link">Log Out</Button>
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
