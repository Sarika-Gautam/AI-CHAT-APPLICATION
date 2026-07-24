import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
});

// Register User
export const register = async (data) => {
  const response = await API.post("/register", data);
  return response.data;
};

// Login User
export const login = async (data) => {
  const response = await API.post("/login", data);

  console.log("LOGIN RESPONSE:", response.data);

  return response.data;
};

// Get Current User
export const getCurrentUser = async (token) => {
  const response = await API.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Logout User
export const logout = () => {
  localStorage.removeItem("token");
};

export default API;