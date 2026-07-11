import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api/auth",
});

export const register = (data) => API.post("/register", data);

export const login = (data) => API.post("/login", data);

export const getCurrentUser = (token) =>
  API.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });