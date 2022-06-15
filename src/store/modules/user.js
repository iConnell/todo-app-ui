import UserService from "@/services/UserService";
import axios from "axios";

export const state = {
  user: null,
};

export const mutations = {
  SET_USER(state, userData) {
    state.user = userData;
    localStorage.setItem("user", JSON.stringify(userData));
    axios.defaults.headers.common["Authorization"] = `Token ${userData.key}`;
  },
};

export const actions = {
  register({ commit }, cred) {
    UserService.register(cred)
      .then((res) => {
        commit("REGISTER_USER", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  login({ commit }, cred) {
    UserService.login(cred)
      .then((res) => {
        commit("SET_USER", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
