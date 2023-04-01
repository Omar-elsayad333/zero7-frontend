import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://zero7-backend.vercel.app/api/',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('zero7_token')}` 
    }
});

export default axiosInstance;