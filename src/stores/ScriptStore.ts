import { defineStore } from 'pinia';

export const useEditorStore = defineStore('editor', {
  state: (): { editorScript: string } => ({
    editorScript: '',
  }),
  actions: {
    updateEditorScript(newScript: string) {
      this.editorScript = newScript;
    },
    resetEditorScript() {
      this.editorScript = '';
    },
  },
});
