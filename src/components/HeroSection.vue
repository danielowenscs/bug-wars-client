<template>
  <div id="hero">
    <button class="play-button" @click="$router.push('/lobby')">PLAY</button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';
#hero {
  background-image: url('../assets/images/hero-image-mobile.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  //   background-position: center;
  height: 100vh;
  width: 100vw;
  position: absolute; // Position the div absolutely
  top: 60px; // Align the div to the top edge of the parent element
  display: flex; // Use Flexbox for layout
  justify-content: center; // Horizontally center the content
  align-items: flex-start; // Vertically center the content
  padding-top: 60px;
  z-index: 1;

  // overflow: hidden; // Ensure no overflow content is visible
}

.play-button {
  height: 64px;
  width: 40%;
  color: $Primary;
  border: 1px solid $Primary;
  background-color: $Black;
  font-family: 'Press Start 2P';
  font-size: 24px;
  margin-top: 55%;
}
.play-button:hover {
  background-color: $Primary;
  color: $Black;
}
.play-button:active {
  color: $Primary;
  background-color: $Black;
}
</style>
