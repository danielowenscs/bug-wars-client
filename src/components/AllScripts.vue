<template>
  <div
    v-for="script in scripts"
    :key="script.scriptId"
    @click="navigateToPage(script.scriptId, script)"
    class="script-list"
  >
    <button class="script-name">{{ script.name }}</button>

    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useScriptStore } from '@/stores/ScriptStore';

const scriptStore = useScriptStore();
const scripts = computed(() => {
  return scriptStore.scripts;
});

const router = useRouter();
const navigateToPage = (scriptId: any, script: any) => {
  router.push({ name: 'script-detail', params: { id: scriptId } });
  scriptStore.setScript(script);
};
</script>

<style scoped>
.script-list {
  color: red;
}
</style>
