import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth"; // adjust if your backend base URL differs

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });

    const { token } = response.data;

    // Store the token in localStorage
    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!getToken();
};
