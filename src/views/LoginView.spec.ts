import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import LoginViewVue from '@/views/LoginView.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import axios from 'axios';
import AuthService from '@/services/authService';
import { useRouter } from 'vue-router';

let wrapper;
// Mocking dependencies
describe('LoginView.vue', () => {
  const pinia = createPinia();
  const app = createApp(LoginViewVue);
  app.use(pinia);
  const authStore = useAuthStore(pinia);
  

  vi.mock('@/services/authService', async () => {
    const actual = await vi.importActual('@/services/authService');
    return {
      ...actual,
      login: vi.fn().mockImplementation((user) => {
        console.log('authService.login was called with user:', user);
        return Promise.resolve({ status: 200, data: { token: 'testToken' } });
      }),
    };
   });

  vi.mock('vue-router', async () => {
    const actual = await vi.importActual('vue-router');
    return {
      ...actual,
      useRouter: vi.fn().mockReturnValue({
        push: vi.fn(),
      }),
    };
  });
  beforeEach(() => {
    vi.mock('@/services/authService', async () => {
      const actualAuth = await vi.importActual('@/services/authService');
      return {
        ...actualAuth,
        login: vi.fn().mockResolvedValue({ status: 200, data: { token: 'testToken' } }),
      };
     });
    vi.mock('axios', async () => {
     const actual = await vi.importActual('axios');
     return{
       ...actual,
       post: vi.fn().mockResolvedValue({ data: {token: "testToken"},status: 200 }),
     }
      
    });
   });
   it('renders properly', async () => {
    wrapper = mount(LoginViewVue);
    expect(wrapper.findComponent(LoginViewVue).exists()).toBe(true);
    expect(wrapper.text()).toContain('Login');
  })

    it('logs in user with correct authentication and pushes them to scripteditor', async () => {
      wrapper = mount(LoginViewVue, {
        global: { plugins: [pinia] },
      });
      const postMock = vi.spyOn(axios,'post');
      const authMock = vi.spyOn(AuthService,'login');

      // Simulate user input
        const usernameInput = wrapper.find('input[type="text"]'); 
        const passwordInput = wrapper.find('input[type="password"]'); 
        await usernameInput.setValue('testuser');
        await passwordInput.setValue('helloworld');
       
    
        // // Simulate form submission
        // const loginForm = wrapper.find('form'); 

        const submitButton = wrapper.find('button');
        const spy = vi.spyOn(submitButton, 'trigger');
      
        await submitButton.trigger('submit.prevent');
        console.log()
        expect(postMock).toHaveBeenCalledWith('api/auth/login', {
          username: 'testuser',
          password: 'helloworld',
        });
        expect.soft(authMock).toHaveBeenCalledWith({
          username: 'testuser',
          password: 'helloworld',
        });
        expect(spy).toHaveBeenCalledOnce();
        // expect.soft(authStore.token).toEqual('testToken');
        // expect.soft(localStorage.getItem('token')).toEqual('testToken');
        // expect.soft(useRouter().push).toHaveBeenCalledWith('/scripts');

    })

})

  


