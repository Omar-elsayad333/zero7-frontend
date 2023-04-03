import axios from 'axios';

// Axios without token
const axiosInstance = axios.create({
    baseURL: 'https://zero7-backend.vercel.app/api/',
    headers: {
        'Content-Type': 'application/json',
    }
});

// Axios with token
const createAxiosInstance = (token: string) => {
    const instance = axios.create({
        baseURL: 'https://zero7-backend.vercel.app/api/',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    return instance;
};

export { createAxiosInstance, axiosInstance };
