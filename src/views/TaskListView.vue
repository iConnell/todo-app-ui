<template>
  <div class="home">
    <p>Hello</p>
    <TaskCard v-for="task in task.tasks" :task="task" :key="task.id" />
  </div>
</template>

<script>
// @ is an alias to /src
import TaskCard from "@/components/TaskCard.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: { TaskCard },

  data() {
    return {};
  },

  created() {
    this.$store.dispatch("fetchEvents");
  },

  computed: {
    ...mapState(["task"]),
  },
};
</script>
