import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-chat-application-2-vwyb.onrender.com/api/auth",
});

export const register = (data) => API.post("/register", data);

export const login = (data) => API.post("/login", data);

export const getCurrentUser = (token) =>
  API.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });