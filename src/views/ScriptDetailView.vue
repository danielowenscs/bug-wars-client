<template>
  <div>
    <ScriptDetail />
    <button @click="editScript">Edit Script</button>
    <div v-if="showEdit">
      <UpdateScript  @cancelEdit="cancelEdit"/>
    </div>
    <button @click="deleteScript">Delete Script</button>
    <div v-if="showDelete">
      <DeleteScript  @cancelDelete="cancelDelete"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ScriptDetail from '@/components/ScriptDetail.vue';
import UpdateScript from '@/components/UpdateScript.vue';
import DeleteScript from '@/components/DeleteScript.vue';

let showEdit = ref(false);
let showDelete = ref(false);

const editScript = () => {
    console.log('handle edit');
    showEdit.value = true;
  }

  const cancelEdit = () => {
    console.log('hello')
    showEdit.value = false;
}

const deleteScript = () => {
    console.log('handle delete');
    showDelete.value = true;
  }

  const cancelDelete = () => {
    console.log('hello')
    showDelete.value = false;
}
  
</script>

<style scoped></style>



