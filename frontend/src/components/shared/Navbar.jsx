import logoImg from "../../assets/logoDarkBG.png"
// import { Link } from "react-router-dom"

import { LogOut, UserRound } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"
import { Link } from "react-router-dom"

const Navbar = () => {
  const user = false
  return (
    <div className="bg-darkBlue">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div className="left-nav">
          <img src={logoImg} alt="Rojgaar Hub" width={120} />
        </div>

        <div className="middle-nav text-aliceBlue flex font-medium items-center gap-16">
          <ul className="flex text-sm items-center gap-10 ">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
        </div>

        {!user ? (
          <div>
            <Link to="/login">
              <Button className="text-white bg-inherit hover:bg-inherit hover:text-muted-foreground">
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
                  <Button variant="link">View Profile</Button>
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
  )
}

export default Navbar
