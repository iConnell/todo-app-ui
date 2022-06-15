import apiClient from "./axios";
import axios from "axios";

export default {
  getTasks() {
    console.log(axios.defaults.headers.common);
    return apiClient.get("/tasks/");
  },

  getTask(id) {
    return apiClient.get("/task/" + id);
  },
};
