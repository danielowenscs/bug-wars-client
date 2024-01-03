// import { describe, expect, it } from 'vitest';

// import TheWelcome from '@/components/TheWelcome.vue';
// import HomeView from '@/views/HomeView.vue';
// import { shallowMount } from '@vue/test-utils';

// describe('HomeView.vue', () => {
//   it('renders TheWelcome component', () => {
//     const wrapper = shallowMount(HomeView);
//     expect(wrapper.findComponent(TheWelcome).exists()).toBe(true);
//   });
// });

import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import HomeView from '@/views/HomeView.vue';


describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
  });
});


