import axios from 'axios'

export const loginUser = async (userData: any) => {
    try {
        const res = await axios.post('https://zero7-backend.vercel.app/api/user/login', userData)
        return res
    } catch (error) {
        return error
    }
}