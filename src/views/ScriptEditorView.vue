<template>
  <div class="page">
    <div class="logo">
      <span class="dot">LOGO</span>
      <!-- Placeholder for logo to be replaced later -->
    </div>

    <div class="title">
      <h5>Your Scripts</h5>
    </div>
    <AllScripts />
    <NewScriptVue />
    <div class="wrapper">
      <nav class="home-button">
        <button @click="$router.push('/')">Home</button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import NewScriptVue from '../components/NewScript.vue';
import AllScripts from '@/components/AllScripts.vue';
</script>

<style>
.page {
  line-height: 1.5;
  height: 100vh;
  background-color: #026161;
}
.title {
  margin: auto;
  text-align: center;
  color: white;
}
.wrapper {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: auto;
  margin-bottom: auto;
}
.home-button {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
}
button {
  background-color: purple;
  color: white;
  border-radius: 8px;
  padding: 5% 5%;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
  padding: 5%;
  text-align: center;
}
.dot {
  /* Placeholder circle for logo to remove later */
  height: 150px;
  width: 150px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

@media (min-width: 1024px) {
  .page {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }
  .home-button {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 10px;
  }
  .wrapper {
    margin-left: 50%;
    margin-right: 50%;
    margin-top: auto;
    margin-bottom: auto;
  }

  .page .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
