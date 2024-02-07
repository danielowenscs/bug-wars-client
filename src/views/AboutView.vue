<template>
  <div class="about">
    <h1 class="header">Meet The Team!</h1>

    <div class="images">
      
      <div class="user-container">
        <h2 class="name">{{ memberNames[currentMember] }}</h2>
        <img class="image" :src="useImage('Daniel Owens')" />
      </div>

      <div class="user-container">
        <h2 class="name">{{ memberNames[currentMember] }}</h2>
        <img class="image" :src="useImage('Ethan Reynolds')" />
      </div>

      <!-- <h2 class="name">{{ memberNames[currentMember] }}</h2> -->
      <img class="image" :src="useImage('Maichelle Reynolds')" />
      <!-- <h2 class="name">{{ memberNames[currentMember] }}</h2> -->
      <img class="image" :src="useImage('Jeff Winograd')" />
      <!-- <h2 class="name">{{ memberNames[currentMember] }}</h2> -->
      <img class="image" :src="useImage('Paul Ignagni')" />
      <!-- <h2 class="name">{{ memberNames[currentMember] }}</h2> -->
      <img class="image" :src="useImage('Andrew Balderas')" />
      <!-- <h2 class="name">{{ memberNames[currentMember] }}</h2> -->
      <img class="image" :src="useImage('Maconnell Balderas')" />

    </div>
  </div>
</template>
<script setup lang="ts">

import { ref } from 'vue';
import user from "../../Developer.json";

// All on one page then info it
let currentMember = ref(0);
let memberNames = [ 
  "Daniel Owens", 
  "Ethan Reynolds", 
  "Maichelle Reynolds", 
  "Jeff Winograd", 
  "Paul Ignagni", 
  "Andrew Balderas", 
  "Maconnell Balderas"
];
let memberImages = [ 
  user["Daniel Owens"]["image"], 
  user["Ethan Reynolds"]["image"], 
  user["Maichelle Reynolds"]["image"], 
  user["Jeff Winograd"]["image"], 
  user["Paul Ignagni"]["image"], 
  user["Andrew Balderas"]["image"], 
  user["Maconnell Balderas"]["image"]
];
let memberDescription = [ 
  user["Daniel Owens"]["description"], 
  user["Ethan Reynolds"]["description"], 
  user["Maichelle Reynolds"]["description"], 
  user["Jeff Winograd"]["description"], 
  user["Paul Ignagni"]["description"], 
  user["Andrew Balderas"]["description"], 
  user["Maconnell Balderas"]["description"]
];
let memberGmail = [ 
  user["Daniel Owens"]["gmail"], 
  user["Ethan Reynolds"]["gmail"], 
  user["Maichelle Reynolds"]["gmail"], 
  user["Jeff Winograd"]["gmail"], 
  user["Paul Ignagni"]["gmail"], 
  user["Andrew Balderas"]["gmail"], 
  user["Maconnell Balderas"]["gmail"]
];
let memberGithub = [ 
  user["Daniel Owens"]["github"], 
  user["Ethan Reynolds"]["github"], 
  user["Maichelle Reynolds"]["github"], 
  user["Jeff Winograd"]["github"], 
  user["Paul Ignagni"]["github"], 
  user["Andrew Balderas"]["github"], 
  user["Maconnell Balderas"]["github"]
];
let memberLinkedIn = [ 
  user["Daniel Owens"]["linkedIn"], 
  user["Ethan Reynolds"]["linkedIn"], 
  user["Maichelle Reynolds"]["linkedIn"], 
  user["Jeff Winograd"]["linkedIn"], 
  user["Paul Ignagni"]["linkedIn"], 
  user["Andrew Balderas"]["linkedIn"], 
  user["Maconnell Balderas"]["linkedIn"]
];

const useImage = (name: String) => {
  return new URL(`/src/assets/imgs/${name}.jpg`, import.meta.url).href;
}

const copyURL = () => {
  navigator.clipboard.writeText(memberGmail[currentMember.value])
}

const nextMember = () => {
  if(currentMember.value === memberNames.length - 1) {
    currentMember.value = 0
  } else {
    currentMember.value += 1;
  }
};

const prevMember = () => {
  if(currentMember.value === 0) {
    currentMember.value = memberNames.length - 1
  } else {
    currentMember.value -= 1;
  }
}
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
