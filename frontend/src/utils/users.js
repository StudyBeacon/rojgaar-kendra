import axios from "axios"

export async function registerUser(payload, options) {
  return await axios.post(
    "http://localhost:5000/api/v1/user/register",
    payload,
    options
  )
  // .then(res => res.data)
}

// export function getUser(userId, options) {
//   return baseApi.get(`/users/${userId}`, options).then(res => res.data)
// }
