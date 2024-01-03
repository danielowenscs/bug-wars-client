import { defineStore } from "pinia";


export const useScriptStore = defineStore("script", {
	state: () => {
		return {
			scripts: [  {
                scriptId: 1,
                name: 'Script One',
                body: 'Testing a Script',
              },
              {
                scriptId: 2,
                name: 'Script Two',
                body: 'Testing a Second Script',
              },] as any[],
		};
	},
    getters: {

    },
	actions: {
		setAllScripts(scripts: any[]) {
			this.scripts = scripts;
            
		},
	},
});