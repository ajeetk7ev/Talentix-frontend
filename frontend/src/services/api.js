import axios from 'axios';
import store from '../store/store';
import { addToast } from '../store/slices/uiSlice';

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
        
        // Show global error toast
        store.dispatch(addToast({
            message,
            type: 'error',
            duration: 5000
        }));

        console.error('API Error:', message);
        return Promise.reject(error);
    }
);

export default api;

