import MapCarousel from '@/components/MapCarousel.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it} from 'vitest';

describe('MapCarousel.vue', () => {

    
      it('renders properly', () => {
       const wrapper = mount(MapCarousel);
       expect(wrapper.findComponent(MapCarousel).exists()).toBe(true);
     });
    })