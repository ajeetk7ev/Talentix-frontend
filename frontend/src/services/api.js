import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // You can add auth tokens here if needed
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Global error handling
        const message = error.response?.data?.message || 'Something went wrong';
        console.error('API Error:', message);
        return Promise.reject(error);
    }
);

export default api;
