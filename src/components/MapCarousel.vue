<template>
  <Carousel @slide-start="setCurrentMap" id="map-carousel" :wrap-around="true">
    <Slide v-for="(map, index) in maps" :key="index">
      <div class="carousel__item">
        <span class="map">
          <pre id="map-body">{{ map.body }}</pre>
        </span>
      </div>
      <div class="Headline-Text"> {{ map.name }} </div>
    </Slide>

    <template #addons > <Navigation /> <Pagination /> </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { useGameMapStore } from '@/stores/GameMapStore';
import { computed, onMounted } from 'vue';

const mapStore = useGameMapStore();

const maps = computed(() => {
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

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';
#map-carousel {
  max-width: 100%;
}
.carousel__item {
  height: 25vh;
  width: 80%;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  border: 1px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}
.map {
  height: 100%;
  width: 80%;
  background-color: $Gray;
  padding-top: 3rem;
  
}
#map-body {
  margin-top: 0px;
  font-size: 14px;
  resize: both;
  overflow: auto;
}

.carousel__slide {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
	background-color: red;
}
</style>
