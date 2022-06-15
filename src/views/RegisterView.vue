<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="submit">
      <h3>Username</h3>
      <input v-model="user.username" type="text" autocomplete="username" />

      <h3>Email</h3>
      <input v-model="user.email" type="email" autocomplete="email" />

      <h3>Password1</h3>
      <input
        v-model="user.password1"
        type="password"
        autocomplete="new-password"
      />

      <h3>Password2</h3>
      <input
        v-model="user.password2"
        type="password"
        autocomplete="new-password"
      /><br />

      <input id="formsub" type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },

  methods: {
    submit() {
      const stringCred = JSON.stringify(this.user);
      const userData = JSON.parse(stringCred);

      this.$store.dispatch("register", userData).then(() => {
        this.$router.push({ name: "home" });
      });
    },
  },
};
</script>

<style scoped>
#formsub {
  margin-top: 20px;
}
</style>
