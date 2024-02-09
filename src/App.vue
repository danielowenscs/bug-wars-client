<template>
  <NavBar />

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<style>
#map-carousel > button.carousel__next.navigation-button > svg > path, 
#map-carousel > button.carousel__prev.navigation-button > svg > path {
  color: white;
}
</style>
