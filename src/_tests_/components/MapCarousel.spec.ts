import MapCarousel from '@/components/MapCarousel.vue';
import { useGameMapStore } from '@/stores/GameMapStore';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia'
import { describe, expect, it} from 'vitest';

describe('MapCarousel.vue', () => {

    
      it('renders gameMaps properly', () => {
        const pinia = createPinia()
        const store = useGameMapStore(pinia)
        store.setMaps( [{id: 1, name: "Map 1", height: 3,width:3, body: "XXX\nX X\nXXX"},
        {id: 2, name: "Map 2", height: 4,width:4, body: "XXXX\nX  X\nX XX\nXXXX"},
        {id: 3, name: "Map 3", height: 2,width:2, body: "XX\nXX"}]);
       const wrapper = mount(MapCarousel,{ global: {
        plugins: [pinia],
      },});
       expect(wrapper.findComponent(MapCarousel).exists()).toBe(true);
     });
    })