import { createStore } from "vuex";
import * as user from "./modules/user";
import * as task from "./modules/task";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { user, task },
});
