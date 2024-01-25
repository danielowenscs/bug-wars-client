<template>
  <div class="player-script-container">
    <div v-for="player in players" :key="player.name">
      <label>{{ player.name }}</label>
      <select v-model="player.selection">
        <option disabled value="">Select a script</option>
        <option v-for="script in scripts" :key="script.scriptId">
          {{ script.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useScriptStore } from '@/stores/ScriptStore';

const scriptStore = useScriptStore();

const players = ref([
  { name: 'player 1', selection: '' },
  { name: 'player 2', selection: '' },
  { name: 'player 3', selection: '' },
  { name: 'player 4', selection: '' },
]);

const scripts = computed(() => {
  return scriptStore.scripts;
});
onMounted(async () => {
  scriptStore.init();
});
</script>

<style scoped>
.player-script-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
}
</style>
