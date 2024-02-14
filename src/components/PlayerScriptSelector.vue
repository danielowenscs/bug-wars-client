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

    <li class="menu-item" v-for="player in players" :key="player.name">
      <label class="input-label">{{ player.name }}</label>
      <select class="input" v-model="player.selection">
        <option disabled value="">Select a script</option>
        <option v-for="script in scripts" :key="script.scriptId">
          {{ script.name }}
        </option>
      </select>
    </li>

    <li class="menu-item"><button class="primary-button">SAVE</button></li>
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
  display: flex;
  flex-direction: column;
  padding: 8px 20px;
}

li:has(.primary-button) {
  padding-top: 8px;
}
.primary-button {
  padding: 0 20px;
}
</style>
