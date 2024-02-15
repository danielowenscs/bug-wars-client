<template>
  <button v-show="!showEditor" @click="toggleNewEditor" class="primary-button">
    <div class="button-title">NEW</div>
    <img src="../assets/icons/plus.svg" />
  </button>
  <ScriptConsole
    v-if="showEditor"
    @toggle-editor="toggleNewEditor"
    :action="saveEditorScript"
    v-model:name="newScript.name"
    v-model:body="newScript.body"
  />
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import scriptService from '@/services/scriptService';
import { useScriptStore } from '@/stores/ScriptStore';
import { useToast } from 'vue-toastification';
import ScriptConsole from '@/components/ScriptConsole.vue';

let newScript = reactive({ name: '', body: '' });
let showEditor = ref(false);
const scriptStore = useScriptStore();
const toast = useToast();

const toggleNewEditor = () => {
  if (showEditor.value == false) {
    showEditor.value = true;
  } else if (showEditor.value == true) {
    showEditor.value = false;
    newScript.name = '';
    newScript.body = '';
  }
};

const saveEditorScript = () => {
  scriptService
    .createNewScript(newScript)
    .then((response) => {
      console.log(response);
      if (response.status == 201) {
        scriptStore.addNewScript(response.data);
        toast.success('Successful Save');
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

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';
.primary-button {
  text-align: right;
  border: none;
  font-size : 16px;
  display: flex;
  margin: auto;
  padding: 0 16px;
  align-items: center;
  justify-content: right;
}
.primary-button:hover {
  background-color: $Black;
  color: $Primary;
}
img, div {
  cursor: pointer;
}
</style>