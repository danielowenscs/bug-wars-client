<template>
  <div>
    SCRIPT DETAIL PAGE
    <div>Script ID: {{ script.scriptId }}</div>
    <div>Title: {{ script.name }}</div>
    <div>Body: {{ script.body }}</div>
  </div>
</template>

<script setup lang="ts">
import { useScriptStore } from '@/stores/ScriptStore';
import { computed, onUnmounted } from 'vue';
const scriptStore = useScriptStore();

const script = computed(() => {
  return scriptStore.script;
});
onUnmounted(() => {
  scriptStore.setScript({});
});
</script>

<style scoped></style>
