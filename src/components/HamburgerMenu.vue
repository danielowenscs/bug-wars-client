<template>
  <button @click="toggleMenu" class="hamburger menu-button">
    <img src="../assets/icons/hamburger-menu.svg" />
  </button>
  <nav :class="{ open: isOpen }">
    <li class="close-container">
      <button class="close-button" @click="toggleMenu">
        <img src="../assets/icons/close.svg" />
      </button>
    </li>

    <li class="menu-item" v-for="link in navLinks" :key="link.name" @click="navigateTo(link.path)">
      <router-link class="Headline-Text link-text" to="link.path">{{ link.name }}</router-link>
    </li>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, type RouteLocationRaw } from 'vue-router';

const router = useRouter();
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const navLinks = [
  { name: 'ABOUT US', path: '/about' },
  { name: 'LOBBY', path: '/lobby' },
  { name: 'SCRIPTS', path: '/scripts' },
];

const navigateTo = (route: RouteLocationRaw) => {
  router.push(route);
  toggleMenu(); // Close the menu after navigation
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';

.menu-button {
  height: 24px;
  width: 24px;
  background-color: $Black;
  color: black;
  border: 0;
  border-radius: 0;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  /* Initially hidden */
  position: fixed;
  max-height: 0;
  top: 0;
  left: 20%; /* Center the nav under the hamburger button */
  width: 80%;
  overflow: hidden;
  transition: 0.1s ease-out;
  background-color: $Dark-Gray;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

nav.open {
  /* Shown when menu is open */
  min-height: 100%;
  transition: 0.2s ease-in;
}

.menu-item {
  height: 64px;
  line-height: 64px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  list-style-type: none;
}
.link-text {
  text-decoration: none;
}
</style>
