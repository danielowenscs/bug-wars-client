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
import { reactive, defineEmits } from 'vue';
import { useScriptStore } from '@/stores/ScriptStore';
import scriptService from '../services/scriptService';
const scriptStore = useScriptStore();
const emits = defineEmits(['cancelEdit']);
const script = reactive({
  name: scriptStore.script.name,
  body: scriptStore.script.body,
});

const cancelEdit = () => {
  emits('cancelEdit');
};

const saveEditorScript = () => {
  let scriptId = scriptStore.script.scriptId.toString();
  scriptService.updateScript(script, scriptId).then((response) => {
    if (response.status == 201) {
      scriptStore.addNewScript(response.data);
      console.log('DATA: ' + response.data);
      scriptStore.setScript(response.data);
      cancelEdit();
    }
  });
};
</script>
updateScript
