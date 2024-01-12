import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import UnderConstruction from '@/views/UnderConstruction.vue';

describe('UnderConstruction.vue', () => {
 it('renders correctly', () => {
   const wrapper = mount(UnderConstruction);
   expect(wrapper.text()).toBe('THIS PAGE IS UNDER CONSTRUCTION');
 });
});