import { describe, expect, it } from 'vitest';

import EditScript from './EditScript.vue';
import { shallowMount } from '@vue/test-utils';


describe('EditScript.vue', () => {
  it('toggles editor', () => {
    const wrapper = shallowMount(EditScript);
    expect(wrapper.findComponent(EditScript).exists()).toBe(true);
  });
});