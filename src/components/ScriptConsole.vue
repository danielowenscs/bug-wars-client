<template>
  <div class="modal">
    <div class="wrapper">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps(['action']);
const emits = defineEmits(['toggleEditor']);
const name = ref('');
const body = ref('');

const toggleEditor = () => {
  emits('toggleEditor');
};
</script>

<style scoped>
.modal {
  position: fixed;
  padding: auto;
  top: 0;
  left: 0;
  width: 95%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.wrapper {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem 0.5rem 1rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  display: inline-grid;
  width: 200%;
}
#script-title {
  height: 2rem;
  margin-top: 5%;
}
#script-editor-box {
  min-height: 50vh;
}
</style>
