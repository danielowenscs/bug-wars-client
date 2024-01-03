import { mount} from '@vue/test-utils'
import AllScripts from './AllScripts.vue'
import { useScriptStore } from '@/stores/ScriptStore'
import { createPinia } from 'pinia'
import { describe,it,expect,vi } from 'vitest'

vi.mock('vue-router', () => ({
    resolve: vi.fn(),
    RouterLink: {
        template: '<div><slot></slot></div>',
      }, 
   }));

describe('AllScripts', () => {
 it('renders scripts', async () => {
   const pinia = createPinia()
   const store = useScriptStore(pinia)

   store.setAllScripts([
     {
       scriptId: 1,
       name: 'Script One',
       body: 'Testing a Script',
     },
     {
       scriptId: 2,
       name: 'Script Two',
       body: 'Testing a Second Script',
     },
   ])

   const mockRouter = {
    push: vi.fn(),
    resolve: vi.fn().mockImplementation((to) => ({ href: to })),
  }
 
  const wrapper = mount(AllScripts, {
    global: {
      plugins: [pinia],
      mocks: {
        $router: mockRouter,
      },
    },
  })

   await wrapper.vm.$nextTick() // Wait for Vue to update the DOM
   const scriptNameElements = wrapper.findAll('.script-name');
   expect(wrapper.findAll('.script-name').length).toBe(2)
   expect(scriptNameElements[0].text()).toBe('Script One');
   expect(scriptNameElements[1].text()).toBe('Script Two');

 })
})


