<template>
  <div id="app">
    <span v-if="isLoggedIn"><a @click="logout()">Logout</a></span>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "App",
  computed: {
    isLoggedIn() {
      console.log("this.$store.getters.isLoggedIn: " + this.$store.getters.isLoggedIn);
      console.log("this.$store.getters.authStatus: " + this.$store.getters.authStatus);
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
        .then(() => { 
          this.$router.push('/login')
        })
    }
  }
}
</script>