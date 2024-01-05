import { defineStore } from "pinia";


export const useScriptStore = defineStore("script", {
	state: () => {
		return {
			scripts: [  {
                scriptId: 1,
                name: 'Script One',
                body: 'Testing a Script',
                user: {
                  username: "test_user",
                  email: "test_user@gmail.com"
              }
              },
              {
                scriptId: 2,
                name: 'Script Two',
                body: 'Testing a Second Script',
                user: {
                  username: "test_user",
                  email: "test_user@gmail.com"
              }
              },] as any[],
      script: {},
      
		};
	},
    getters: {
      
    },
	actions: {
		setAllScripts(scripts: any[]) {
			this.scripts = scripts;      
		},
    setScript(script:any){
      this.script = script;
    },

	},
});