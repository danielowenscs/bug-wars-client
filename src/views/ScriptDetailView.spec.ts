import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ScriptDetailView from '@/views/ScriptDetailView.vue';


describe('ScriptDetailView', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ScriptDetailView);
    expect(wrapper.findComponent(ScriptDetailView).exists()).toBe(true);
  });
});