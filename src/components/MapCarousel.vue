<template>
  <Carousel @slide-end="emitMapIndex" id="map-carousel" :wrap-around="true">
    <Slide v-for="(map, index) in maps" :key="index">
      <div class="carousel__item">
        <span class="map">{{ map }}</span>
      </div>
    </Slide>

    <template #addons="{ slidesCount }">
      <Navigation v-if="slidesCount > 1" /> <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const emit = defineEmits(['fetchMapIndex']);
const maps = ["Willy Wonka's Doghouse", 'Crusader Saloon', 'Fiery Dragon Lair'];

const emitMapIndex = (data: { currentSlideIndex: any }) => {
  emit('fetchMapIndex', data.currentSlideIndex);
};
</script>

<style scoped>
#map-carousel {
  max-width: 100%;
}
.carousel__item {
  height: 25vh;
  width: 80%;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  border: 1px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
.map {
  height: 100%;
  width: 80%;
  background-color: green;
  padding-top: 3rem;
}

.carousel__slide {
  padding: 10px;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
