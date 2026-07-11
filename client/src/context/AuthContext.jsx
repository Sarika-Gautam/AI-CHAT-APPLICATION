import { createContext, useContext } from "react";
import {
  login,
  register,
  logout,
  getCurrentUser,
} from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const registerUser = async (formData) => {
    const res = await register(formData);

    localStorage.setItem("token", res.token);

    return res;
  };

  const loginUser = async (formData) => {
    const res = await login(formData);

    localStorage.setItem("token", res.token);

    return res;
  };

  const logoutUser = () => {
    logout();
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}