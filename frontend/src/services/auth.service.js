import api from './api';

const authService = {
    login: async (credentials) => {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    },
    signup: async (userData) => {
        const response = await api.post('/auth/signup', userData);
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/auth/logout');
        return response.data;
    },
    getMe: async () => {
        const response = await api.get('/auth/me');
        return response.data;
    },
};

export default authService;
