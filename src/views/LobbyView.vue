<template>
  <div class="lobby-page">
    <h2 class="Large-Headline-Text">LOBBY</h2>
    <MapCarousel />
    <PlayerScriptSelector/>
    <div class="button-section">

      <button class="primary-button">Play</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MapCarousel from '@/components/MapCarousel.vue';
import PlayerScriptSelector from '@/components/PlayerScriptSelector.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';

.lobby-page {
  margin: 0 $MobileEdgeInset;
}
.Large-Headline-Text {
  text-align: center;
  margin: 0;
  margin-bottom: 80px;
}
.primary-button {
  margin-top: 40px;
}

</style>
