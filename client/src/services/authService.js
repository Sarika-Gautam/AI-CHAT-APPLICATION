import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
});

// Register
export const register = async (data) => {
  const response = await API.post("/register", data);
  return response.data;
};

// Login
export const login = async (data) => {
  const response = await API.post("/login", data);
  return response.data;
};

// Current User
export const getCurrentUser = async (token) => {
  const response = await API.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
};