// import { beforeEach, describe, expect, it, vi } from 'vitest';
// import { mount } from '@vue/test-utils';
// import LogoutButton from './LogoutButton.vue';
// import { createPinia } from 'pinia';
// import { createApp } from 'vue';
// import { useAuthStore } from '@/stores/AuthStore';


// describe('LoginView.vue', () => {
// const pinia = createPinia();
// const app = createApp(LogoutButton);
// app.use(pinia);
// const authStore = useAuthStore(pinia);
// vi.mock('vue-router', async () => {
//     const actual = await vi.importActual('vue-router');
//     return {
//       ...actual,
//       resolve: vi.fn(),
//       RouterLink: {
//         template: '<button><slot></slot></button>',
//       },
//     };
//   });
//   let mockRouter;


//     beforeEach(async()=>{
        

       
//       authStore.setAuthToken('testToken');
//       authStore.setUser('testUser');
        
          
//     })
//   it('renders properly', async () => {
    
//     const wrapper = mount(LogoutButton) 
//     expect(wrapper.text()).toContain('LOGOUT'); // Check if 'Login' 
//       });

//       it('resets user and token in store and on localStorage', async () => {
//     const wrapper = mount(LogoutButton, {
//       global: { plugins:[pinia],
 
//       },
//     });
//     const logoutButton = wrapper.find('button'); 
//         const spy = vi.spyOn(logoutButton, 'trigger')
        
//         await logoutButton.trigger('click');
//         expect(spy).toHaveBeenCalledOnce()
//         expect(authStore.token).toEqual('');
//         expect(authStore.user).toEqual('');
//         expect(localStorage.getItem('token')).toBeNull();
//         expect(localStorage.getItem('user')).toBeNull();
        
//       });
//       // Other tests...
//       it('pushes user back to home page', async () => {
//         mockRouter = {
//               push: vi.fn(),
//               resolve: vi.fn().mockImplementation((to) => ({ href: to })),
//             };
      
//       // Using spy for the router push method
//       const mockRouterPush = vi.fn();
//       const wrapper = mount(LogoutButton, {
//         global: { plugins:[pinia],
//           mocks: { 
//             $router: {push:mockRouterPush,mockRouter,},resolve: vi.fn().mockImplementation((to) => ({ href: to })),
//           },
//         },
//       });
//       const logoutButton = wrapper.find('button'); 
//           const spy = vi.spyOn(logoutButton, 'trigger')
          
//           await logoutButton.trigger('click');
//           expect(spy).toHaveBeenCalledOnce()
          
//         });

      
//   });
  
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import LogoutButton from './LogoutButton.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import { useRouter } from 'vue-router';

describe('LoginView.vue', () => {
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
   authStore.setUser('testUser');
   
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
   expect(authStore.user).toEqual('');
   expect(localStorage.getItem('token')).toBeNull();
   expect(localStorage.getItem('user')).toBeNull();
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
