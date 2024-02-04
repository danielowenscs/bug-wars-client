import AboutView from '@/views/AboutView.vue';
import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('AboutView.vue', () => {
  it('renders header', () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.find('.header').text()).toBe('Meet The Team!');
  });
});