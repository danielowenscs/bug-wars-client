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
    <span class="error-message" v-show="invalidLogin">{{ errorMessage }}</span>
    <a href="/bug-wars-client/register" class="register-link">Create an account</a>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import authService from '@/services/authService';
import { useRouter } from 'vue-router';

const user = reactive({
  username: '',
  password: '',
});
const invalidLogin = ref(false);

const router = useRouter();

const authStore = useAuthStore();
let errorMessage = ref('');

const login = () => {
  authService
    .login(user)
    .then((response) => {
      if (response.status === 200) {
        authStore.setAuthToken(response.data.token);
        router.push('/lobby');
      }
    })
    .catch((e) => {
      console.log(e);
      if (e.status === 401) {
        invalidLogin.value = true;
        errorMessage.value = 'Incorrect Username or Password.';
      } else {
        invalidLogin.value = true;
        errorMessage.value = 'Cannot login. Please try again later.';
      }
    });
};
</script>

<style scoped>
.login-page {
  display: grid;
  grid-template-areas:
    'login-form'
    'register-link';
  justify-content: center;
  margin: auto;
  width: 100%;
  text-align: center;
  height: calc(var(--vh, 1vh) * 100);
}

.login-form {
  grid-area: 'login-form';
  display: inline-grid;
  padding-top: 5px;
}

input {
  margin-bottom: 10px;
}

.error-message {
  display: block;
  color: red;
  max-width: 50%;
  margin: auto;
  margin-top: 1rem;
  padding-bottom: 10px;
}

button {
  width: 50vw;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.register-link {
  grid-area: 'register-link';
  font-size: 15px;
}
</style>
