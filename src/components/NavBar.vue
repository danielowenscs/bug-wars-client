<template>
  <header class="wrapper">
    <nav class="navbar">
      <span class="Headline-Text nav-item">BUG WARS</span>
      <span class="spacer"></span>
      <button class="login-logout-button" v-if="token == ''" type="button" @click="goToLogin">
        LOGIN
      </button>
      <LogoutButton v-if="token != ''" class="nav-item" />
      <span class="small-spacer"></span>
      <div class="nav-item">
        <button><img src="./assets/icons/hamburger-menu.svg" /></button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import LogoutButton from './LogoutButton.vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/AuthStore';
import { storeToRefs } from 'pinia';

const router = useRouter();
const userStore = useAuthStore();

const { token } = storeToRefs(userStore);

const goToLogin = () => {
  router.push('/login');
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';
.wrapper {
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center; /* This centers the navbar horizontally */
  align-items: center; /* This centers the navbar vertically */
  height: 100%; /* Take full height of the parent */
  border-bottom: solid $White 1px;
}

.navbar {
  display: flex;
  justify-content: space-between; /* This centers the items horizontally */
  width: 905%;
  //   margin-inline: 5px;
}

.nav-item {
  margin-right: 10px;
}
.nav-item:first-child {
  margin-left: 0;
  padding-top: 0.2rem;
}
.nav-item:first-child {
  margin-right: 0;
}
.spacer {
  flex-grow: 1;
}
.small-spacer {
  width: 10px;
}
</style>
