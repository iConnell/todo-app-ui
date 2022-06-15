<template>
  <div class="event">
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskCard",

  props: {
    task: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
