import { create } from "zustand"; // golabal state management for authntication
import axios from "axios"; // for making requests to the backend api

// API calls
const API_BASE_URL = "http://localhost:5003/api/auth";

// axios requests to include credentials by default (cookies)
axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,

    signup: async (email, password, name) => {
        set({ isLoading: true });
        try {
            const response = await axios.post(`${API_BASE_URL}/signup`, {
                email,
                password,
                name,
            });

            set({
                user: response.data.user,
                isAuthenticated: true,
                error: null,
                isLoading: false,
            });
        } catch (error) {
            set({
                error: error.response?.data?.message || "signup failed",
                isLoading: false,
            });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },

    verifyEmail: async (code) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_BASE_URL}/verify-email`, {
                code,
            });
            set({
                user: response.data.user,
                isAuthenticated: true,
                isLoading: false,
            });

            return response.data;
        } catch (error) {
            set({
                error: error.response?.data?.message || "signup failed",
                isLoading: false,
            });
            throw error;
        }
    },

    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
            const response = await axios.get(`${API_BASE_URL}/check-auth`);
            set({
                user: response.data.user,
                isAuthenticated: true,
                isCheckingAuth: false,
                isLoading: false,
            });
        } catch (error) {
            set({
                error: null,
                isCheckingAuth: false,
                isLoading: false,
            });
        }
    },
}));
