import axios from 'axios'
import cookies from 'js-cookie'

const axiosInstance = axios.create({
  baseURL: "http://94.74.86.174:8080/api"
})

const LOGIN = '/login'

const login = (requestBody) => {
  return axiosInstance.post(LOGIN, requestBody).then((response) => {
    const loginResponse = response.data
    localStorage.setItem('user', JSON.stringify(loginResponse))
  })
}

const logout = () => {
  localStorage.removeItem('user')
  cookies.remove('token')
}

const authService = {
  login,
  logout
}
export default authService
