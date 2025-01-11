<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Usuário: </label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Senha: </label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Entrar</button>
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
      login() {
        AuthService.login(this.username, this.password).then(() => {
          this.$router.push('/');
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

.login-container {
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
  margin-bottom: 10px;
  color: #333;
}

p {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
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
  border-color: rgb(0, 89, 255);
  box-shadow: 0 0 5px rgb(0, 89, 255);
}

button {
  padding: 14px;
  background-color: rgb(0, 89, 255);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: rgb(0, 89, 255);
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
  