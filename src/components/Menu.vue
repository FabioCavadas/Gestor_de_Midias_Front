<template>
  <header class="menu">
    <div class="logo">
      <h1>Gestor de Mídias</h1>
    </div>
    <div class="auth-actions">
      <button v-if="!isAuthenticated" @click="goToRegister">Registrar-se</button>
      <button v-if="!isAuthenticated" @click="goToLogin">Login</button>
      <button v-if="isAuthenticated" @click="logout">Sair</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    }
  },
  methods: {
    goToRegister() {
      this.$router.push('/register');
    },
    goToLogin() {
      this.$router.push('/login');
    },
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;
}
.auth-actions button {
  margin-left: 10px;
}
</style>



