<template>
  <div v-for="script in scripts" :key="script.scriptId" class="script-list">
    <RouterLink class="script-name" :to="'/underconstruction'">{{ script.name }}</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useScriptStore } from '@/stores/ScriptStore';

const scriptStore = useScriptStore();
const scripts = computed(() => {
  return scriptStore.scripts;
});
</script>

<style scoped>
.script-list {
  color: red;
}
</style>
