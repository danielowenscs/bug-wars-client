<template>
  <button @click="togglePlayerModal" class="edit-players-button Body-Text">
    <img id="people-icon" src="../assets/icons/people.svg" /> EDIT PLAYERS
  </button>

  <div id="player-script-container" :class="{ open: viewModal }">
    <li class="close-container">
      <button @click="togglePlayerModal" class="close-button">
        <img src="../assets/icons/close.svg" />
      </button>
    </li>

    <li v-for="player in players" :key="player.name" class="input-container menu-item">
      <select id="inputField" class="select-input" v-model="player.selection">
        <option value="" disabled>SELECT SCRIPT</option>
        <option v-for="script in scripts" :key="script.scriptId">{{ script.name }}</option>
      </select>
      <label class="input-label">{{ player.name }}</label>
    </li>
    <li class="menu-item">
      <button @click="togglePlayerModal" class="primary-button">SAVE</button>
    </li>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useScriptStore } from '@/stores/ScriptStore';
import { useAuthStore } from '@/stores/AuthStore';

const scriptStore = useScriptStore();
const userStore = useAuthStore();

const players = ref([
  { name: 'YOU', selection: '' },
  { name: 'ENEMY 1', selection: '' },
  { name: 'ENEMY 2', selection: '' },
  { name: 'ENEMY 3', selection: '' },
]);
const viewModal = ref(false);
const togglePlayerModal = () => {
  viewModal.value = !viewModal.value;
};

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

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';

#player-script-container {
  /* Initially hidden */
  position: fixed;
  max-height: 0;
  top: 60px;
  width: 100vw;
  overflow: hidden;
  transition: 0.1s ease-out;
  background-color: $Black;
  z-index: 9999;
}

#player-script-container.open {
  min-height: 100%;
  transition: 0.2s ease-in;
}
.menu-item {
  padding: 8px 15px;
}

.menu-item > label {
  text-align: left;
}

li:has(.primary-button) {
  padding-top: 8px;
}
.primary-button {
  padding: 0 20px;
}

.select-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('../assets/icons/down-chevron.svg');
  background-repeat: no-repeat;
  background-position: 96% center;
  font-family: 'Press Start 2P';
  font-size: 12px;
  display: block;
  color: white;
  height: 64px;
  margin: 0px;
  border: 0px;
  width: 100% -16px;
  background-color: #181818;
  border: 1px solid #8b8b8b;
  padding: 8px;
}
</style>
