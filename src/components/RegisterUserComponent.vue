<template>
    <div class="register-container">
      <h2>Registrar-se</h2>
      <form @submit.prevent="register">
        <div>
          <label for="username">Usuário: </label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Senha: </label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
</template>
  
<script>
  import AuthService from '@/services/auth.service.ts';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      register() {
        AuthService.register(this.username, this.password).then(() => {
          this.$router.push('/login');
        });
      }
    }
  };
</script>
  
<style scoped>

body {
  font-family: Arial, sans-serif;
  background-color: #f4f7fa;
  display: flex;
  justify-content: center;  
  align-items: center;      
  height: 100vh;            
  margin: 0;
  overflow: hidden;         
}

.register-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;  
  margin: auto;      
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
}

input:focus {
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

button {
  padding: 14px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

@media (max-width: 480px) {
  .register {
    padding: 20px;
    width: 90%;
  }

  h2 {
    font-size: 20px;
  }

  button {
    padding: 12px;
  }
}
</style>

  