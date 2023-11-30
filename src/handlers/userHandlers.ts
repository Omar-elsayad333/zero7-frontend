import Urls from 'constants/urls'
import { axiosInstance, createAxiosInstance } from 'config/axios'

// Handle login user
export const loginUser = async (data: any) => {
  try {
    const res = await axiosInstance.post(Urls.login, data)
    return res.data
  } catch (error: any) {
    throw Error(error.response.data.error)
  }
}

// Handle register user
export const registerUser = async (data: any) => {
  try {
    const res = await axiosInstance.post(Urls.register, data)
    return res.data
  } catch (error: any) {
    throw Error(error.response.data.error)
  }
}

// Handle refresh token
export const getRefreshToken = async (data: any) => {
  try {
    const res = await axiosInstance.post(Urls.refreshToken, data)
    return res.data
  } catch (error: any) {
    throw Error(error.response.data.error)
  }
}

// Handle get user data from api
export const getUserData = async (token: string) => {
  const axiosInstanceWithToken = createAxiosInstance(token)
  try {
    const res = await axiosInstanceWithToken.get(Urls.userData)
    return res.data
  } catch (error: any) {
    throw Error(error.response.data.error)
  }
}

// Handle store user tokens in local or session storage
export const storeUser = (tokens: any, rememberMe: boolean = true) => {
  if (rememberMe) {
    localStorage.setItem('zero7_access_token', tokens.accessToken)
    localStorage.setItem('zero7_refresh_token', tokens.refreshToken)
    localStorage.setItem('zero7_access_exp', tokens.accessTokenExpireAt)
    localStorage.setItem('zero7_refresh_exp', tokens.refreshTokenExpireAt)
    sessionStorage.removeItem('zero7_access_token')
    sessionStorage.removeItem('zero7_refresh_token')
    sessionStorage.removeItem('zero7_access_exp')
    sessionStorage.removeItem('zero7_refresh_exp')
  } else {
    sessionStorage.setItem('zero7_access_token', tokens.accessToken)
    sessionStorage.setItem('zero7_refresh_token', tokens.refreshToken)
    sessionStorage.setItem('zero7_access_exp', tokens.accessTokenExpireAt)
    sessionStorage.setItem('zero7_refresh_exp', tokens.refreshTokenExpireAt)
    localStorage.removeItem('zero7_access_token')
    localStorage.removeItem('zero7_refresh_token')
    localStorage.removeItem('zero7_access_exp')
    localStorage.removeItem('zero7_refresh_exp')
  }
}

// Handle user log out
export const logoutUser = async () => {
  localStorage.removeItem('zero7_access_token')
  localStorage.removeItem('zero7_refresh_token')
  localStorage.removeItem('zero7_access_exp')
  localStorage.removeItem('zero7_refresh_exp')
  sessionStorage.removeItem('zero7_access_token')
  sessionStorage.removeItem('zero7_refresh_token')
  sessionStorage.removeItem('zero7_access_exp')
  sessionStorage.removeItem('zero7_refresh_exp')
}
