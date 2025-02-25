import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;  // Ambil URL dari .env

export const register = async (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const login = async (userData) => {
  return axios.post(`${API_BASE_URL}/login`, userData);
};
