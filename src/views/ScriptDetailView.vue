<template>
  <div class="detail-page">
    <ScriptDetail />
    <UpdateScript @toggleButtons="editorShowing = !editorShowing" />
    <div v-if="!editorShowing">
      <DeleteScript />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ScriptDetail from '@/components/ScriptDetail.vue';
import UpdateScript from '@/components/UpdateScript.vue';
import DeleteScript from '@/components/DeleteScript.vue';

let editorShowing = ref(false);
</script>

<style scoped>
.detail-page {
  margin: auto;
  width: 100%;
  text-align: center;
}
</style>
