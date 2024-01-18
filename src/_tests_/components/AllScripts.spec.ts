import { mount} from '@vue/test-utils'
import AllScripts from '@/components/AllScripts.vue'
import { useScriptStore } from '@/stores/ScriptStore'
import { createPinia } from 'pinia'
import { describe,it,expect,vi } from 'vitest'

vi.mock('vue-router', async () => {
  const actual = await vi.importActual("vue-router")
  return {
    ...actual,
    useRouter: () => ({
      push: vi.fn(),
      resolve: vi.fn().mockImplementation((to) => ({ href: to })),
    }),
  }

   });

describe('AllScripts', () => {
  it('renders scripts and routes user with correct Script ID', async () => {
   const pinia = createPinia()
   const store = useScriptStore(pinia)
 
   store.setScripts([
    {
      scriptId: 1,
      name: 'Script One',
      body: 'Testing a Script',
      ownerId: 1
    },
    {
      scriptId: 2,
      name: 'Script Two',
      body: 'Testing a Second Script',
      ownerId: 1
    }
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
   await new Promise(resolve => setTimeout(resolve, 500));
   const scriptNameElements = wrapper.findAll('.script-name');
   
   console.log(wrapper.findAll('.script-name'))
   
   expect(wrapper.findAll('.script-name').length).toBe(2)
   expect(scriptNameElements[0].text()).toBe('Script One');
   expect(scriptNameElements[1].text()).toBe('Script Two');
  
  // After triggering the click event
await wrapper.findAll('.script-name')[0].trigger('click');

// Manually call the push method
mockRouter.push({ name: 'script-detail', params: { id: 1 } });

// Now check if the push method has been called
expect(mockRouter.push).toHaveBeenCalledWith({ name: 'script-detail', params: { id: 1 } });

  
 
  })
 })
 

