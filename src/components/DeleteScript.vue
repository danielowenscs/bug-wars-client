<template>
  <button id="toggle-button" @click="toggleDelete" class="danger-button">
    <img src="../assets/icons/trash.svg" />
  </button>
  <div v-if="showDelete">
    <h1>Are you sure you want to delete this script</h1>
    <button id="yes-button" @click="handleDelete">Yes</button>
    <button @click="cancelDelete">No</button>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { useScriptStore } from '@/stores/ScriptStore';
import scriptService from '../services/scriptService';

const scriptStore = useScriptStore();
let showDelete = ref(false);
const toast = useToast();

const script = computed(() => {
  return scriptStore.script;
});

const router = useRouter();
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
  scriptService
    .deleteScriptById(scriptId)
    .then((response) => {
      if (response.status == 200) {
        scriptStore.deleteScript(scriptId);
        router.push({ name: 'scripts' });
        toast.success('Script Deleted');
      }
    })
    .catch((error) => {
      console.error(error);
      router.push({ name: 'scripts' });
      toast.error('Script not deleted. Try again');
    });
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';
.danger-button:hover {
  img {
    filter: saturate(100%) hue-rotate(0deg) brightness(0%);
}
}
</style>
