<template>
  <div class="login-page">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="user.username" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="user.password" required />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import authService from '@/services/authService';
import { useRouter } from 'vue-router';

const user = reactive({
  username: '',
  password: '',
});
const invalidCredentials = ref(false);

const router = useRouter();

const authStore = useAuthStore();

const login = () => {
  authService
    .login(user)
    .then((response) => {
      if (response.status === 200) {
        console.log(`Username: ${user.username}, Password: ${user.password}`);
        console.log(response);
        authStore.setAuthToken(response.data.token);
        router.push('/scripts');
      }
    })
    .catch((error) => {
      const response = error.response;
      console.log(response);
      invalidCredentials.value = true;
    });
};
</script>

<style scoped>
.login-page {
    margin: auto;
    width: 100%;
    text-align: center;
}
.login-form {
    display: inline-grid;
}

input {
    display: block;
    margin-bottom: 20px;
}
</style>
