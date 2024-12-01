import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import jobSlice from "./jobSlice"

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    job: jobSlice.reducer,
  },
})

export default store
