import { beforeEach, afterEach, describe, expect, it, vi} from 'vitest';
import { mount } from '@vue/test-utils';
import LoginViewVue from '@/views/LoginView.vue';
import { createPinia,setActivePinia } from 'pinia';
import { useAuthStore } from '@/stores/AuthStore';
import { type AxiosResponse } from 'axios';
import { useRouter } from 'vue-router';
import authService from '@/services/authService';


let wrapper;
vi.mock('@/services/authService');


describe('LoginView.vue', () => {
const pinia = createPinia();

vi.mock('vue-router', async () => {
  const actual = await vi.importActual('vue-router');
  return {
    ...actual,
    useRouter: vi.fn().mockReturnValue({
      push: vi.fn(),
    }),
  };
});



 beforeEach(async() => {
  setActivePinia(pinia);
 });
 afterEach(()=>{
  
  localStorage.clear();

 })

 it('renders properly', async () => {
   wrapper = mount(LoginViewVue);
   expect(wrapper.findComponent(LoginViewVue).exists()).toBe(true);
   expect(wrapper.text()).toContain('LOGIN');
 })

 it('logs in user with correct authentication & pushes user to Lobby', async () => {
   const wrapper = mount(LoginViewVue, {
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
   expect(useRouter().push).toHaveBeenCalledWith('/lobby');
   
 })

 it('displays correct message for 401 error when username & password do not match', async () => {
  const wrapper = mount(LoginViewVue, {
    global: { plugins: [pinia] },
  });
  const mockResponse: AxiosResponse<any, any> = {
   data: {},
   status: 401,
   statusText: '',
   headers: {},
   config: {} as any,
 };

 const authStore = useAuthStore(pinia);
  
  vi.mocked(authService.login).mockRejectedValue(mockResponse)

  const usernameInput = wrapper.find('input[type="text"]'); 
  const passwordInput = wrapper.find('input[type="password"]'); 
  
  await usernameInput.setValue('testuser');
  await passwordInput.setValue('hello');

  const submitButton = wrapper.find('button');
  const spy = vi.spyOn(submitButton, 'trigger');
  await submitButton.trigger('submit.prevent');
  
  expect(spy).toHaveBeenCalledOnce();
  expect(localStorage.getItem('token')).toBeUndefined;
  expect(authStore.token).toBeUndefined;

  await wrapper.vm.$nextTick();
  const errorMessage = wrapper.find('.error-message')
  expect(errorMessage.text()).toEqual('Incorrect Username or Password.')
  
})

})


  


