import { defineStore } from "pinia";
import gameMapService from "@/services/gameMapService";
import type { GameMap } from "@/types";

export const useGameMapStore = defineStore("gameMap", {
    state: () => {
      return {
        maps: [] as GameMap[],
        currentMap: JSON.parse(sessionStorage.getItem('gameMap')) as GameMap || {} as GameMap,

      };
    },
    actions: {
        init(){
          gameMapService.getAllMaps().then(response => {
            this.maps = response.data;
          }).catch(error => {
            console.error('Error fetching Game maps:', error);
          });
  
        },

        setMaps(mapArray: GameMap[]){
            this.maps = mapArray;
        },
        setCurrentMap(map: GameMap){
            this.currentMap = map;
            sessionStorage.setItem('gameMap', JSON.stringify(this.currentMap));
        }

       
    },
  });