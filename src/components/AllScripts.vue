<template>
  <div v-for="script in scripts" :key="script.scriptId" @click="navigateToPage(script)">
    <div class="script-display">
        <div class="Headline-Text">{{ script.name }}</div>
        <img src="../assets/icons/right-chevron.svg" />
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

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';
.script-display {
  display: flex;
  justify-content: space-between;
  background-color: $Dark-Gray;
  border: 1px solid $Gray;
  height: 64px;
  margin: auto;
  padding: 0 16px;
  align-items: center;
  margin-top: 20px;
}
* {
    text-transform: uppercase;
}
</style>