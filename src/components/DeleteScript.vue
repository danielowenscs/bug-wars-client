<template>
    <div>
        <h1>Are you sure you want to delete this script</h1>
        <button @click="handleYes">Yes</button>
        <button @click="handleNo">No</button>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, defineEmits } from 'vue';
import { useScriptStore } from '@/stores/ScriptStore';

const emits = defineEmits(['noClicked']);


const handleYes = () => {
    console.log('we deleted', script);
}

const handleNo = () => {
    emits('noClicked');
}

const scriptStore = useScriptStore();
let script;

onMounted(() => {
  script = scriptStore.script;
  console.log(script.scriptId);
});
</script>