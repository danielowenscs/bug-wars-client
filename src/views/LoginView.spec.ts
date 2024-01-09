import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import LoginViewVue from '@/views/LoginView.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import axios from 'axios';
import authService from '@/services/authService';

// Mocking dependencies



describe('LoginView.vue', () => {
  // Test for rendering
  it('renders properly', async () => {
    const { mockAxiosPost } = vi.hoisted(() => {
        return { mockAxiosPost: vi.fn() };
      });
    const pinia = createPinia();
    const app = createApp(LoginViewVue);
    app.use(pinia);

    beforeEach(async()=>{

      
        vi.mock('axios', async () => {
            const actual = await vi.importActual('axios');
            return {
              ...actual,
              default: {
                post: mockAxiosPost,
              },
            };
          });
         
        vi.mock('vue-router', async () => {
            const actual = await vi.importActual('vue-router');
            return {
              ...actual,
              resolve: vi.fn(),
              RouterLink: {
                template: '<div><slot></slot></div>',
              },
            };
          });
    })

    const mockRouter = {
      push: vi.fn(),
      resolve: vi.fn().mockImplementation((to) => ({ href: to })),
    };

    // Using spy for the router push method
    const mockRouterPush = vi.fn();

    const wrapper = mount(LoginViewVue, {
      global: {
        mocks: {
            
          $router: {push:mockRouterPush,mockRouter,},resolve: vi.fn().mockImplementation((to) => ({ href: to })),
        },
      },
    });

    expect(wrapper.text()).toContain('Login'); // Check if 'Login' text is rendered
        // Simulate user input
        // const usernameInput = wrapper.find('input[type="text"]'); // Adjust selector based on your input element
        // const passwordInput = wrapper.find('input[type="password"]'); // Adjust selector based on your input element
        // await usernameInput.setValue('testuser');
        // await passwordInput.setValue('password');
        
    
        // // Simulate form submission
        // const loginForm = wrapper.find('form'); // Adjust selector based on your form element

        // const spy = vi.spyOn(loginForm, 'trigger')

        // const routerSpy = vi.spyOn(mockRouter,'push');

        // await loginForm.trigger('submit.prevent');
        // // Check if the router was called (assuming a successful login redirects the user)
        // expect(spy).toHaveBeenCalledOnce()
        // expect(routerSpy).toHaveBeenCalled();
        // Further assertions can be added here...
      });
    
      // Other tests...
      
  });
  


