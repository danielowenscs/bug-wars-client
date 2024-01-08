<template>
  <button type="button" @click="logout">LOGOUT</button>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { useRouter } from 'vue-router';
const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  console.log('LOgged out');
  router.push('/');
};
</script>

<style scoped></style>
