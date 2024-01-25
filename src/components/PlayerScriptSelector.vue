<template>
  <div class="player-script-container">
    <div id="selector" v-for="player in players" :key="player.name">
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
import { useAuthStore } from '@/stores/AuthStore';

const scriptStore = useScriptStore();
const userStore = useAuthStore();

const players = ref([
  { name: 'Player', selection: '' },
  { name: 'Enemy 1', selection: '' },
  { name: 'Enemy 2', selection: '' },
  { name: 'Enemy 3', selection: '' },
]);

const scripts = computed(() => {
  //If/else & hardcoded array only for testing while we do not have a 'guest account' set up in backend.
  if (userStore.token === '') {
    return [
      { scriptId: 1, name: 'Cool Script', body: 'XYZ' },
      { scriptId: 2, name: 'Lame Script', body: 'ABC' },
      { scriptId: 3, name: 'Silly Script', body: 'DEF' },
      { scriptId: 4, name: 'Cheese Script', body: 'JKI' },
    ];
  }
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
  gap: 0.8em;
  padding: 1rem;
}
#selector {
  display: flex;
  flex-direction: column;
}

select {
  padding: 5%;
}
</style>
