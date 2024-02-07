<template>
  <button id="menu-button" @click="toggleMenu" class="hamburger">
    <img src="../assets/icons/hamburger-menu.svg" />
  </button>
  <nav :class="{ open: isOpen }">
    <div class="close-container">
      <button @click="toggleMenu" class="close-btn">X</button>
    </div>
    <ul>
      <!-- <li class="menu-item"><a href="#home">Home</a></li> -->
      <li
        class="menu-item"
        v-for="link in navLinks"
        :key="link.name"
        @click="navigateTo(link.path)"
      >
        <router-link to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
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
  { name: 'LOGIN', path: '/login' },
  { name: 'SCRIPTS', path: '/scripts' },
];

const navigateTo = (route: RouteLocationRaw) => {
  router.push(route);
  toggleMenu(); // Close the menu after navigation
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';

#menu-button {
  background-color: $Black;
  border: 0;
  border-radius: 0;
  background: none;
}
nav {
  /* Initially hidden */
  position: fixed;
  max-height: 0;
  width: 500px;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: $Dark-Gray;
  z-index: 200;
}

nav.open {
  /* Shown when menu is open */
  max-height: 200px; /* Adjust based on content size */
}
.close-container {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
.menu-item {
  /* Custom styles for the router links */
  text-decoration: none;
  font-size: 16px;
  list-style-type: none; /* Remove bullet points */
  //   &:hover {
  //     color: #666;
  //   }
}
</style>
