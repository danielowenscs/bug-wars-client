<template>
  <button v-show="!showEdit" @click="toggleEditor">Edit Script</button>

  <ScriptConsole
    v-if="showEdit"
    @toggle-editor="toggleEditor"
    :action="saveEditorScript"
    v-model:name="script.name"
    v-model:body="script.body"
  >
  </ScriptConsole>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useScriptStore } from '@/stores/ScriptStore';
// import { updateScript } from '@/components/ScriptConsole';
import scriptService from '@/services/scriptService';
import { useToast } from 'vue-toastification';
import ScriptConsole from '@/components/ScriptConsole.vue';
const scriptStore = useScriptStore();
const emits = defineEmits(['toggleButtons']);
const toast = useToast();
// const emits = defineEmits(['cancelEdit']);
const script = reactive({
  name: scriptStore.script.name,
  body: scriptStore.script.body,
});

let showEdit = ref(false);

const toggleEditor = () => {
  console.log('handle edit');
  if (showEdit.value == false) {
    showEdit.value = true;
  } else if (showEdit.value == true) {
    showEdit.value = false;
    script.name = scriptStore.script.name;
    script.body = scriptStore.script.body;
  }

  emits('toggleButtons');
};

// const cancelEdit = () => {
//   emits('cancelEdit');
// };

const saveEditorScript = () => {
  const scriptId = scriptStore.script.scriptId.toString();
  scriptService
    .updateScript(script, scriptId)
    .then((response) => {
      if (response.status == 201) {
        scriptStore.addNewScript(response.data);
        console.log('DATA: ' + response.data);
        scriptStore.setScript(response.data);
        toast.success('Successful Update');
        toggleEditor();
      }
    })
    .catch((error) => {
      if (error.response && error.response.status == 409) {
        toast.error('Script with that name already exists');
      } else {
        toast.error('Error Updating Script. Try again');
      }
    });
};
</script>
updateScript
