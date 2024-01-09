import { defineStore } from "pinia";
import scriptService from '../services/scriptService';

export const useScriptStore = defineStore("script", {
  state: () => {
    return {
      scripts: [],
      script: {},
    };
  },
  actions: {
    init() {
      console.log('here')
      scriptService.getAllScripts().then(response => {
        this.scripts = response.data;
        console.log('made it here')
      }).catch(error => {
        console.error('Error fetching scripts:', error);
      });
    },
    setScripts(scripts: any){
      this.scripts = scripts;
    },
    setScript(script: any) {
      this.script = script;
    },
  },
});
