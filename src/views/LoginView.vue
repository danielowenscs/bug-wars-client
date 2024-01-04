<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="user.username" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="user.password" required />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
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
onMounted(() => {
  authStore.init();
});

const login = () => {
  // Handle form submission here

  authService
    .login(user)
    .then((response) => {
      console.log(`Username: ${user.username}, Password: ${user.password}`);
      authStore.setAuthToken(response.data.token);

      authStore.setUser(response.data.user);
      console.log(response.data);
      router.push('/userid/scripts');
    })
    .catch((error) => {
      const response = error.response;
      console.log(response);
      invalidCredentials.value = true;
    });
};
</script>

<style scoped>
/* Add your styles here */
</style>
