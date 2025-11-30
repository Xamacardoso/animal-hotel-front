import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: "https://animal-hotel-backend.onrender.com/api",
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
