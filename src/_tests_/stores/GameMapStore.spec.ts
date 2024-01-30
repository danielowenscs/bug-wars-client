import { test,describe,beforeEach,afterEach,vi} from 'vitest'
import { useGameMapStore } from '../../stores/GameMapStore'
import { createPinia, setActivePinia } from 'pinia';
import type { GameMap } from '@/types';


describe('GameMapStore', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    });
    afterEach(()=>{
      sessionStorage.clear();
    })
    
    const mockMaps: GameMap[]  = [
        {id: 1, name: "Map 1", height: 3,width:3, body: "XXX\nX X\nXXX"},
        {id: 2, name: "Map 2", height: 4,width:4, body: "XXXX\nX  X\nX XX\nXXXX"},
        {id: 3, name: "Map 3", height: 2,width:2, body: "XX\nXX"}

    ]

test('setMaps should set all maps', ({ expect }) => {
 const store = useGameMapStore();
 store.setMaps(mockMaps);
 expect(store.maps).toEqual(mockMaps);
})

test('setCurrentMap should set a single gameMap in store and sessionStorage', ({ expect }) => {
    const store = useGameMapStore();
    
  store.setCurrentMap(mockMaps[1]);

  expect(store.currentMap).toEqual(mockMaps[1]);
  expect(sessionStorage.getItem('gameMap')).toBe(JSON.stringify(mockMaps[1]));
});


})