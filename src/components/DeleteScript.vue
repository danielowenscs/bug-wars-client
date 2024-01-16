<template>
<<<<<<< HEAD
  <button @click="toggleDelete">Delete Script</button>
  <div v-if="showDelete">
=======
  <div>
>>>>>>> 9396666 (changed script property  names to camelcase. started moving files in separate test folders.)
    <h1>Are you sure you want to delete this script</h1>
    <button @click="handleDelete">Yes</button>
    <button @click="cancelDelete">No</button>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useScriptStore } from '@/stores/ScriptStore';
import scriptService from '../services/scriptService';

const scriptStore = useScriptStore();
let showDelete = ref(false);

const script = computed(() => {
  return scriptStore.script;
});

const router = useRouter();
<<<<<<< HEAD
const toggleDelete = () => {
  console.log('handle delete');
  showDelete.value = true;
};

const cancelDelete = () => {
  console.log('hello');
  showDelete.value = false;
};

const handleDelete = async () => {
  const scriptId: number = script.value.scriptId;
  scriptService.deleteScriptById(scriptId);
  await scriptStore.deleteScript(scriptId);
  router.push({ name: 'scripts' });
};
=======
let script: any;

const handleDelete = () => {
  const scriptId: number = script.scriptId;
  scriptService.deleteScriptById(scriptId).then((response) => {
    console.log(response);
  });
  router.push({ name: 'scripts' });
};

const cancelDelete = () => {
  emits('cancelDelete');
};

const scriptStore = useScriptStore();

onMounted(() => {
  script = scriptStore.script;
  console.log(script.scriptId);
});
>>>>>>> 9396666 (changed script property  names to camelcase. started moving files in separate test folders.)
</script>
