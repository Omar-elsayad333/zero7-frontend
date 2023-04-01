import Urls from 'constants/urls'
import axiosInstance from 'config/axios'

export const loginUser = async (data: any) => {
    try {
        const res = await axiosInstance.post(Urls.login, data)
        return res.data
    } catch (error: any) {
        return error.response.data.error
    }
}

export const registerUser = async (data: any) => {
    try {
        const res = await axiosInstance.post(Urls.register, data)
        return res.data
    }
    catch (error: any) {
        return error.response.data.error
    }
}