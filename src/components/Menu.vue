<template>
  <header class="menu-container">
    <div class="menu-header">
      <router-link to="/">
          <img src="../assets/logo.png" alt="Logo Gestor de Mídias" />          
        </router-link>        
      <div >
        
      </div>
      <h1>Gestor de Mídias Digitais</h1>
      <div class="auth-actions">
        <button @click="goToRegister">Registrar-se</button>        
      </div>      
    </div>    
  </header>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    },
  },
  methods: {
    goToRegister() {
      this.$router.push("/register");
    }
  },
};
</script>

<style scoped>
.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 10px;  
  color: rgb(0, 89, 255);
}

.header {
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 2px 0 0 #333; 
  margin-bottom: 20px; 
}

.logo-title {
  display: flex;
  align-items: center;
}

.auth-actions {
  display: flex;
  align-items: center; 
}

.auth-actions button {
  margin-left: 10px; 
}
</style>
