<template>
  <div class="about">
    <h1 class="header">Meet The Team!</h1>
    <h2>{{ memberNames[currentMember] }}</h2>
    <div>
      <img class="image" :src="useImage()" />
    </div>
    <p class="description">{{ memberDescription[currentMember] }}</p>
    <div class="icons">
      <a @click="copyURL">
        <img class="icon" src="/src/assets/imgs/gmailLogo.png" />
      </a>
      <a :href="memberGithub[currentMember]">
        <img class="icon" src="/src/assets/imgs/githubLogo.png" />
      </a>
      <a :href="memberLinkedIn[currentMember]">
        <img class="icon" src="/src/assets/imgs/linkedInLogo.png" />
      </a>
    </div>
    <button class="prev" @click="prevMember">Previous</button>
    <button class="next" @click="nextMember">Next</button>
  </div>
  <div class="global-test-class">
      this is a global class
    </div>
    <div class="test-global-color">
      this is a global color
    </div>
    <div>
      <h1 class="Large-Headline-Text">Large Heading</h1>
      <h2 class="Headline-Text">Headline</h2>
      <div class="Body-Text">Body</div>
      <div class="Small-Body-Text">Small Body</div>
    </div>
    <div class="container">
  <button class="primary-button">Primary Button</button>
  

<div class= "input-container">
    <input type="text" id="inputField" placeholder="placeholder" class="input">
 <label class="input-label">INPUT FIELD</label>
  </div>
</div>

</template>
<script setup lang="ts">
import { ref } from 'vue';
// All on one page then info it
let currentMember = ref(0);
let memberNames = ["Daniel Owens", "Ethan Reynolds", "Maichelle Reynolds", "Jeff Winograd", "Parker Ignagni", "Andrew Balderas", "Maconnell Balderas"];
let memberImages = ["joeDirt.jpg", "johnConner.jpg", "ellenRipley.jpg", "johnConner.jpg", "joeDirt.jpg", "Andrew.png", "johnConner.jpg"];
let memberDescription = ["Description", "Description", "Description", "Description", "Description", "Description", "Experienced Senior Full Stack Developer with a fervent dedication to crafting enterprise and web applications within the gaming and 5G sectors, employing Agile methodologies. Possesses robust analytical prowess, adept troubleshooting abilities, and a keen eye for debugging, all underscored by a steadfast commitment to code excellence and optimal application performance. Proficient in data structures, design patterns, microservices, continuous delivery, and continuous integration, adept at swiftly grasping and implementing new technologies within dynamic, multicultural settings."];
let memberGmail = ["danielowenscs@gmail.com", "ebud6805@gmail.com", "maichellereynolds2@gmail.com", "jwinograd1@gmail.com", "paulpignagni@gmail.com", "balderas.3@osu.edu", "maconnell.balderas@gmail.com"];
let memberGithub = ["https://github.com/danielowenscs", "https://github.com/ethanrey19", "https://github.com/MaichelleR", "https://github.com/jeffelwino", "https://github.com/Paul-Ignagni", "https://github.com/balderax", "https://github.com/MaconnellBalderas"];
let memberLinkedIn = ["https://www.linkedin.com/in/danielowenscs/", "https://www.linkedin.com/in/ETHAN", "https://www.linkedin.com/in/MAICHELLE", "https://www.linkedin.com/in/jeff-l-winograd/", "https://www.linkedin.com/in/paulignagni/", "https://www.linkedin.com/in/andrewbalderas", "https://www.linkedin.com/in/maconnell-balderas/"];

const useImage = () => {
  return new URL(`/assets/imgs/${memberImages[currentMember.value]}`, import.meta.url).href;
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

<style lang ="scss" scoped>
@import '@/assets/styles/styles.scss';
.container {
  width: 500px;
}

.next {
  bottom: 10px;
  right: 10px;
  width: 120px;
  position: fixed;
}
.prev {
  bottom: 10px;
  left: 10px;
  width: 120px;
  position: fixed;
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
}
img {
  border-radius: 50%;
  height: 50%;
  width: 50%;
}
.icon {
  height: 50px;
  width: 50px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
