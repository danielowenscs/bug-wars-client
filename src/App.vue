<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/scripts">Script Editor</RouterLink>
        <RouterLink to="/lobby">Lobby</RouterLink>
        <LogoutButton />
        <HamburgerMenu />
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import LogoutButton from './components/LogoutButton.vue';
import HamburgerMenu from './components/HamburgerMenu.vue';
</script>
