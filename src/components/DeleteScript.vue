<template>
  <div>
    <h1>Are you sure you want to delete this script</h1>
    <button @click="handleDelete">Yes</button>
    <button @click="cancelDelete">No</button>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { useScriptStore } from '@/stores/ScriptStore';
import scriptService from '../services/scriptService';

const emits = defineEmits(['cancelDelete']);
const scriptStore = useScriptStore();

const router = useRouter();
let script: any;

const handleDelete = async () => {
  const scriptId: number = script.scriptId;
  scriptService.deleteScriptById(scriptId);
  await scriptStore.deleteScript(scriptId);
  router.push({ name: 'scripts' });
};

const cancelDelete = () => {
  emits('cancelDelete');
};

onMounted(() => {
  script = scriptStore.script;
  console.log(script.scriptId);
});
</script>
