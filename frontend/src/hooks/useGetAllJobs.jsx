import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setAllJobs } from "@/redux/jobSlice"

const useGetAllJobs = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/job`,
          {
            withCredentials: true,
          }
        )

        if (response.status === 200) {
          const { data } = response.data
          dispatch(setAllJobs(data.jobs))
        }
      } catch (e) {
        console.error(e)
      }
    }

    fetchAllJobs()
  }, [])
}

export default useGetAllJobs
