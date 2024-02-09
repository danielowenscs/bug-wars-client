<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/scripts">Script Editor</RouterLink>
        <RouterLink to="/lobby">Lobby</RouterLink>
        <RouterLink :to="{path: '/user'}" hidden>User</RouterLink>
        <LogoutButton />
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import LogoutButton from './components/LogoutButton.vue';
</script>
