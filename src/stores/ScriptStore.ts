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
      scriptService.getAllScripts().then(response => {
        this.scripts = response.data;
        console.log('made it here')
        this.scripts.forEach(e => {
          console.log(e);
          
        });

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
    async deleteScript(id: number){
      return this.scripts.filter((script: { scriptId: number; }) => {
        return script.scriptId !== id;
      });
    }
  },
});
