<template>
  <button @click="toggleNewEditor">Create a New Script</button>
  <!-- <form @submit.prevent="saveEditorScript" v-if="showEditor">
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
  </form> -->
  <ScriptConsole
    v-if="showEditor"
    @toggle-editor="toggleNewEditor"
    :action="saveEditorScript"
    v-model:name="newScript.name"
    v-model:body="newScript.body"
  ></ScriptConsole>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import scriptService from '@/services/scriptService';
import { useScriptStore } from '@/stores/ScriptStore';
// import { createScript } from '@/components/ScriptConsole';
import { useToast } from 'vue-toastification';
import ScriptConsole from '@/components/ScriptConsole.vue';

let newScript = reactive({ name: '', body: '' });
let showEditor = ref(false);
const scriptStore = useScriptStore();
const toast = useToast();

const toggleNewEditor = () => {
  showEditor.value = !showEditor.value;
  if (!showEditor.value) {
    newScript.name = '';
    newScript.body = '';
  }
};

const saveEditorScript = async () => {
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
