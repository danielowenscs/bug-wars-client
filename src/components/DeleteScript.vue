<template>
  <div>
    <h1>Are you sure you want to delete this script</h1>
    <button @click="handleDelete">Yes</button>
    <button @click="cancelDelete">No</button>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useScriptStore } from '@/stores/ScriptStore';
import scriptService from '../services/scriptService';

const emits = defineEmits(['cancelDelete']);
const scriptStore = useScriptStore();

const script = computed(() => {
  return scriptStore.script;
});

const router = useRouter();

const handleDelete = async () => {
  const scriptId: number = script.value.scriptId;
  scriptService.deleteScriptById(scriptId);
  await scriptStore.deleteScript(scriptId);
  router.push({ name: 'scripts' });
};

const cancelDelete = () => {
  emits('cancelDelete');
};
</script>
