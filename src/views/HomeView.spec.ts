import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import HomeView from '@/views/HomeView.vue';


describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
  });
});

