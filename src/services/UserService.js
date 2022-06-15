import apiClient from "./axios";

export default {
  register(userData) {
    return apiClient.post("/register/", userData);
  },

  login(credentials) {
    return apiClient.post("/auth/login/", credentials);
  },
};
