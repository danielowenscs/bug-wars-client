<template>
  <div class="lobby-page">
    <h3>Lobby</h3>
    <!-- Map Gallery -->
    <MapCarousel @fetchMapIndex="fetchMapIndex" />
    <!-- Player/Script Dropdowns -->
    <div style="border: 1px black solid">DROP DOWN MENUS</div>
    <!-- View Scripts Button -->
    <div class="button-section">
      <button @click="$router.push('/scripts')" style="background-color: green">
        View Scripts
      </button>
      <!-- Play Button -->
      <button style="background-color: red">Play</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MapCarousel from '@/components/MapCarousel.vue';
import { ref } from 'vue';

const currentMapIndex = ref(0);

const fetchMapIndex = (emittedIndex: any) => {
  currentMapIndex.value = emittedIndex;
  console.log(currentMapIndex.value);
};
</script>

<style scoped>
.lobby-page {
  margin: auto;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: 20px;
}
.button-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  width: 50vw;
  margin-left: 25%;
}
</style>
