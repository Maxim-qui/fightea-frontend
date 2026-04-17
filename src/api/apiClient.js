import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://example.com/api', // replace with your actual API base URL
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

// Authentication endpoints
export const login = (credentials) => apiClient.post('/auth/login', credentials);
export const logout = () => apiClient.post('/auth/logout');

// Menu endpoints
export const getMenu = () => apiClient.get('/menu');
export const getMenuItem = (id) => apiClient.get(`/menu/${id}`);

// Categories endpoints
export const getCategories = () => apiClient.get('/categories');

// Toppings endpoints
export const getToppings = () => apiClient.get('/toppings');

// Orders endpoints
export const createOrder = (orderData) => apiClient.post('/orders', orderData);
export const getOrder = (id) => apiClient.get(`/orders/${id}`);

// Analytics endpoints
export const getAnalytics = () => apiClient.get('/analytics');

export default apiClient;