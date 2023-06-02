<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      
      <div class="username-container">
        <label>User name</label>
        <input required v-model="username" type="text" placeholder="Login" />
      </div>
      
      <div class="password-container">
        <label>Password</label>
        <input required v-model="password" type="password" placeholder="Password" />
      </div>

      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
  
  
<script>
import { AUTH_REQUEST } from "@/store/actions/auth";

export default {
  name: "login",
  data() {
    return {
      username: "dogo",
      password: "dogy"
    };
  },
  methods: {
    login: function () {
      const { username, password } = this;
      // action во vuex возвращает promise
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push("/"); // переброс
      });
    }
  }
};
</script>


<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>