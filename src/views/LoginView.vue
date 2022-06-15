<template>
  <div>
    <form @submit.prevent="login">
      <h3>Username</h3>
      <input type="text" autocomplete="username" v-model="username" />

      <h3>Password</h3>
      <input
        type="password"
        autocomplete="current-password"
        v-model="password"
      />
      <br />

      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "home" });
        });
    },
  },
};
</script>
