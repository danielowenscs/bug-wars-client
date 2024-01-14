<template>
  <form @submit.prevent="saveEditorScript">
    <input
      type="text"
      id="scriptTitle"
      placeholder="Enter your script title here."
      v-model="script.name"
    />
    <textarea
      id="scriptEditorBox"
      placeholder="Enter your new script code here."
      v-model="script.body"
    ></textarea>
    <button type="submit" id="saveButton">Save Script</button>
    <div @click="cancelEdit">Discard Changes</div>
  </form>
</template>

<script lang="ts" setup>
import { reactive, defineEmits, onMounted } from 'vue';
import { useScriptStore } from '@/stores/ScriptStore';
import scriptService from '../services/scriptService';
const scriptStore = useScriptStore();
const emits = defineEmits(['cancelEdit']);
const script = reactive({
  name: '',
  body: '',
});

onMounted(() => {
  script.name = scriptStore.script.name;
  script.body = scriptStore.script.body;
  console.log(script.name);
});

const cancelEdit = () => {
  console.log('here');
  emits('cancelEdit');
};

const saveEditorScript = () => {
  const updatedScript = {
    name: script.name,
    body: script.body,
  };
  let scriptId = scriptStore.script.scriptId.toString();
};
</script>
updateScript
