<template>
  <button
   v-for="script in scriptStore.scripts"
    :key="script.scriptId"
    @click="toggleEditor(script.scriptId)"
  >
    Edit Script
  </button>
  <form @submit.prevent="saveEditedScript" v-if="showEditor">
    <input type="text" id="scriptTitle" v-model="editScript.scriptName" />
    <textarea id="scriptEditorBox" v-model="editScript.body"></textarea>
    <button type="submit" id="saveButton">Save Updated Script</button>
    <button id="cancelButton" @click="toggleEditor()">Cancel</button>
  </form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useScriptStore } from '@/stores/ScriptStore';

const scriptStore = useScriptStore();
let editScript = reactive({ scriptId: undefined, scriptName: '', body: '' }); 
let showEditor = ref(false);

const toggleEditor = (scriptId?: number) => {
  showEditor.value = !showEditor.value;
  if (showEditor.value && scriptId !== undefined) {
    // Load the script to be edited
    const scriptToEdit = scriptStore.scripts.find((script) => script.scriptId === scriptId);
    if (scriptToEdit) {
      editScript.scriptName = scriptToEdit.name;
      editScript.body = scriptToEdit.body;
      editScript.scriptId = scriptToEdit.scriptId;
    }
  } else {
    // Reset the editScript
    editScript.scriptName = '';
    editScript.body = '';
    editScript.scriptId = undefined;
  }
};

const saveEditedScript = () => {
  scriptStore.updateScript({
    scriptId: editScript.scriptId,
    name: editScript.scriptName,
    body: editScript.body,
  });
  console.log(editScript);
  toggleEditor();
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 14px;
  resize: none;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 14px;
  resize: none;
}

button {
  cursor: pointer;
}
</style>
