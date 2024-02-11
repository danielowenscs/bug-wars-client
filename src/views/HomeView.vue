<template>
  <div class="homepage">
    <HeroSection />
    <AboutHomeSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import AboutHomeSection from '@/components/AboutHomeSection.vue';
</script>
<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';

.homepage {
  display: block;
}
</style>
