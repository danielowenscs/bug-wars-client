import { defineStore } from "pinia";
import scriptService from '../services/scriptService';

export const useScriptStore = defineStore("script", {
  state: () => {
    return {
      scripts: [] as Object[],
      script: JSON.parse(sessionStorage.getItem('script')) || {},
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
    async addNewScript(script: Object){
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
