import TaskService from "@/services/TaskService";

export const state = {
  tasks: [],
};

export const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
};

export const actions = {
  fetchEvents({ commit }) {
    TaskService.getTasks()
      .then((res) => {
        commit("SET_TASKS", res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
