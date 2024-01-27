import { defineStore } from "pinia";

export const useGameMapStore = defineStore("gameMap", {
    state: () => {
      return {
        maps: [] as Object[],
        currentMap: JSON.parse(sessionStorage.getItem('gameMap')) || {},

      };
    },
    actions: {
        init(){
            this.maps = [
                { id: 1, name: "Willy Wonka's Doghouse", height: 5, width: 5, body: 'XXXXX\nX   X\nX X X\nXX XX\nXXXXX' },
                { id: 2, name: 'Crusader Saloon', height: 7, width: 7, body: 'XXXXXXX\nX     X\nX     X\nX     X\nX     X\nX     X\nXXXXXXX' },
                { id: 3, name: 'Fiery Dragon Lair', height: 3, width: 3, body: 'XXX\nX X\nXXX' },
              ];
        },

        setMaps(mapArray: any){
            this.maps = mapArray;
        },
        setCurrentMap(map: any){
            this.currentMap = map;
            sessionStorage.setItem('gameMap', JSON.stringify(this.currentMap));
        }

       
    },
  });