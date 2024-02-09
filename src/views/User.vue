<template>
    <div class="about">
      <img class="image" :src="useImage()" />
      <h1 class="header">{{ $route.query.name }}</h1>
      <p class="parag">{{ $route.query.description }}</p>
      <p class="parag">{{ $route.query.gmail }}</p>
      <a class="parag" :href="github">{{ $route.query.github }}</a>
      <a class="parag" :href="linkedIn">{{ $route.query.linkedIn }}</a>
      <button @click="$router.push({path: '/about'})">Back</button>
    </div>
</template>
<script setup lang="ts">
  
import { ref } from 'vue';
import user from "../../Developer.json";
import { useRoute } from 'vue-router'

const route = useRoute()
let image = route.query.image

let linkedIn = `${route.query.linkedIn}`
let github = `${route.query.github}`

const searchParams = new URLSearchParams(window.location.search);

const useImage = () => {
  return new URL(`/src/assets/imgs/${image}`, import.meta.url).href;
}

// const copyURL = () => {
//   navigator.clipboard.writeText(memberGmail[currentMember.value])
// }
</script>
  
<style scoped>
img {
  margin: 10%;
  border-radius: 50%;
  height: 20%;
  width: 20%;
}
.description {
  color: white;
}
.about {
  margin: auto;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: 10px;
}
.header {
  font-size: 40px;
  color: white;
}
.parag {
  font-size: 20px;
  color: white;
}
</style>