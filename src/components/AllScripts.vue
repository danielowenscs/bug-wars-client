<template>
  <div
    v-for="script in scripts"
    :key="script.script_id"
    @click="navigateToPage(script)"
    class="script-list"
  >
    <div>
      <h1>
        {{ script.script_name }}
      </h1>
    </div>

    
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useScriptStore } from '@/stores/ScriptStore';

const scriptStore = useScriptStore();
const router = useRouter();
onMounted(() => {
  scriptStore.init();
});
const scripts = computed(() => {
  console.log(scripts);
  return scriptStore.scripts;
});
const navigateToPage = (script: any) => {
  console.log(script);
  router.push({ name: 'script-detail', params: { id: script.script_id } });
  scriptStore.setScript(script);
};
</script>

<style scoped>
/* .script-list {
  color: red;
} */
</style>
