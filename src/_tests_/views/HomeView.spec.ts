import { mount } from '@vue/test-utils';
import { describe, expect, it,vi } from 'vitest';
import HomeView from '@/views/HomeView.vue';

describe('HomeView', () => {
 it('renders properly', () => {
   const wrapper = mount(HomeView);
   expect(wrapper.find('.homepage').exists()).toBe(true);

   expect(wrapper.find('.title h1').text()).toBe('BUG WARS');
   expect(wrapper.findAll('.menu-buttons button').length).toBe(3);
  
 });

 it('navigates to correct routes on button click', async () => {
   const routerPush = vi.fn();
   const wrapper = mount(HomeView, {
     global: {
       mocks: {
         $router: { push: routerPush },
       },
     },
   });

  //  await wrapper.find('.menu-buttons button').trigger('click');
  //  expect(routerPush).toHaveBeenCalledWith('/');

   await wrapper.find('#login-button').trigger('click');
   expect(routerPush).toHaveBeenCalledWith('/login');
 });
});


