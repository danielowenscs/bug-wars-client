<template>
  <form class="form" @submit.prevent="action">
    <input
      type="text"
      id="script-title"
      placeholder="Enter your script title here."
      v-model="name"
    />
    <textarea
      id="script-editor-box"
      placeholder="Enter your new script code here."
      v-model="body"
    ></textarea>
    <button type="submit" id="save-button">Save Script</button>
    <button id="cancel-button" @click="toggleEditor">Cancel</button>
  </form>
</template>

<script setup lang="ts">
defineProps(['action']);
const emits = defineEmits(['toggleEditor']);
const name = defineModel('name');
const body = defineModel('body');
const toggleEditor = () => {
  emits('toggleEditor');
};
</script>

<style scoped>
.form {
  display: inline-grid;
}
#script-editor-box {
  min-height: 50vh;
}
</style>
