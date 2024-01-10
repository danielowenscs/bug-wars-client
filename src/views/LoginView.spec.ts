import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import LoginViewVue from '@/views/LoginView.vue';
import { createPinia,setActivePinia } from 'pinia';
import { useAuthStore } from '@/stores/AuthStore';
import { type AxiosResponse } from 'axios';

import { useRouter } from 'vue-router';
import authService from '@/services/authService';
import { afterEach } from 'node:test';

let wrapper;
vi.mock('@/services/authService');
vi.mock('vue-router', async () => {
  const actual = await vi.importActual('vue-router');
  return {
    ...actual,
    useRouter: vi.fn().mockReturnValue({
      push: vi.fn(),
    }),
  };
});

describe('LoginView.vue', () => {
const pinia = createPinia();

 beforeEach(() => {
  setActivePinia(pinia);
 });
 afterEach(()=>{
  vi.resetAllMocks();
  localStorage.clear();

 })

 it('renders properly', async () => {
   wrapper = mount(LoginViewVue);
   expect(wrapper.findComponent(LoginViewVue).exists()).toBe(true);
   expect(wrapper.text()).toContain('Login');
 })

 it('logs in user with correct authentication and pushes them to scripteditor', async () => {
   wrapper = mount(LoginViewVue, {
     global: { plugins: [pinia] },
   });

   const mockUser = {username: 'testuser', password: 'helloworld'};

   const mockResponse: AxiosResponse<any, any> = {
    data: {token:'testToken'},
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {} as any,
  };

  const authStore = useAuthStore(pinia);
   
   vi.mocked(authService.login).mockResolvedValue(mockResponse);

   const usernameInput = wrapper.find('input[type="text"]'); 
   const passwordInput = wrapper.find('input[type="password"]'); 
   await usernameInput.setValue('testuser');
   await passwordInput.setValue('helloworld');

   const submitButton = wrapper.find('button');
   const spy = vi.spyOn(submitButton, 'trigger');
   await submitButton.trigger('submit.prevent');

   expect(authService.login).toHaveBeenCalledWith(mockUser);
   expect(spy).toHaveBeenCalledOnce();
   expect(localStorage.getItem('token')).toEqual(mockResponse.data.token);
   expect(authStore.token).toStrictEqual(mockResponse.data.token);
   expect(useRouter().push).toHaveBeenCalledWith('/scripts');
 })
})


  


