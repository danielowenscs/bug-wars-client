<template>
  <div
    v-for="script in scripts"
    :key="script.scriptId"
    @click="navigateToPage(script)"
    class="script-list"
  >
    <div>
      <h1 class="script-name">
        {{ script.name }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useScriptStore } from '@/stores/ScriptStore';

const scriptStore = useScriptStore();
const router = useRouter();

onMounted(async () => {
  scriptStore.init();
});
const scripts = computed(() => {
  return scriptStore.scripts;
});
const navigateToPage = (script: any) => {
  router.push({ name: 'script-detail', params: { id: script.scriptId } });
  scriptStore.setScript(script);
};
</script>

<style scoped>
/* .script-list {
  color: red;
} */
</style>
