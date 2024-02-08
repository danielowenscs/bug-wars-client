<template>
  <header class="wrapper">
    <nav class="navbar">
      <span @click="router.push('/')" class="Headline-Text nav-item">BUG WARS</span>
      <span class="spacer"></span>
      <button
        class="login-logout-button nav-item"
        v-if="token == ''"
        type="button"
        @click="router.push('/login')"
      >
        LOGIN
      </button>
      <LogoutButton v-if="token != ''" class="nav-item" />
      <span class="small-spacer"></span>

      <button id="hamburger-button" class="nav-item">
        <img src="../assets/icons/hamburger-menu.svg" />
      </button>
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

const goToLogin = () => {};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';
.wrapper {
  height: 45.7px;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: $MobileEdgeInset;
  padding-bottom: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid $White 1px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.nav-item {
  margin-right: 10px;
}
.nav-item:hover {
  cursor: pointer;
}
.nav-item:first-child {
  margin-left: 0;
  padding-top: 0.4rem;
}
.nav-item:last-child {
  margin-right: 15px;
}

.spacer {
  flex-grow: 1;
}
.small-spacer {
  width: 8px;
}
#hamburger-button {
  height: 28px;
  width: 28px;
  background-color: $Black;
  border-color: $Black;
  padding: 0;
  /* Center the image using flexbox */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
