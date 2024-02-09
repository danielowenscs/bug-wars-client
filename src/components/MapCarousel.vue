<template>
  <div class="grid-container">
    <nav>
      <button class="nav-button">
        <img class="icon" src="../assets/icons/left-chevron.svg" />
      </button>
    </nav>

    <div class="map-container">
      <img class="map-image" src="../assets/images/map-foggy-pass.jpg" />
    </div>
    <nav>
      <button class="nav-button">
        <img class="icon" src="../assets/icons/right-chevron.svg" />
      </button>
    </nav>
  </div>
  <div class="Body-Text">{{  }}</div>
</template>

<script setup lang="ts">
import { useGameMapStore } from '@/stores/GameMapStore';
import { computed, onMounted } from 'vue';

const mapStore = useGameMapStore();

const maps = computed(() => {
  console.log('computed');
  return mapStore.maps;
});

const setCurrentMap = (data: { currentSlideIndex: any }) => {
  mapStore.setCurrentMap(maps.value[data.currentSlideIndex]);

  console.log(`CURRENT MAP: ${mapStore.currentMap.name}\n${mapStore.currentMap.body}`);
};

onMounted(() => {
  mapStore.init();

});
</script>

<style lang ="scss" scoped>
@import '@/assets/styles/styles.scss';
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 $MobileEdgeInset;
  margin-bottom: 8px;
}
.map-container {
  grid-column: span 2;
  position: relative;
  width: 100%;
}

nav{
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background-color: $Black;
  border-color: $Black;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
img > button {
  height: 24px;
  width:24px;
}
.map-image{
  width: 100%;
  object-fit: cover;
}
.aspect-ratio-container {
  position: relative;
  width: 100%;
}
</style>
