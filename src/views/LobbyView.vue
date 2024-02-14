<template>
  <div class="lobby-page">
    <h3>Lobby</h3>

    <MapCarousel />

    <PlayerScriptSelector />

    <div class="button-section">
      <button @click="$router.push('/scripts')" style="background-color: green">
        View Scripts
      </button>

      <button style="background-color: red">Play</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MapCarousel from '@/components/MapCarousel.vue';
import PlayerScriptSelector from '@/components/PlayerScriptSelector.vue';
</script>

<style scoped>
.lobby-page {
  margin: auto;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
