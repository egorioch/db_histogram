<template>
  <div id="app">
    <span v-if="isLoggedIn"><a @click="logout()">Logout</a></span>
  </div>

  <router-view />
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
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