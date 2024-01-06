<template>
  <div>
    <ScriptDetail />
    <button @click="editScript">Edit Script</button>
    <div v-if="showEdit">
      <UpdateScript  @cancelEdit="cancelEdit"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ScriptDetail from '@/components/ScriptDetail.vue';
import UpdateScript from '@/components/UpdateScript.vue';

let showEdit = ref(false);

const editScript = () => {
    console.log('handle edit');
    showEdit.value = true;
  }

  const cancelEdit = () => {
    console.log('hello')
    showEdit.value = false;
}
  
</script>

<style scoped></style>



