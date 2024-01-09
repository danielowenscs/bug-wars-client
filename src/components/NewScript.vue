<template>
  <button @click="toggleNewEditor">Create a New Script</button>
  <form @submit.prevent="saveEditorScript" v-if="showNewEditor">
    <input
      type="text"
      id="scriptTitle"
      placeholder="Enter your script title here."
      v-model="newScript.scriptName"
    />
    <textarea
      id="scriptEditorBox"
      placeholder="Enter your new script code here."
      v-model="newScript.scriptBody"
    ></textarea>
    <button type="submit" id="saveButton">Save Script</button>
    <button id="cancelButton" @click="toggleNewEditor">Cancel</button>
  </form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import scriptService from '../services/scriptService';
import { useToast } from "vue-toastification";

let newScript = reactive({ scriptName: '', scriptBody: '' });
let showNewEditor = ref(false);

const toast = useToast();

const toggleNewEditor = () => {
  showNewEditor.value = !showNewEditor.value;
  if (!showNewEditor.value) {
    newScript.scriptName = '';
    newScript.scriptBody = '';
  }
};

const saveEditorScript = () => {
  console.log(newScript);
  const created_script = {
      script_name: newScript.scriptName,
      script_body: newScript.scriptBody
  }
  scriptService.createNewScript(created_script).then((response) => {
    if(response.status==201){
      toast.success("Successful Save");
    }
  });

  toggleNewEditor();
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
