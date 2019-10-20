<template>
  <div :class="$style.loginPage">
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('user', ['login']),
    handleLogin() {
      this.login()
        .then(() => {
          this.$router.replace({
            name: 'home',
          })
        })
    },
  },
}
</script>

<style lang="scss" module>
.loginPage {
  background: paleturquoise;
  height: 100%;
}
</style>
