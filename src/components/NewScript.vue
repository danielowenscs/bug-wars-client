<template>
  <div>
    <button @click="toggleNewEditor">Create a New Script</button>
    <textarea id="scriptEditorBox" v-if="showNewEditor" v-model="editorScript"></textarea>
    <button id="saveButton" v-if="showNewEditor" @click="saveEditorScript">Save Script</button>
    <button id="cancelButton" v-if="showNewEditor" @click="cancel">Cancel</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useEditorStore } from '../stores/ScriptStore';

const showNewEditor = ref(false);
const editorStore = useEditorStore();
const editorScript = ref('');

const toggleNewEditor = () => {
  showNewEditor.value = !showNewEditor.value;
};

const saveEditorScript = () => {
  editorStore.updateEditorScript(editorScript.value);
  toggleNewEditor();
};
const cancel = () => {
  editorStore.resetEditorScript();
  toggleNewEditor();
};

//TODO: how to push from console.log with api call to save to database with pinia?
//need to add error handling for if a user is not logged in

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
  font-size: 16px;
  resize: none;
}

button {
    cursor: pointer;
}
</style>
