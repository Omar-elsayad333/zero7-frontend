import { axiosInstance } from 'config/axios'

// Handle login user
export const getHandler = async (url: string) => {
    try {
        const res = await axiosInstance.get(url)
        return res.data
    } 
    catch (error: any) {
        throw Error(error.response.data.error) 
    }
}