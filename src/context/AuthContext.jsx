import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Axios instance
    const api = axios.create({
        baseURL: "http://localhost:8001",
    });

    api.interceptors.request.use((config) => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            fetchProfile();
        } else {
            localStorage.removeItem("token");
            setUser(null);
            setLoading(false);
        }
    }, [token]);

    const fetchProfile = async () => {
        try {
            const response = await api.get("/profile");
            setUser(response.data);
        } catch (error) {
            console.error("Failed to fetch profile", error);
            setToken(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await api.post("/login", { email, password });
            setToken(response.data.access_token);
            return true;
        } catch (error) {
            throw new Error(error.response?.data?.detail || "Login failed");
        }
    };

    const signup = async (email, password) => {
        try {
            await api.post("/signup", { email, password });
            return true;
        } catch (error) {
            throw new Error(error.response?.data?.detail || "Signup failed");
        }
    };

    const logout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, user, loading, login, signup, logout, api }}>
            {children}
        </AuthContext.Provider>
    );
};
