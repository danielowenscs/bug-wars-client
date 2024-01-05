<template>
  <div>
    SCRIPT DETAIL PAGE
    <div>Script ID: {{ script.scriptId }}</div>
    <div>Title: {{ script.name }}</div>
    <div>Body: {{ script.body }}</div>
    <div>Owner: {{ script.ownerId }}</div>
  </div>
</template>

<script setup lang="ts">
import { useScriptStore } from '@/stores/ScriptStore';
import { reactive, computed, onMounted } from 'vue';
const scriptStore = useScriptStore();

let script = reactive({
  scriptId: null,
  name: '',
  body: '',
  ownerId: null,
});

onMounted(() => {
  script.scriptId = scriptStore.script.scriptId;
  script.name = scriptStore.script.name;
  script.body = scriptStore.script.body;
  script.ownerId = scriptStore.script.ownerId;
});
</script>

<style scoped></style>
