import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.example.com/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
});

export default axiosInstance;