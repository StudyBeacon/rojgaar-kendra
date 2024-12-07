import { createSlice } from "@reduxjs/toolkit"

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null,
    myAllJobs: [],
    searchJobText: "",
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload
    },
    setMyAllJobs: (state, action) => {
      state.myAllJobs = action.payload
    },
    setSearchJobText: (state, action) => {
      state.searchJobText = action.payload
    },
  },
})

export const { setAllJobs, setSingleJob, setMyAllJobs, setSearchJobText } =
  jobSlice.actions
export default jobSlice
