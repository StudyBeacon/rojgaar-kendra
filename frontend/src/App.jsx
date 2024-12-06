import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Jobs from "./components/Jobs"
import Browse from "./components/Browse"
import Profile from "./components/Profile"
import JobDescription from "./components/JobDescription"
import Companies from "./components/recruiter/Companies"
import CompanyCreate from "./components/recruiter/CompanyCreate"
import CompanyProfile from "./components/recruiter/CompanyProfile"
import MyJobs from "./components/recruiter/MyJobs"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:jobId",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/my-companies",
    element: <Companies />,
  },
  {
    path: "/register-company",
    element: <CompanyCreate />,
  },
  {
    path: "/my-companies/:companyId",
    element: <CompanyProfile />,
  },
  {
    path: "/my-jobs",
    element: <MyJobs />,
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
