<template>
  <div v-for="script in scripts" :key="script.scriptId" @click="navigateToPage(script)" class="script-list">
    <div class="Headline-Text script-display">
      <span style="float: left;">{{ script.name }}</span>
      <span style="float: right;">></span>
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
  border: 2px solid $Gray;
  padding: 2%;
}

.script-display span {
  float: left;
}

.script-display span:last-child {
  float: right;
}

.script-list {
  padding: 2%;
} 
</style>
