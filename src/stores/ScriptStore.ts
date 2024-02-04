import { defineStore } from "pinia";
import scriptService from '../services/scriptService';
import type { Script } from "@/types";
export const useScriptStore = defineStore("script", {
  state: () => {
    return {
      scripts: [] as Script[],
      script: JSON.parse(sessionStorage.getItem('script') || '{}') as Script,
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
      sessionStorage.setItem('script', JSON.stringify(this.script));
    },
    async addNewScript(script: Script){
      this.scripts.push(script);
    },
    deleteScript(id: number){

      for(let i = 0; i<this.scripts.length;i++){
        if (this.scripts[i].scriptId === id){
          this.scripts.splice(i,1);
          return this.scripts;
        } 
      }
      return this.scripts;
     }
     
  },
});
