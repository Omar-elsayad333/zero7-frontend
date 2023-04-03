import Urls from 'constants/urls'
import { axiosInstance, createAxiosInstance } from 'config/axios'

export const loginUser = async (data: any) => {
    try {
        const res = await axiosInstance.post(Urls.login, data)
        return res.data
    } 
    catch (error: any) {
        throw Error(error.response.data.error) 
    }
}

export const registerUser = async (data: any) => {
    try {
        const res = await axiosInstance.post(Urls.register, data)
        return res.data
    }
    catch (error: any) {
        throw Error(error.response.data.error)
    }
}

export const getUserData = async (token: string) => {
    const axiosInstanceWithToken = createAxiosInstance(token);
    try {
        const res = await axiosInstanceWithToken.get(Urls.userData)
        return res.data
    }
    catch (error: any) {
        throw Error(error.response.data.error)
    }
}