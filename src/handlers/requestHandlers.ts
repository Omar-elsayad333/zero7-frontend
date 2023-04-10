import { axiosInstance } from 'config/axios'

// Handle get request
export const getHandler = async (url: string) => {
    try {
        const res = await axiosInstance.get(url)
        return res.data
    } 
    catch (error: any) {
        throw Error(error.response.data.error) 
    }
}

// Handle get by id request
export const getByIdHandler = async (url: string, _id: string) => {
    try {
        const res = await axiosInstance.get(`${url}/${_id}`)
        return res.data
    } 
    catch (error: any) {
        throw Error(error.response.data.error) 
    }
}
