<template>
  <div v-for="script in scripts" :key="script.scriptId" class="script-list">
    <router-link class="script-name" :to="'/underconstruction'">{{ script.name }}</router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
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
