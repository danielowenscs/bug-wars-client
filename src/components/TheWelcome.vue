<template>
  <div>Welcome</div>
  <h4 v-for="(name, index) in customers" :key="index">{{ name }}</h4>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSampleStore } from '@/stores/SampleStore';

const sampleStore = useSampleStore();

const customers = computed(() => {
  return sampleStore.customers;
});
</script>
