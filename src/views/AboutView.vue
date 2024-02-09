<template>
  <div class="about">
    <h1 class="header">Meet The Team!</h1>

    <div class="images">
      
      <div class="user-container" @click="$router.push({path: '/user', query: { name: 'Daniel Owens', image: daniel['image'],  description: daniel['description'], gmail: daniel['gmail'], github: daniel['github'], linkedIn: daniel['linkedIn']}})">
        <h2 class="name">Daniel Owens</h2>
        <img class="image" :src="useImage('Daniel Owens')" />
      </div>

      <div class="user-container" @click="$router.push({path: '/user', query: { name: 'Ethan Reynolds', image: ethan['image'],  description: ethan['description'], gmail: ethan['gmail'], github: ethan['github'], linkedIn: ethan['linkedIn']}})">
        <h2 class="name">Ethan Reynolds</h2>
        <img class="image" :src="useImage('Ethan Reynolds')" />
      </div>

      <div class="user-container" @click="$router.push({path: '/user', query: { name: 'Maichelle Reynolds', image: maichelle['image'],  description: maichelle['description'], gmail: maichelle['gmail'], github: maichelle['github'], linkedIn: maichelle['linkedIn']}})">
        <h2 class="name">Maichelle Reynolds</h2>
        <img class="image" :src="useImage('Maichelle Reynolds')" />
      </div>

      <div class="user-container" @click="$router.push({path: '/user', query: { name: 'Jeff Winograd', image: jeff['image'],  description: jeff['description'], gmail: jeff['gmail'], github: jeff['github'], linkedIn: jeff['linkedIn']}})">
        <h2 class="name">Jeff Winograd</h2>
        <img class="image" :src="useImage('Jeff Winograd')" />
      </div>

      <div class="user-container" @click="$router.push({path: '/user', query: { name: 'Paul Ignagni', image: paul['image'],  description: paul['description'], gmail: paul['gmail'], github: paul['github'], linkedIn: paul['linkedIn']}})">
        <h2 class="name">Paul Ignagni</h2>
        <img class="image" :src="useImage('Paul Ignagni')" />
      </div>

      <div class="user-container" @click="$router.push({path: '/user', query: { name: 'Andrew Balderas', image: andrew['image'],  description: andrew['description'], gmail: andrew['gmail'], github: andrew['github'], linkedIn: andrew['linkedIn']}})">
        <h2 class="name">Andrew Balderas</h2>
        <img class="image" :src="useImage('Andrew Balderas')" />
      </div>

      <div class="user-container" @click="$router.push({path: '/user', query: { name: 'Maconnell Balderas', image: maconnell['image'],  description: maconnell['description'], gmail: maconnell['gmail'], github: maconnell['github'], linkedIn: maconnell['linkedIn']}})">
        <h2 class="name">Maconnell Balderas</h2>
        <img class="image" :src="useImage('Maconnell Balderas')" />
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">

import { ref } from 'vue';
import user from "../../Developer.json";

let daniel = {
  image: user["Daniel Owens"]["image"],
  description: user["Daniel Owens"]["description"],
  gmail: user["Daniel Owens"]["gmail"],
  github: user["Daniel Owens"]["github"],
  linkedIn: user["Daniel Owens"]["linkedIn"]
}
let ethan = {
  image: user["Ethan Reynolds"]["image"],
  description: user["Ethan Reynolds"]["description"],
  gmail: user["Ethan Reynolds"]["gmail"],
  github: user["Ethan Reynolds"]["github"],
  linkedIn: user["Ethan Reynolds"]["linkedIn"]
}
let maichelle = {
  image: user["Maichelle Reynolds"]["image"],
  description: user["Maichelle Reynolds"]["description"],
  gmail: user["Maichelle Reynolds"]["gmail"],
  github: user["Maichelle Reynolds"]["github"],
  linkedIn: user["Maichelle Reynolds"]["linkedIn"]
}
let jeff = {
  image: user["Jeff Winograd"]["image"],
  description: user["Jeff Winograd"]["description"],
  gmail: user["Jeff Winograd"]["gmail"],
  github: user["Jeff Winograd"]["github"],
  linkedIn: user["Jeff Winograd"]["linkedIn"]
}
let paul = {
  image: user["Paul Ignagni"]["image"],
  description: user["Paul Ignagni"]["description"],
  gmail: user["Paul Ignagni"]["gmail"],
  github: user["Paul Ignagni"]["github"],
  linkedIn: user["Paul Ignagni"]["linkedIn"]
}
let andrew = {
  image: user["Andrew Balderas"]["image"],
  description: user["Andrew Balderas"]["description"],
  gmail: user["Andrew Balderas"]["gmail"],
  github: user["Andrew Balderas"]["github"],
  linkedIn: user["Andrew Balderas"]["linkedIn"]
}
let maconnell = {
  image: user["Maconnell Balderas"]["image"],
  description: user["Maconnell Balderas"]["description"],
  gmail: user["Maconnell Balderas"]["gmail"],
  github: user["Maconnell Balderas"]["github"],
  linkedIn: user["Maconnell Balderas"]["linkedIn"]
}

const useImage = (name: String) => {
  return new URL(`/src/assets/imgs/${name}.jpg`, import.meta.url).href;
}

// const copyURL = () => {
//   navigator.clipboard.writeText(memberGmail[currentMember.value])
// }

// const nextMember = () => {
//   if(currentMember.value === memberNames.length - 1) {
//     currentMember.value = 0
//   } else {
//     currentMember.value += 1;
//   }
// };

// const prevMember = () => {
//   if(currentMember.value === 0) {
//     currentMember.value = memberNames.length - 1
//   } else {
//     currentMember.value -= 1;
//   }
// }
</script>

<style scoped>
.description {
  color: white;
}
.counters {
  display: flex;
  gap: 20px;
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
.name {
  color: white;
  font-size: 100%;
}
.images {
  float: left;
  width: 100%;
}
.user-container {
  background-color: red;
  border-color: white;
  border-radius: 10%;
  width: 50%;
  border-width: 1px;
  gap: 10px;
  margin: 10px;
}
img {
  margin: 10%;
  border-radius: 50%;
  height: 20%;
  width: 20%;
}
.icon {
  height: 50px;
  width: 50px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
