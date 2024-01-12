<template>
  <button @click="toggleNewEditor">Create a New Script</button>
  <form @submit.prevent="saveEditorScript" v-if="showNewEditor">
    <input
      type="text"
      id="script-title"
      placeholder="Enter your script title here."
      v-model="newScript.name"
    />
    <textarea
      id="script-editor-box"
      placeholder="Enter your new script code here."
      v-model="newScript.body"
    ></textarea>
    <button type="submit" id="save-button">Save Script</button>
    <button id="cancel-button" @click="toggleNewEditor">Cancel</button>
  </form>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import scriptService from '../services/scriptService';
import { useToast } from 'vue-toastification';
import { useScriptStore } from '@/stores/ScriptStore';

let newScript = reactive({ name: '', body: '' });
let showNewEditor = ref(false);

const scriptStore = useScriptStore();
const scripts = computed(() => {
  return scriptStore.scripts;
});

const toast = useToast();

const toggleNewEditor = () => {
  showNewEditor.value = !showNewEditor.value;
  if (!showNewEditor.value) {
    newScript.name = '';
    newScript.body = '';
  }
};

<<<<<<< HEAD
const saveEditorScript = async () => {
=======
const saveEditorScript = () => {
>>>>>>> dev
  scriptService
    .createNewScript(newScript)
    .then((response) => {
      console.log(response);
      if (response.status == 201) {
        scriptStore.addNewScript(response.data);
        toast.success('Successful Save');
        console.log('DATA: ' + response.data);
        toggleNewEditor();
      }
    })
    .catch((error) => {
      if (error.response && error.response.status == 409) {
        toast.error('Script with that name already exists');
      } else {
        toast.error('Error Saving Script, Try again');
      }
    });
};
</script>

<style scoped>
/* textarea {
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
} */
</style>
