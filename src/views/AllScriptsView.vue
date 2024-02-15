<template>
  <div class="all-script-page">
      <h2 class="Large-Headline-Text">SCRIPTS</h2>
    <div class="new-button">
      <NewScriptVue />
    </div>
    <AllScripts />

  </div>
</template>

<script setup lang="ts">
import NewScriptVue from '../components/NewScript.vue';
import AllScripts from '@/components/AllScripts.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';
.all-script-page {
  margin: 0 $MobileEdgeInset;
}
.Large-Headline-Text {
  text-align: center;
  margin: 0;
  margin-bottom: 80px;
}
</style>