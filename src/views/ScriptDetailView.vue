<template>
  <div>
    <ScriptDetail />
    <button @click="handleDelete">Delete</button>
    <div v-if="showDelete">
      <DeleteScript @noClicked="handleNo"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import DeleteScript from '@/components/DeleteScript.vue';
import ScriptDetail from '@/components/ScriptDetail.vue';
import { ref } from 'vue';


const handleNo = () => {
  showDelete.value = false;
}

let showDelete = ref(false);

const handleDelete = () => {
    console.log('handle delete');
    showDelete.value = true;
  }

</script>


