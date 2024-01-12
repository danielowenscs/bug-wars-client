  import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import LogoutButton from '@/components/LogoutButton.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import { useRouter } from 'vue-router';

describe('LogoutButton.vue', () => {
 const pinia = createPinia();
 const app = createApp(LogoutButton);
 app.use(pinia);
 const authStore = useAuthStore(pinia);

 // Mock Vue Router
 vi.mock('vue-router', async () => {
  const actual = await vi.importActual('vue-router');
  return {
    ...actual,
    useRouter: vi.fn().mockReturnValue({
      push: vi.fn(),
    }),
  };
});

 beforeEach(async()=>{
   authStore.setAuthToken('testToken');
 })

 it('renders properly', async () => {
   const wrapper = mount(LogoutButton) 
   expect(wrapper.text()).toContain('LOGOUT'); // Check if 'Login' 
 });

 it('resets user and token in store and on localStorage', async () => {
   const wrapper = mount(LogoutButton, {
     global: { plugins:[pinia],
     },
   });
   const logoutButton = wrapper.find('button'); 
   const spy = vi.spyOn(logoutButton, 'trigger')
   
   await logoutButton.trigger('click');
   expect(spy).toHaveBeenCalledOnce()
   
   expect(authStore.token).toEqual('');
   expect(localStorage.getItem('token')).toBeNull();

 });

 it('pushes user back to home page', async () => {
  const wrapper = mount(LogoutButton, {
    global: { plugins: [pinia] },
  });
  const logoutButton = wrapper.find('button');
  const spy = vi.spyOn(logoutButton, 'trigger');

  await logoutButton.trigger('click');
  expect(spy).toHaveBeenCalledOnce();
  expect(useRouter().push).toHaveBeenCalledWith('/');
});
});
