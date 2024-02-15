import { defineStore } from "pinia";
import gameMapService from "@/services/gameMapService";
import type { GameMap } from "@/types";

export const useGameMapStore = defineStore("gameMap", {
    state: () => {
      return {
        maps: [] as GameMap[],
        currentMap: JSON.parse(sessionStorage.getItem('gameMap') || '{}') as GameMap,

      };
    },
    actions: {
        init(){
          gameMapService.getAllMaps().then(response => {  
            this.maps = response.data;
            let i = 0;
            for (const map of this.maps) {
              const iAsStr : String = i.toString();
              map.imageUrl = 'src/assets/images/map-' + iAsStr + '.png';
              i++;
            }
          }).catch(error => {
            console.error('Error fetching Game maps:', error);
          });
  
        },

        setMaps(mapArray: GameMap[]) {
          this.maps = mapArray;
        },
        setCurrentMap(map: GameMap){
            this.currentMap = map;
            sessionStorage.setItem('gameMap', JSON.stringify(this.currentMap));
        }

       
    },
  });