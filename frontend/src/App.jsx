import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"

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
])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
